'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HighlightVideo } from '@/components/highlight-video'

export type Film = { id: string; title: string; label: string }

export function FilmCarousel({ films }: { films: Film[] }) {
  const [index, setIndex] = useState(0)
  const film = films[index]

  const go = (step: number) => setIndex((i) => (i + step + films.length) % films.length)

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Highlight films"
      className="flex flex-col gap-4"
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') go(-1)
        if (e.key === 'ArrowRight') go(1)
      }}
    >
      <div aria-live="polite" aria-atomic="true">
        <p className="sr-only">
          Film {index + 1} of {films.length}
        </p>
        <HighlightVideo key={film.id} id={film.id} title={film.title} label={film.label} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {films.map((f, i) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show film ${i + 1}: ${f.title} (${f.label})`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-accent' : 'w-3 bg-foreground/25 hover:bg-foreground/50'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-display text-lg tabular-nums text-muted-foreground">
            {String(index + 1).padStart(2, '0')} / {String(films.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous film"
            className="flex size-10 items-center justify-center rounded-full border-2 border-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next film"
            className="flex size-10 items-center justify-center rounded-full border-2 border-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
