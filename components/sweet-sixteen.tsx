import Image from 'next/image'
import { FilmCarousel, type Film } from '@/components/film-carousel'

const films: Film[] = [
  { id: 'v3-6pX6-rY0', title: 'FGCU highlights', label: 'College' },
  { id: 'dJM1yEi2hKM', title: 'Maine Red Claws', label: 'G League' },
  { id: 'GNwkZGdd9VU', title: 'Maine Red Claws', label: 'G League' },
  { id: 'fX65veUN7xo', title: 'Season highlights', label: '2024' },
  { id: '0fxNkmSJHMU', title: 'Game highlights', label: '2024' },
  { id: 'J7JkcZib8OY', title: 'Season highlights', label: '2025' },
  { id: 'DKUDzRHtFnc', title: 'Pro highlights', label: 'Mixtape' },
]

const games = [
  {
    round: 'Round of 64',
    opponent: '#2 Georgetown',
    score: '78–68',
    result: 'W',
    line: '24 PTS · 9 REB',
    note: 'Led all scorers as FGCU became the seventh 15-seed ever to win a tournament game.',
  },
  {
    round: 'Round of 32',
    opponent: '#7 San Diego State',
    score: '81–71',
    result: 'W',
    line: '17 PTS · 8 REB',
    note: 'History: the first No. 15 seed to ever reach the Sweet 16. Dunk City is born.',
  },
  {
    round: 'Sweet 16',
    opponent: '#3 Florida',
    score: '50–62',
    result: 'L',
    line: 'Cinderella run ends',
    note: 'The run ended in Arlington — but the bracket was never the same.',
  },
]

const honors = [
  { title: 'Atlantic Sun Player of the Year', year: '2013' },
  { title: 'AP Honorable Mention All-American', year: '2013' },
  { title: 'First-Team All-Atlantic Sun', year: '2013' },
  { title: 'First in FGCU history: 1,000 pts + 500 reb', year: 'Career' },
]

export function SweetSixteen() {
  return (
    <section id="sweet-16" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">March 2013 · Dunk City</p>
          <h2 className="font-display text-6xl uppercase leading-[0.9] text-balance md:text-7xl">
            The first 15-seed ever to make the Sweet 16.
          </h2>
          <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">
            In only its second year of full Division I eligibility, Florida Gulf Coast won its first Atlantic Sun
            title and crashed the NCAA Tournament. Their senior leader wore #25.
          </p>
        </div>

        <div className="relative lg:col-span-7">
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
            <Image
              src="/images/fgcu-vs-duke.png"
              alt="Sherwood Brown driving to the basket past a Duke defender in front of a packed crowd"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="absolute -bottom-5 left-5 bg-accent px-3 py-1.5 font-display text-xl uppercase text-accent-foreground">
            #25 · Guard/Forward · 6{"'"}4
          </p>
        </div>
      </div>

      <ol className="mt-20 grid gap-px overflow-hidden rounded-sm border border-foreground bg-foreground md:grid-cols-3">
        {games.map((game) => (
          <li key={game.round} className="flex flex-col gap-4 bg-background p-6 md:p-8">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">{game.round}</span>
              <span
                className={`font-display text-lg ${game.result === 'W' ? 'text-accent' : 'text-muted-foreground'}`}
              >
                {game.result === 'W' ? 'WIN' : 'LOSS'}
              </span>
            </div>
            <p className="font-display text-6xl leading-none">{game.score}</p>
            <p className="font-semibold uppercase tracking-wide">vs {game.opponent}</p>
            <p className="font-display text-xl uppercase text-primary">{game.line}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{game.note}</p>
          </li>
        ))}
      </ol>

      <div className="mt-20 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h3 className="font-display text-4xl uppercase">Honors</h3>
          <ul className="mt-6 flex flex-col">
            {honors.map((h) => (
              <li key={h.title} className="flex items-baseline justify-between gap-4 border-b border-border py-4">
                <span className="font-semibold">{h.title}</span>
                <span className="font-display text-lg text-accent">{h.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <h3 className="font-display text-4xl uppercase">Film room</h3>
          <div className="mt-6">
            <FilmCarousel films={films} />
          </div>
        </div>
      </div>
    </section>
  )
}
