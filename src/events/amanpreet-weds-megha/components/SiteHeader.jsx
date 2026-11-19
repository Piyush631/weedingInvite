
import WaxSeal from './WaxSeal.jsx'
import { useCouple } from './CoupleContext.jsx'

export default function SiteHeader({
  scrolled,
  onMenu,
  onTop,
  locked
}) {
  const couple = useCouple()
  return (
    <header
      className={`site-header${scrolled ? ' is-stuck' : ''}`}
      inert={locked}
    >
      {/* Golden badge - Back to top */}
      <button
        type="button"
        className="header-home"
        onClick={onTop}
        aria-label="Back to the top of the invitation"
        title="Back to top"
      >
        <WaxSeal className="header-home-seal" />

        <span
          className="header-home-letters"
          aria-hidden="true"
        >
          {couple.monogram}
        </span>
      </button>

      {/* Navigation menu */}
      <button
        type="button"
        className="header-menu"
        aria-label="Open navigation menu"
        onClick={onMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}
