# Media Maintenance

This project stores gallery images in git, so repo size grows over time unless old unused files are cleaned.

## Remove Unused Gallery Files

Dry-run (shows files that are safe to delete):

```bash
npm run media:prune:check
```

Delete unused files:

```bash
npm run media:prune:write
```

What the script does:

- Scans all JSON files under `public/content`.
- Collects every referenced path that starts with `/images/gallery/`.
- Compares references against actual files in `public/images/gallery`.
- Deletes only files that are not referenced anywhere in `public/content` (when `--write` is used).

## Recommended Workflow

1. Publish CMS changes.
2. Run `npm run media:prune:check`.
3. If unused files are listed, run `npm run media:prune:write`.
4. Commit the cleanup.

## Automated Guard

- Workflow: `.github/workflows/gallery-media-size-guard.yml`
- Trigger: push to `migrate-to-cloudflare` when gallery/content files change.
- Behavior: fails the workflow if `public/images/gallery` exceeds `100MB`.
- It does not auto-delete or auto-commit.

## Commit Size / History Growth

Do not auto-destroy commit history every N commits. With a CMS-backed production branch, frequent history rewrites require force-push and can break collaborators, deployments, and rollback safety.

Safer options:

1. Keep history intact and prune unused media regularly (recommended).
2. Use squash merges for non-CMS feature branches.
3. Move media to object storage/CDN (R2/S3/Cloudinary) if image volume keeps growing.
4. If history rewrite is absolutely required, do it as a rare planned maintenance window, not as an automatic trigger.
