type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="display-title text-3xl leading-tight md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-[var(--muted)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
