import { wedding } from '../data/wedding.js'
import { Flourish } from './Icons.jsx'
import { Reveal } from './Reveal.jsx'

export default function Letter({ message }) {
  return (
    <section className="sheet section" id="letter">
      <Reveal>
        <Flourish />
        <p className="letter">{message}</p>
      </Reveal>
      <Reveal>
        <p className="letter-details">
          {wedding.groomLine}
          <br />
          {wedding.groomHome}
        </p>
        <p className="signoff"><span style={{ fontSize: '32px' }}>{wedding.signoff}</span><br />{wedding.signoffNames}</p>
        <p className="rsvp">
          R.S.V.P
          <br />
          {wedding.rsvp.names}
          <br />
          {wedding.rsvp.phones.map((phone, index) => (
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
