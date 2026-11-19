import { photos } from "../data/photos.js";
import { useCouple } from "./CoupleContext.jsx";

export default function Footer() {
  const couple = useCouple();
  return (
    <section className="finale" aria-label={`A note from ${couple.spokenNames}`}>
      <img src={photos.finale} alt={`${couple.spokenNames} together`} loading="lazy" decoding="async" />
      <div className="finale-shade" />
      <h2>You’re my favorite person to do anything with for the rest of my life!</h2>
    </section>
  );
}
