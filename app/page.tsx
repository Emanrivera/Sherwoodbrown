import { BookingPopup } from '@/components/booking-popup'
import { Coaching } from '@/components/coaching'
import { Hero } from '@/components/hero'
import { ProCareer } from '@/components/pro-career'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SweetSixteen } from '@/components/sweet-sixteen'
import { TeamMarquee } from '@/components/team-marquee'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TeamMarquee />
        <SweetSixteen />
        <ProCareer />
        <Coaching />
      </main>
      <SiteFooter />
      <BookingPopup />
    </>
  )
}
