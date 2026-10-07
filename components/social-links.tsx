import { InstagramIcon } from '@/components/instagram-icon'
import { socials } from '@/lib/socials'

export function SocialLinks() {
  return (
    <nav aria-label="Instagram accounts" className="relative mt-10 border-t border-accent-foreground/20 pt-6">
      <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-10">
        {socials.map((s) => (
          <li key={s.handle}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-accent-foreground/80 transition-colors hover:text-accent-foreground"
            >
              <InstagramIcon className="size-5 shrink-0" />
              <span className="flex flex-col leading-tight">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{s.category}</span>
                <span className="text-sm underline-offset-4 group-hover:underline">@{s.handle}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
