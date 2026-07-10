import Link from "next/link";
import { BioluminescentHeroBackgroundShell } from "@/components/scene/bioluminescent-hero-background-shell";
import { profile } from "@/data/content";

export function BioluminescentHero() {
  return (
    <section className="relative min-h-screen min-h-[100svh] min-h-[100dvh] overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <BioluminescentHeroBackgroundShell />
      </div>

      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_36%,rgba(0,0,0,0.24)_62%,rgba(0,0,0,0.78)_100%)]" />

      <div className="relative z-20 flex min-h-screen min-h-[100svh] min-h-[100dvh] flex-col items-center justify-center px-5 pb-12 pt-28 text-center select-none sm:px-6 sm:pb-14 sm:pt-[7.5rem] md:pb-16 md:pt-36">
        <div className="pointer-events-none space-y-6 mix-blend-color-dodge md:space-y-8">
          <p className="animate-pulse text-[0.68rem] font-mono uppercase tracking-[0.38em] text-cyan-300/80 sm:text-xs md:text-base md:tracking-[0.5em]">
            Ahmedabad Based Flutter Developer
          </p>

          <h1 className="display-title font-black tracking-[-0.08em] text-white">
            <span className="block text-[1.95rem] leading-[0.95] sm:text-[2.45rem] md:text-[4rem] lg:text-[4.8rem]">
              {profile.name}
            </span>
            <span className="block bg-gradient-to-b from-white to-white/10 bg-clip-text text-[2.95rem] leading-[0.9] text-transparent sm:text-[3.8rem] md:text-8xl lg:text-9xl">
              {profile.title}
            </span>
          </h1>

          <p className="mx-auto max-w-[19rem] text-sm font-light leading-7 text-blue-100/60 sm:max-w-xl sm:text-base sm:leading-relaxed md:max-w-3xl md:text-lg">
            Building responsive Flutter applications with strong API integration,
            Dio-driven networking, Firebase-connected workflows, and reliable multi-platform
            delivery.
            <br />
            Flutter developer focused on real user-facing products and AI-assisted development.
          </p>
        </div>

        <div className="pointer-events-none mt-7 flex max-w-[21rem] flex-wrap items-center justify-center gap-2.5 text-[0.62rem] uppercase tracking-[0.14em] text-white/72 sm:max-w-2xl sm:text-xs md:mt-8 md:gap-3 md:text-sm md:tracking-[0.18em]">
          <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 sm:px-4">
            {profile.location}
          </span>
          <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 sm:px-4">
            Dio / BLoC / Firebase
          </span>
          <span className="rounded-full border border-white/12 bg-white/6 px-3 py-2 sm:px-4">
            Flutter Developer & AI-Assisted Development
          </span>
        </div>

        <div className="pointer-events-auto mt-10 md:mt-12">
          <Link
            href="/projects"
            className="group relative inline-flex overflow-hidden border border-white/20 bg-transparent px-7 py-3.5 transition-all hover:border-cyan-400/50 sm:px-10 sm:py-4"
          >
            <div className="absolute inset-0 translate-y-full bg-cyan-500/10 transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative font-mono text-xs uppercase tracking-[0.28em] text-white transition-colors group-hover:text-cyan-300 sm:text-sm sm:tracking-widest">
              View Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
