interface ImageWatermarkProps {
  mode?: 'card' | 'lightbox';
}

export function ImageWatermark({ mode = 'card' }: ImageWatermarkProps) {
  const sizeClass =
    mode === 'lightbox'
      ? 'w-[10%] min-w-[56px] max-w-[110px]'
      : 'w-[11%] min-w-[38px] max-w-[64px]';

  return (
    <div
      className="pointer-events-none absolute z-20"
      style={{ top: '3%', right: '3%' }}
      aria-hidden="true"
    >
      <img
        src="/images/logo.jpg"
        alt=""
        className={`${sizeClass} h-auto rounded-md shadow-lg ring-1 ring-black/10`}
        loading="lazy"
      />
    </div>
  );
}
