import { useCouple } from './CoupleContext.jsx'

/** Keeps the original farewell line without the removed details/FAQ section. */
export default function ClosingNote() {
  const couple = useCouple()
  return (
    <section className="closing-note" aria-label="A note from the couple">
      <span className="closing-ornament" aria-hidden="true">✦</span>
      <p>We cannot wait to celebrate with you.</p>
      <span className="closing-signature">{couple.names}</span>
    </section>
  )
}
