import { Flourish } from './Icons.jsx'
import { Reveal } from './Reveal.jsx'
import { useCouple } from './CoupleContext.jsx'

export default function Letter({ message }) {
  const couple = useCouple()
  return (
    <section className="sheet section" id="letter">
      <Reveal>
        <Flourish />
        <p className="letter">{message}</p>
      </Reveal>
      <Reveal>
        <p className="letter-details">
          {couple.partnerLine}
          <br />
          {couple.partnerHome}
        </p>
        <p className="signoff"><span style={{ fontSize: '32px' }}>{couple.signoff}</span><br />{couple.signoffNames}</p>
        <p className="rsvp">
          R.S.V.P
          <br />
          {couple.rsvp.names}
          <br />
          {couple.rsvp.phones.map((phone, index) => (
            <span key={phone}>
              {index > 0 && <span className="rsvp-gap"> · </span>}
              <a href={`tel:+91${phone}`}>{phone}</a>
            </span>
          ))}
        </p>
        <Flourish />
      </Reveal>
    </section>
  )
}
