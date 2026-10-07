import { BookingTrigger } from '@/components/booking-trigger'
import { SocialLinks } from '@/components/social-links'
import { COACH_DM_URL, COACH_HANDLE } from '@/lib/socials'

const programs = [
  {
    name: '1-on-1 Skill Development',
    who: 'Middle school · High school · College',
    detail: 'Footwork, finishing, ball-handling and a shot you can trust — built around your game, not a template.',
  },
  {
    name: 'Small Group Training',
    who: '3–6 players',
    detail: 'Competitive reps, reads and decision-making. Train the way pros prepare for the season.',
  },
  {
    name: 'Shooting Lab',
    who: 'All levels',
    detail: 'Mechanics, range and game-speed shooting from the guy who led the A-Sun from three.',
  },
  {
    name: 'Pro & Overseas Prep',
    who: 'College seniors · Pros',
    detail: 'What the G League and Europe actually demand — on the court and off it. Advice from 10+ years abroad.',
  },
]

export function Coaching() {
  return (
    <section id="coaching" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Coach Brown · Training</p>
          <h2 className="font-display text-6xl uppercase leading-[0.9] text-balance md:text-8xl">
            Get the reps. Get the edge.
          </h2>
        </div>
        <p className="max-w-sm leading-relaxed text-muted-foreground text-pretty">
          Training that comes from the Sweet 16 floor and a decade of pro locker rooms — for players serious about the
          next level.
        </p>
      </div>

      <ul className="mt-14 grid gap-4 md:grid-cols-2">
        {programs.map((p) => (
          <li
            key={p.name}
            className="flex flex-col gap-3 rounded-sm border-2 border-foreground bg-card p-6 transition-transform hover:-translate-y-1 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">{p.who}</p>
            <h3 className="font-display text-3xl uppercase">{p.name}</h3>
            <p className="leading-relaxed text-muted-foreground">{p.detail}</p>
          </li>
        ))}
      </ul>

      <div className="relative mt-16 overflow-hidden rounded-sm bg-accent px-6 py-14 text-accent-foreground md:px-14 md:py-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-10 font-display text-[14rem] leading-none text-accent-foreground/10 md:text-[20rem]"
        >
          MVP
        </span>
        <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <h3 className="font-display text-5xl uppercase leading-[0.9] text-balance md:text-7xl">
              Ready to train with Coach Brown?
            </h3>
            <p className="text-lg leading-relaxed text-accent-foreground/85">
              Send a DM with your age, position and goals. Spots are limited each week.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <BookingTrigger className="rounded-sm bg-foreground px-8 py-4 text-center font-bold uppercase tracking-wider text-background transition-transform hover:-translate-y-0.5">
              Check availability
            </BookingTrigger>
            <a
              href={COACH_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border-2 border-accent-foreground px-8 py-4 text-center font-bold uppercase tracking-wider transition-colors hover:bg-accent-foreground/10"
            >
              Message @{COACH_HANDLE}
            </a>
          </div>
        </div>
        <SocialLinks />
      </div>
    </section>
  )
}
