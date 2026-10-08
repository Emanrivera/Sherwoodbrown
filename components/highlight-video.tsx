'use client'

import { Play } from 'lucide-react'
import { useState } from 'react'

type HighlightVideoProps = {
  id: string
  title: string
  label: string
}

export function HighlightVideo({ id, title, label }: HighlightVideoProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="flex flex-col gap-3">
      <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-foreground">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 size-full"
            aria-label={`Play ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="size-full object-cover opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform group-hover:scale-110">
                <Play className="size-6 translate-x-0.5 fill-current" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-baseline justify-between gap-3">
        <span className="font-display text-lg uppercase leading-tight">{title}</span>
        <span className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      </figcaption>
    </figure>
  )
}
