export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 pb-28 pt-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="font-display text-3xl uppercase">
          Sherwood Brown <span className="text-accent">#25</span>
        </p>
        <nav aria-label="Social" className="flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-widest">
          <a href="https://www.instagram.com/coachbrown_tpba/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            @coachbrown_tpba
          </a>
          <a href="https://www.instagram.com/train_underdaradar/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            @train_underdaradar
          </a>
          <a href="https://www.instagram.com/motionpicwoo/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            @motionpicwoo
          </a>
          <a
            href="https://fgcuathletics.com/sports/mens-basketball/roster/sherwood-brown/1524"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            FGCU Profile
          </a>
          <a href="https://en.wikipedia.org/wiki/Sherwood_Brown" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            Wikipedia
          </a>
        </nav>
        <p className="text-sm text-primary-foreground/60">{'© '}{new Date().getFullYear()} Coach Brown</p>
      </div>
    </footer>
  )
}
