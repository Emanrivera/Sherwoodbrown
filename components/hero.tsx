import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="top"
      className="torn-bottom relative overflow-hidden bg-primary pb-20 text-primary-foreground md:min-h-[44rem] lg:min-h-[48rem]"
    >
      <div
        aria-hidden="true"
        className="hero-photo-fade pointer-events-none absolute inset-y-0 right-0 w-[78%] md:w-[62%] lg:w-[58%]"
      >
        <Image
          src="/images/fgcu-freethrow.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 60vw, 80vw"
          className="object-cover object-[60%_20%] opacity-60 mix-blend-luminosity grayscale contrast-150 brightness-110"
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 pt-28 md:px-8 md:pt-36">
        <div className="relative z-10 flex flex-col justify-end gap-8 md:max-w-2xl md:pb-10">
          <p className="animate-rise flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            Player · Pro · Coach
          </p>
          <h1
            className="animate-rise font-display text-7xl uppercase leading-[0.85] text-balance sm:text-8xl lg:text-[10rem]"
            style={{ animationDelay: '80ms' }}
          >
            Sherwood
            <br />
            <span className="text-accent">Brown</span>
          </h1>
          <p
            className="animate-rise max-w-lg text-lg leading-relaxed text-primary-foreground/80 text-pretty"
            style={{ animationDelay: '160ms' }}
          >
            He led the first 15-seed in history to the Sweet 16, then took his game from the NBA G League
            across ten countries as a pro. Now he&apos;s passing it on.
          </p>
          <div className="animate-rise flex flex-wrap gap-3" style={{ animationDelay: '240ms' }}>
            <a
              href="#coaching"
              className="rounded-sm bg-accent px-6 py-3.5 font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Book a session
            </a>
            <a
              href="#sweet-16"
              className="rounded-sm border border-primary-foreground/30 px-6 py-3.5 font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              The story
            </a>
          </div>
        </div>

        <div className="relative z-10 hidden items-end justify-end gap-6 md:absolute md:bottom-24 md:right-8 md:flex">
          <p className="font-display text-4xl uppercase leading-none">
            A-Sun
            <br />
            POY <span className="text-accent">{"'13"}</span>
          </p>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
            Florida Gulf
            <br />
            Coast Univ.
          </p>
        </div>
      </div>
    </section>
  )
}
