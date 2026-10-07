import { ArrowUpRight } from 'lucide-react'
import { HighlightVideo } from '@/components/highlight-video'

const vitals = [
  { label: 'Height', value: `6'4"` },
  { label: 'Weight', value: '198 lbs' },
  { label: 'Position', value: 'Guard' },
  { label: 'Hometown', value: 'Orlando, FL' },
  { label: 'College', value: "FGCU '13" },
]

const headline = [
  { value: '18.3', label: 'Points per game' },
  { value: '7.8', label: 'Rebounds per game' },
  { value: '38.7%', label: 'Three-point' },
  { value: '84.6%', label: 'Free throw' },
]

const seasons = [
  { season: '24–25', team: 'Al-Karkh', league: 'Iraq Superleague', g: 11, min: 29.3, pts: 14.1, reb: 7.5, ast: 3.0, three: 25.4, ft: 77.3 },
  { season: '23–24', team: 'CSM Focșani', league: 'Romania Liga Națională', g: 34, min: 33.9, pts: 18.3, reb: 7.8, ast: 1.9, three: 38.7, ft: 84.6 },
  { season: '22–23', team: 'CD Póvoa', league: 'Liga Portuguesa', g: 33, min: 32.2, pts: 12.8, reb: 5.5, ast: 2.1, three: 31.4, ft: 67.2 },
  { season: '20–21', team: 'SCM Timișoara', league: 'Romania Liga Națională', g: 22, min: 29.7, pts: 14.9, reb: 6.1, ast: 1.7, three: 38.4, ft: 63.6 },
  { season: '19–20', team: 'SCM Timișoara', league: 'Romania Liga Națională', g: 18, min: 32.7, pts: 13.7, reb: 6.8, ast: 1.9, three: 37.1, ft: 85.0 },
  { season: '18–19', team: 'SCM Timișoara', league: 'Romania Liga Națională', g: 31, min: 28.2, pts: 13.3, reb: 5.8, ast: 1.8, three: 37.4, ft: 76.2 },
  { season: '17–18', team: 'Al Rayyan SC', league: 'Qatar QBL', g: 15, min: 39.9, pts: 21.7, reb: 8.4, ast: 5.1, three: 41.2, ft: 76.3 },
  { season: '2016', team: 'Byblos', league: 'Lebanon DLBL', g: 10, min: 31.5, pts: 10.7, reb: 6.0, ast: 1.3, three: 29.2, ft: 60.7 },
  { season: '2014', team: 'Fuerza Guinda', league: 'Mexico CIBACOPA', g: 18, min: 23.1, pts: 9.3, reb: 5.2, ast: 1.4, three: 31.3, ft: 70.6 },
  { season: '13–14', team: 'Maine Red Claws', league: 'NBA G League', g: 30, min: 21.9, pts: 7.2, reb: 5.1, ast: 1.2, three: 34.8, ft: 66.7 },
  { season: '12–13', team: 'Florida Gulf Coast', league: 'NCAA D-I · Sweet 16', g: 37, min: 33.1, pts: 15.5, reb: 6.5, ast: 1.2, three: 37.6, ft: 65.9 },
]

const film = [
  {
    group: 'Recent pro career',
    videos: [
      { id: 'J7JkcZib8OY', title: 'Season highlights', label: '2025' },
      { id: 'fX65veUN7xo', title: 'Season highlights', label: '2024' },
      { id: '0fxNkmSJHMU', title: 'Game highlights', label: '2024' },
      { id: 'DKUDzRHtFnc', title: 'Pro highlights', label: 'Mixtape' },
    ],
  },
  {
    group: 'NBA G League',
    videos: [
      { id: 'dJM1yEi2hKM', title: 'Maine Red Claws', label: 'G League' },
      { id: 'GNwkZGdd9VU', title: 'Maine Red Claws', label: 'G League' },
    ],
  },
]

const profiles = [
  { href: 'https://basketball.latinbasket.com/player/Sherwood-Brown/187596', name: 'LatinBasket', note: 'Full career stats' },
  { href: 'https://www.proballers.com/basketball/player/61136/sherwood-brown', name: 'Proballers', note: 'Game logs & career highs' },
]

export function ScoutingReport() {
  return (
    <section id="scouts" aria-labelledby="scouts-title" className="bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 md:px-8">
        <header className="flex flex-col gap-10">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">For scouts &amp; clubs</p>
            <h2 id="scouts-title" className="font-display text-6xl uppercase leading-[0.9] text-balance md:text-7xl">
              Scouting report
            </h2>
            <p className="leading-relaxed text-muted-foreground text-pretty">
              Stats, film and verified profiles in one place. A two-way guard who rebounds above his position and has
              produced at every level — NCAA, G League, and twelve-plus seasons overseas.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-border py-6 sm:grid-cols-3 lg:grid-cols-5">
            {vitals.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{item.label}</dt>
                <dd className="whitespace-nowrap font-display text-3xl uppercase">{item.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-foreground pb-3">
            <h3 className="font-display text-2xl uppercase">Best pro season · 2023–24</h3>
            <p className="text-sm text-muted-foreground">CSM Focșani · Romania Liga Națională · Career-high 33 pts</p>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
            {headline.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 bg-card p-6 md:p-8">
                <dd className="font-display text-5xl text-primary md:text-6xl">{stat.value}</dd>
                <dt className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-2xl uppercase">Season by season</h3>
          <div className="overflow-x-auto rounded-sm border border-border bg-card">
            <table className="w-full min-w-[720px] text-left text-sm">
              <caption className="sr-only">Sherwood Brown per-game averages by season</caption>
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  {['Season', 'Team', 'G', 'MIN', 'PTS', 'REB', 'AST', '3P%', 'FT%'].map((h, i) => (
                    <th
                      key={h}
                      scope="col"
                      className={`px-4 py-3 text-xs font-bold uppercase tracking-[0.15em] ${i > 1 ? 'text-right' : ''}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {seasons.map((row) => (
                  <tr key={`${row.season}-${row.team}`} className="border-t border-border hover:bg-secondary">
                    <th scope="row" className="whitespace-nowrap px-4 py-3 font-display text-base font-normal">
                      {row.season}
                    </th>
                    <td className="px-4 py-3">
                      <span className="block font-semibold">{row.team}</span>
                      <span className="block text-xs text-muted-foreground">{row.league}</span>
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">{row.g}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{row.min.toFixed(1)}</td>
                    <td className="px-4 py-3 text-right font-bold tabular-nums">{row.pts.toFixed(1)}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{row.reb.toFixed(1)}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{row.ast.toFixed(1)}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{row.three.toFixed(1)}</td>
                    <td className="px-4 py-3 text-right tabular-nums">{row.ft.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground">Per-game averages. Source: LatinBasket / Eurobasket.</p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-foreground pb-3">
            <h3 className="font-display text-2xl uppercase">Film room</h3>
            <p className="text-sm text-muted-foreground">Tap any clip to play</p>
          </div>
          {film.map((block) => (
            <div key={block.group} className="flex flex-col gap-5">
              <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-accent">{block.group}</h4>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {block.videos.map((video) => (
                  <HighlightVideo key={video.id} {...video} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-2xl uppercase">Verified profiles</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {profiles.map((profile) => (
              <li key={profile.href}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-sm border border-border bg-card p-5 transition-colors hover:border-foreground"
                >
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-2xl uppercase">{profile.name}</span>
                    <span className="text-sm text-muted-foreground">{profile.note}</span>
                  </span>
                  <ArrowUpRight
                    className="size-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
