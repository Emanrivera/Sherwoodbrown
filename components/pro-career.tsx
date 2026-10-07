import Image from 'next/image'

const career = [
  { years: '2014–15', team: 'Maine Red Claws', league: 'NBA G League', country: 'USA' },
  { years: '2014', team: 'Fuerza Guinda de Nogales', league: 'CIBACOPA', country: 'Mexico' },
  { years: '2015–16', team: 'Byblos', league: 'Lebanese League · Cup Champion', country: 'Lebanon' },
  { years: '2016–17', team: 'White Wings Hanau', league: 'ProA', country: 'Germany' },
  { years: '2017–18', team: 'Al Rayyan SC', league: 'Qatari League', country: 'Qatar' },
  { years: '2018–22', team: 'SCM Timișoara', league: 'Liga Națională', country: 'Romania' },
  { years: '2021', team: 'Lahti Basketball', league: 'Korisliiga', country: 'Finland' },
  { years: '2022', team: 'Montreal Alliance', league: 'CEBL', country: 'Canada' },
  { years: '2022–23', team: 'CD Póvoa', league: 'Liga Portuguesa', country: 'Portugal' },
  { years: '2023–24', team: 'CSM Focșani', league: 'Liga Națională', country: 'Romania' },
  { years: '2024–25', team: 'Al-Karkh', league: 'Iraqi Premier League', country: 'Iraq' },
  { years: '2025', team: 'Mineros de Parral', league: 'LBE', country: 'Mexico' },
]

export function ProCareer() {
  return (
    <section id="pro" className="torn-top bg-foreground pb-24 pt-32 text-background md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-4">
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-sm">
            <Image
              src="/images/headshot.png"
              alt="Professional headshot of Sherwood Brown smiling in a navy team jersey"
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover grayscale"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">The pro years</p>
            <h2 className="font-display text-6xl uppercase leading-[0.9] text-balance">
              Ten countries. One work ethic.
            </h2>
            <p className="leading-relaxed text-background/70 text-pretty">
              Undrafted in 2013, Brown earned his way — first with the Boston Celtics’ G League affiliate, then
              across Europe, the Middle East and the Americas as a professional for more than a decade.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-8">
          {career.map((stop) => (
            <li
              key={`${stop.team}-${stop.years}`}
              className="group grid grid-cols-12 items-baseline gap-3 border-b border-background/15 py-5 first:border-t"
            >
              <span className="col-span-3 font-display text-lg text-background/50 md:col-span-2">{stop.years}</span>
              <span className="col-span-9 font-display text-2xl uppercase transition-colors group-hover:text-accent md:col-span-5 md:text-3xl">
                {stop.team}
              </span>
              <span className="col-span-9 col-start-4 text-sm text-background/70 md:col-span-3 md:col-start-auto">
                {stop.league}
              </span>
              <span className="col-span-9 col-start-4 text-xs font-bold uppercase tracking-[0.25em] md:col-span-2 md:col-start-auto md:text-right">
                {stop.country}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
