export const COACH_HANDLE = 'coachbrown_tpba'
export const COACH_INSTAGRAM_URL = `https://www.instagram.com/${COACH_HANDLE}/`
export const COACH_DM_URL = `https://ig.me/m/${COACH_HANDLE}`

export const OPEN_BOOKING_EVENT = 'open-booking'

export const socials = [
  { handle: COACH_HANDLE, category: 'Coaching', href: COACH_INSTAGRAM_URL },
  { handle: 'train_underdaradar', category: 'Training', href: 'https://www.instagram.com/train_underdaradar/' },
  { handle: 'motionpicwoo', category: 'Personal', href: 'https://www.instagram.com/motionpicwoo/' },
] as const
