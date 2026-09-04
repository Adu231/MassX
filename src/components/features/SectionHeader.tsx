interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, highlight, subtitle, centered = true }: SectionHeaderProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {label && (
        <div className={`flex items-center gap-2 mb-3 ${centered ? "justify-center" : ""}`}>
          <span className="glow-dot" />
          <span className="section-label">{label}</span>
        </div>
      )}
      <h2 className="font-heading text-display-sm lg:text-display-md text-white mb-4">
        {titleParts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {titleParts[1]}
      </h2>
      {subtitle && (
        <p className="text-[#8b9cc7] text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
