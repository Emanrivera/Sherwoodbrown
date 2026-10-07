'use client'

import type { ReactNode } from 'react'
import { OPEN_BOOKING_EVENT } from '@/lib/socials'

export function BookingTrigger({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_BOOKING_EVENT))}
    >
      {children}
    </button>
  )
}
