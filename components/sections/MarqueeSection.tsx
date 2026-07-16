const brands = [
  "Plastic surgery",
  "Skin care",
  "Rejuvenation",
  "Rhinoplasty",
  "Non-surgical care",
  "Specialist consult",
];

export function MarqueeSection() {
  const items = [...brands, ...brands];
  return (
    <div className="overflow-hidden border-y border-border bg-surface py-3" aria-hidden>
      <div className="animate-marquee flex w-max gap-8 pe-8">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs font-medium tracking-wide whitespace-nowrap text-muted"
          >
            {item}
            <span className="ms-8 text-border">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
