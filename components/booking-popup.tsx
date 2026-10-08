'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { Binoculars, CalendarCheck, Check, Dumbbell, MessageCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { InstagramIcon } from '@/components/instagram-icon'
import { COACH_DM_URL, COACH_HANDLE, OPEN_BOOKING_EVENT } from '@/lib/socials'

const AUTO_OPEN_DELAY_MS = 12000
const SEEN_KEY = 'coach-brown-booking-seen'

type Intent = 'train' | 'scout'

const intents = [
  { id: 'train', label: 'I want to train', icon: Dumbbell },
  { id: 'scout', label: "I'm a scout", icon: Binoculars },
] as const

const headers: Record<Intent, { eyebrow: string; title: string; description: string }> = {
  train: {
    eyebrow: 'Limited spots weekly',
    title: 'Check my availability',
    description: "Tell me what you're working on and I'll get back to you with open times.",
  },
  scout: {
    eyebrow: 'Scouts, agents & teams',
    title: 'Talk recruitment',
    description: 'Tell me about your club or program and I can send film, stats and my availability.',
  },
}

const sessionTypes = ['1-on-1', 'Small group', 'Shooting lab', 'Pro prep']
const timeSlots = ['Weekday mornings', 'Weekday evenings', 'Weekends']
const scoutRoles = ['Team / club', 'Agent', 'Scout', 'Media']
const scoutInterests = ['Signing / tryout', 'Full game film', 'Stats & references', 'Camp / event']

const inputClass =
  'w-full rounded-sm border-2 border-foreground/20 bg-background px-3 py-2.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent'
const legendClass = 'mb-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground'
const labelClass = 'flex flex-col gap-1.5 text-sm font-semibold'

export function BookingPopup() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [intent, setIntent] = useState<Intent>('train')
  const [sessionType, setSessionType] = useState(sessionTypes[0])
  const [timeSlot, setTimeSlot] = useState(timeSlots[1])
  const [scoutRole, setScoutRole] = useState(scoutRoles[0])
  const [scoutInterest, setScoutInterest] = useState(scoutInterests[0])

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

  function openWith(next: Intent) {
    setIntent(next)
    setSent(false)
    setOpen(true)
  }

  function handleOpenChange(next: boolean) {
    setOpen(next)
    sessionStorage.setItem(SEEN_KEY, '1')
    if (!next) setSent(false)
  }

  function buildMessage(data: FormData) {
    const lines =
      intent === 'train'
        ? [
            `Hey Coach Brown! I'd like to book a ${sessionType} session.`,
            `Name: ${data.get('name')}`,
            data.get('age') ? `Age / level: ${data.get('age')}` : null,
            `Best time: ${timeSlot}`,
            data.get('goals') ? `Goals: ${data.get('goals')}` : null,
          ]
        : [
            `Hi Sherwood, I'm reaching out about ${scoutInterest.toLowerCase()}.`,
            `Name: ${data.get('name')} (${scoutRole})`,
            data.get('organization') ? `Organization: ${data.get('organization')}` : null,
            data.get('league') ? `League / country: ${data.get('league')}` : null,
            data.get('email') ? `Email: ${data.get('email')}` : null,
            data.get('details') ? `Details: ${data.get('details')}` : null,
          ]
    return lines.filter(Boolean).join('\n')
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = buildMessage(new FormData(event.currentTarget))

    try {
      await navigator.clipboard.writeText(message)
    } catch {
      // Clipboard can be blocked in some browsers; the DM still opens.
    }
    window.open(COACH_DM_URL, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const header = headers[intent]

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <button
          type="button"
          onClick={() => openWith('scout')}
          className="flex items-center gap-2 rounded-full border-2 border-accent bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-foreground/25 transition-transform hover:-translate-y-0.5"
        >
          <Binoculars className="size-4" aria-hidden="true" />
          {"I'm a scout"}
        </button>
        <button
          type="button"
          onClick={() => openWith('train')}
          className="flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 font-bold uppercase tracking-wider text-accent-foreground shadow-lg shadow-foreground/25 transition-transform hover:-translate-y-0.5"
        >
          <CalendarCheck className="size-5" aria-hidden="true" />
          Book a session
        </button>
      </div>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto rounded-sm p-0 sm:max-w-md">
          <div className="bg-primary px-6 pb-6 pt-8 text-primary-foreground">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{header.eyebrow}</p>
            <DialogTitle className="mt-2 font-display text-4xl font-normal uppercase leading-[0.95]">
              {header.title}
            </DialogTitle>
            <DialogDescription className="mt-3 leading-relaxed text-primary-foreground/75">
              {header.description}
            </DialogDescription>

            {!sent && (
              <div
                role="radiogroup"
                aria-label="Reason for reaching out"
                className="mt-5 grid grid-cols-2 gap-1 rounded-sm bg-primary-foreground/10 p-1"
              >
                {intents.map(({ id, label, icon: Icon }) => {
                  const selected = intent === id
                  return (
                    <button
                      key={id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setIntent(id)}
                      className={`flex items-center justify-center gap-2 rounded-sm px-3 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors ${
                        selected
                          ? 'bg-accent text-accent-foreground'
                          : 'text-primary-foreground/70 hover:text-primary-foreground'
                      }`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {label}
                    </button>
                  )
                })}
              </div>
            )}
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
            <form key={intent} onSubmit={handleSubmit} className="flex flex-col gap-5 p-6">
              {intent === 'train' ? (
                <>
                  <ChipGroup legend="Session type" options={sessionTypes} value={sessionType} onChange={setSessionType} />
                  <ChipGroup legend="Best time" options={timeSlots} value={timeSlot} onChange={setTimeSlot} />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className={labelClass}>
                      Name
                      <input name="name" required autoComplete="name" className={inputClass} placeholder="Jordan Smith" />
                    </label>
                    <label className={labelClass}>
                      Age / level
                      <input name="age" className={inputClass} placeholder="16 · JV guard" />
                    </label>
                  </div>
                  <label className={labelClass}>
                    Goals
                    <textarea
                      name="goals"
                      rows={2}
                      className={`${inputClass} resize-none`}
                      placeholder="Tighter handle, more consistent jumper..."
                    />
                  </label>
                </>
              ) : (
                <>
                  <ChipGroup legend="I represent" options={scoutRoles} value={scoutRole} onChange={setScoutRole} />
                  <ChipGroup
                    legend="Interested in"
                    options={scoutInterests}
                    value={scoutInterest}
                    onChange={setScoutInterest}
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className={labelClass}>
                      Name
                      <input name="name" required autoComplete="name" className={inputClass} placeholder="Alex Rivera" />
                    </label>
                    <label className={labelClass}>
                      Organization
                      <input
                        name="organization"
                        autoComplete="organization"
                        className={inputClass}
                        placeholder="Club or agency"
                      />
                    </label>
                    <label className={labelClass}>
                      League / country
                      <input name="league" className={inputClass} placeholder="Liga ACB · Spain" />
                    </label>
                    <label className={labelClass}>
                      Email
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={inputClass}
                        placeholder="you@club.com"
                      />
                    </label>
                  </div>
                  <label className={labelClass}>
                    Details
                    <textarea
                      name="details"
                      rows={2}
                      className={`${inputClass} resize-none`}
                      placeholder="Roster need, timeline, contract window..."
                    />
                  </label>
                </>
              )}

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-sm bg-accent px-6 py-4 font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  <InstagramIcon className="size-5" />
                  {intent === 'train' ? 'Send request via DM' : 'Send inquiry via DM'}
                </button>
                {intent === 'scout' ? (
                  <a
                    href="#scouts"
                    onClick={() => handleOpenChange(false)}
                    className="flex items-center justify-center gap-2 rounded-sm border-2 border-foreground px-6 py-3.5 font-bold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
                  >
                    <Binoculars className="size-5" aria-hidden="true" />
                    View stats & film first
                  </a>
                ) : (
                  <a
                    href={COACH_DM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-sm border-2 border-foreground px-6 py-3.5 font-bold uppercase tracking-wider transition-colors hover:bg-foreground hover:text-background"
                  >
                    <MessageCircle className="size-5" aria-hidden="true" />
                    Just message me
                  </a>
                )}
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

function ChipGroup({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className={legendClass}>{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <Chip key={option} label={option} selected={value === option} onSelect={() => onChange(option)} />
        ))}
      </div>
    </fieldset>
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
