'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { CalendarCheck, Check, MessageCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { InstagramIcon } from '@/components/instagram-icon'
import { COACH_DM_URL, COACH_HANDLE, OPEN_BOOKING_EVENT } from '@/lib/socials'

const AUTO_OPEN_DELAY_MS = 12000
const SEEN_KEY = 'coach-brown-booking-seen'

const sessionTypes = ['1-on-1', 'Small group', 'Shooting lab', 'Pro prep']
const timeSlots = ['Weekday mornings', 'Weekday evenings', 'Weekends']

const inputClass =
  'w-full rounded-sm border-2 border-foreground/20 bg-background px-3 py-2.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent'

export function BookingPopup() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sessionType, setSessionType] = useState(sessionTypes[0])
  const [timeSlot, setTimeSlot] = useState(timeSlots[1])

  useEffect(() => {
    const openBooking = () => setOpen(true)
    window.addEventListener(OPEN_BOOKING_EVENT, openBooking)

    let timer: number | undefined
    if (!sessionStorage.getItem(SEEN_KEY)) {
      timer = window.setTimeout(() => {
        sessionStorage.setItem(SEEN_KEY, '1')
        setOpen(true)
      }, AUTO_OPEN_DELAY_MS)
    }

    return () => {
      window.removeEventListener(OPEN_BOOKING_EVENT, openBooking)
      window.clearTimeout(timer)
    }
  }, [])

  function handleOpenChange(next: boolean) {
    setOpen(next)
    sessionStorage.setItem(SEEN_KEY, '1')
    if (!next) setSent(false)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      `Hey Coach Brown! I'd like to book a ${sessionType} session.`,
      `Name: ${data.get('name')}`,
      data.get('age') ? `Age / level: ${data.get('age')}` : null,
      `Best time: ${timeSlot}`,
      data.get('goals') ? `Goals: ${data.get('goals')}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    try {
      await navigator.clipboard.writeText(message)
    } catch {
      // Clipboard can be blocked in some browsers; the DM still opens.
    }
    window.open(COACH_DM_URL, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 font-bold uppercase tracking-wider text-accent-foreground shadow-lg shadow-foreground/25 transition-transform hover:-translate-y-0.5"
      >
        <CalendarCheck className="size-5" aria-hidden="true" />
        Book a session
      </button>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto rounded-sm p-0 sm:max-w-md">
          <div className="bg-primary px-6 pb-6 pt-8 text-primary-foreground">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Limited spots weekly</p>
            <DialogTitle className="mt-2 font-display text-4xl font-normal uppercase leading-[0.95]">
              Check my availability
            </DialogTitle>
            <DialogDescription className="mt-3 leading-relaxed text-primary-foreground/75">
              Tell me what you&apos;re working on and I&apos;ll get back to you with open times.
            </DialogDescription>
          </div>

          {sent ? (
            <div className="flex flex-col items-start gap-4 p-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="size-6" aria-hidden="true" />
              </span>
              <p className="font-display text-2xl uppercase">Message copied</p>
              <p className="leading-relaxed text-muted-foreground">
                Instagram opened in a new tab. Paste your message into the DM to @{COACH_HANDLE} and hit send.
              </p>
              <a
                href={COACH_DM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-bold uppercase tracking-wider text-accent underline-offset-4 hover:underline"
              >
                <InstagramIcon className="size-5" />
                Open the DM again
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6">
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Session type
                </legend>
                <div className="flex flex-wrap gap-2">
                  {sessionTypes.map((type) => (
                    <Chip key={type} label={type} selected={sessionType === type} onSelect={() => setSessionType(type)} />
                  ))}
                </div>
              </fieldset>

              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Best time
                </legend>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <Chip key={slot} label={slot} selected={timeSlot === slot} onSelect={() => setTimeSlot(slot)} />
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm font-semibold">
                  Name
                  <input name="name" required autoComplete="name" className={inputClass} placeholder="Jordan Smith" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold">
                  Age / level
                  <input name="age" className={inputClass} placeholder="16 · JV guard" />
                </label>
              </div>
              <label className="flex flex-col gap-1.5 text-sm font-semibold">
                Goals
                <textarea
                  name="goals"
                  rows={2}
                  className={`${inputClass} resize-none`}
                  placeholder="Tighter handle, more consistent jumper..."
                />
              </label>

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-4 font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <InstagramIcon className="size-5" />
                  Send request via DM
                </button>
                <a
                  href={COACH_DM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-sm border-2 border-foreground px-6 py-3.5 font-bold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Just message me
                </a>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function Chip({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-colors ${
        selected
          ? 'border-accent bg-accent text-accent-foreground'
          : 'border-foreground/20 text-foreground hover:border-foreground'
      }`}
    >
      {label}
    </button>
  )
}
