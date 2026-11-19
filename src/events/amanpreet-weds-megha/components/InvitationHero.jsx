import CoupleTitle from './CoupleTitle.jsx'
import { useCouple } from './CoupleContext.jsx'

export default function InvitationHero({ event, villaRef, showHint }) {
  const couple = useCouple()
  return (
    <section className="hero" aria-label={`${event.label} invitation`}>
      <div className="villa-parallax" ref={villaRef}>
        <div className="villa-wrap">
          <img
            className="hero-portrait"
            src={`${import.meta.env.BASE_URL}events/amanpreet-weds-megha/photos/pic6.jpg.jpeg`}
            alt={`${couple.spokenNames}`}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
      <div className="hero-copy">
        <CoupleTitle as="h1" className="names" />
        <br />
        <p className="hero-hosts">{couple.hosts}</p>
        <p className="hero-event-label">{event.heroLabel}</p>
        <p className="date"><span>{event.dateLine} {event.year}</span></p>
        <br />
        <p className="hero-location">
          {event.venue.name}, {event.venue.address}
        </p>
      </div>
      {showHint && <p className="scroll-hint">Scroll to discover</p>}
    </section>
  )
}
