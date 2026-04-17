import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const args = new Set(process.argv.slice(2));
const writeMode = args.has('--write');
const checkMode = args.has('--check') || !writeMode;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const publicDir = path.join(repoRoot, 'public');
const contentDir = path.join(publicDir, 'content');
const galleryDir = path.join(publicDir, 'images', 'gallery');

function toPosix(p) {
  return p.replace(/\\/g, '/');
}

function parseFlags() {
  const modeLabel = writeMode ? 'WRITE' : 'CHECK';
  console.log(`[gallery-prune] Mode: ${modeLabel}`);
  console.log(`[gallery-prune] Content dir: ${contentDir}`);
  console.log(`[gallery-prune] Gallery dir: ${galleryDir}`);
}

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function walkFiles(dir, extFilter = null) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walkFiles(full, extFilter)));
      continue;
    }
    if (!extFilter || extFilter(full)) out.push(full);
  }
  return out;
}

function collectReferencedGalleryPaths(node, refs) {
  if (typeof node === 'string') {
    if (node.startsWith('/images/gallery/')) {
      refs.add(toPosix(node));
    }
    return;
  }
  if (Array.isArray(node)) {
    for (const item of node) collectReferencedGalleryPaths(item, refs);
    return;
  }
  if (node && typeof node === 'object') {
    for (const value of Object.values(node)) collectReferencedGalleryPaths(value, refs);
  }
}

async function getReferencedPaths() {
  const refs = new Set();
  const jsonFiles = await walkFiles(contentDir, (file) => file.endsWith('.json'));

  for (const file of jsonFiles) {
    const raw = await fs.readFile(file, 'utf8');
    let data;
    try {
      data = JSON.parse(raw);
    } catch (error) {
      const rel = toPosix(path.relative(repoRoot, file));
      throw new Error(`Invalid JSON in ${rel}: ${error.message}`);
    }
    collectReferencedGalleryPaths(data, refs);
  }

  return refs;
}

async function getExistingGalleryPaths() {
  if (!(await pathExists(galleryDir))) return [];
  const files = await walkFiles(galleryDir);
  return files.map((file) => {
    const relFromPublic = toPosix(path.relative(publicDir, file));
    return `/${relFromPublic}`;
  });
}

async function main() {
  parseFlags();

  if (!(await pathExists(contentDir))) {
    throw new Error(`Missing content directory: ${contentDir}`);
  }
  if (!(await pathExists(galleryDir))) {
    throw new Error(`Missing gallery directory: ${galleryDir}`);
  }

  const referenced = await getReferencedPaths();
  const existing = await getExistingGalleryPaths();
  const existingSet = new Set(existing);

  const unused = existing.filter((file) => !referenced.has(file)).sort();
  const missing = Array.from(referenced).filter((file) => !existingSet.has(file)).sort();

  console.log(`[gallery-prune] Referenced gallery files: ${referenced.size}`);
  console.log(`[gallery-prune] Existing gallery files: ${existing.length}`);
  console.log(`[gallery-prune] Unused gallery files: ${unused.length}`);
  console.log(`[gallery-prune] Missing referenced files: ${missing.length}`);

  if (missing.length) {
    console.log('[gallery-prune] Missing files referenced by content:');
    for (const file of missing) console.log(`  - ${file}`);
  }

  if (!unused.length) {
    console.log('[gallery-prune] No unused gallery files found.');
    return;
  }

  console.log('[gallery-prune] Unused files:');
  for (const file of unused) console.log(`  - ${file}`);

  if (writeMode) {
    for (const publicPath of unused) {
      const diskPath = path.join(publicDir, publicPath.slice(1));
      await fs.unlink(diskPath);
    }
    console.log(`[gallery-prune] Deleted ${unused.length} unused file(s).`);
    return;
  }

  if (checkMode) {
    console.log('[gallery-prune] Run with --write to delete these files.');
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(`[gallery-prune] Error: ${error.message}`);
  process.exitCode = 1;
});
