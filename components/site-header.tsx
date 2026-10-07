import { BookingTrigger } from '@/components/booking-trigger'

const links = [
  { href: '#sweet-16', label: 'Sweet 16' },
  { href: '#pro', label: 'Pro Career' },
  { href: '#coaching', label: 'Coaching' },
]

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="flex items-baseline gap-2 text-primary-foreground">
          <span className="font-display text-2xl uppercase">Coach Brown</span>
          <span className="font-display text-sm text-accent">#25</span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <BookingTrigger className="rounded-sm bg-accent px-4 py-2 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5">
            Train with me
          </BookingTrigger>
        </nav>
      </div>
    </header>
  )
}
