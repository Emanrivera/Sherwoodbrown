const stops = [
  'FGCU Eagles',
  'Maine Red Claws',
  'Fuerza Guinda',
  'Byblos',
  'White Wings Hanau',
  'Al Rayyan',
  'SCM Timișoara',
  'Lahti Basketball',
  'Montreal Alliance',
  'CD Póvoa',
  'CSM Focșani',
  'Al-Karkh',
]

export function TeamMarquee() {
  const row = [...stops, ...stops]
  return (
    <div className="overflow-hidden border-y-2 border-foreground py-4" aria-label="Teams Sherwood Brown has played for">
      <ul className="animate-marquee flex w-max items-center gap-8">
        {row.map((team, i) => (
          <li
            key={`${team}-${i}`}
            aria-hidden={i >= stops.length}
            className="flex items-center gap-8 font-display text-2xl uppercase md:text-3xl"
          >
            {team}
            <span className="size-2 rotate-45 bg-accent" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  )
}
