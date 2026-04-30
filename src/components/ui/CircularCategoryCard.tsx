interface CircularCategoryCardProps {
  label: string;
  image: string;
  itemCount: number;
  onClick: () => void;
}

export function CircularCategoryCard({ label, image, itemCount, onClick }: CircularCategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center gap-3 cursor-pointer focus:outline-none"
      aria-label={`Browse ${label} collection`}
    >
      {/* Circular image */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden ring-2 ring-border-light group-hover:ring-pink transition-all duration-300 shadow-card group-hover:shadow-card-hover">
        <img
          src={image}
          alt={label}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-pink/0 group-hover:bg-pink/10 transition-colors duration-300 rounded-full" />
      </div>

      {/* Label */}
      <div className="text-center">
        <p className="font-heading text-brown text-sm font-semibold group-hover:text-pink transition-colors duration-200 leading-tight">
          {label}
        </p>
        <p className="font-body text-text-muted text-xs mt-0.5">
          {itemCount} {itemCount === 1 ? 'piece' : 'pieces'}
        </p>
      </div>
    </button>
  );
}
