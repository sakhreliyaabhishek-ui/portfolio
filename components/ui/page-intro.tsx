type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="section-shell py-8 md:py-14">
      <div className="glass-panel rounded-[1.6rem] px-6 py-8 sm:px-7 sm:py-9 md:rounded-[2rem] md:px-12 md:py-14">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title mt-3 max-w-4xl text-2xl leading-tight sm:mt-4 sm:text-4xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base md:mt-5 md:text-lg md:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}
