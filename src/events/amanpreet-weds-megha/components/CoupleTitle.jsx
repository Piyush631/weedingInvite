import { useCouple } from './CoupleContext.jsx'

/** Identical large-name treatment everywhere; "weds" is always smaller. */
export default function CoupleTitle({ as: Tag = 'span', className = '' }) {
  const couple = useCouple()
  return (
    <Tag className={`couple-title ${className}`.trim()}>
      <span className="couple-title-name">{couple.firstName}</span>
      <span className="couple-title-weds">weds</span>
      <span className="couple-title-name">{couple.secondName}</span>
    </Tag>
  )
}
