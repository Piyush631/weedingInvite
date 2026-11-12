import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { photos } from "../data/photos.js";
import Lightbox from "./Lightbox.jsx";

const chapters = [
  {
    title: "Chapter One: How we met",
    body: "We met as teenagers, with no idea where life would take us. What started as a simple friendship slowly became something neither of us expected.",
    side: "left",
    fade: [0.02, 0.1, 0.3, 0.4],
    levels: [0, 1, 1, 0],
    photos: [
      { src: photos.campus, caption: "The two of us", alt: "Renu and Rohit sitting together", rotate: -2.5 },
      { src: photos.coffee, caption: "An afternoon together", alt: "Renu and Rohit outdoors", rotate: 2.2 },
      { src: photos.start, caption: "By the fire", alt: "Renu and Rohit beside a bonfire", rotate: -1.2 },
    ],
  },
  {
    title: "Chapter Two: Choosing Each Other",
    body: "As the years went by, we grew together through little moments and big changes. Somewhere along the way, we realized we'd found our person in each other.",
    side: "right",
    fade: [0.3, 0.42, 0.6, 0.72],
    levels: [0, 1, 1, 0],
    photos: [
      { src: photos.corner, caption: "Holding on", alt: "Renu and Rohit holding hands", rotate: 1.6 },
      { src: photos.downtown, caption: "Our dance", alt: "Renu and Rohit dancing", rotate: -2 },
      { src: photos.ritual, caption: "Side by side", alt: "Renu and Rohit seated on a path", rotate: 2.4 },
    ],
  },
  {
    title: "Chapter Three: Making It Official",
    body: "From teenage memories to building a future together, it's been quite a journey. Now, we're ready to make it official and begin our next chapter.",
    side: "left",
    fade: [0.6, 0.74, 0.9, 1],
    levels: [0, 1, 1, 1],
    photos: [
      { src: photos.weekend, caption: "Evening by the fire", alt: "Renu and Rohit by the fire", rotate: -1.8 },
      { src: photos.yes, caption: "On the bridge", alt: "Renu and Rohit walking on a bridge", rotate: 1.4 },
      { src: photos.celebrate, caption: "Celebrating together", alt: "Renu and Rohit beside a bonfire", rotate: -2.2 },
    ],
  },
];

const deck = chapters.flatMap((chapter) => chapter.photos);

function enterAt(index, total) {
  const start = 0.05 + (index / total) * 0.84;
  return [start, start + 0.045];
}

function StackCard({ photo, index, total, progress, onOpen }) {
  const [start, end] = enterAt(index, total);
  const y = useTransform(progress, (value) => {
    const local = value <= start ? 0 : Math.min(1, (value - start) / (end - start));
    const arrived = Math.min(total, Math.max(0, ((value - 0.05) / 0.84) * total));
    const rest = Math.max(0, index * 42 - Math.max(0, arrived - 2.2) * 42);
    return (1 - local) * 175 + local * rest;
  });
  const opacity = useTransform(progress, (value) => {
    if (value <= start) return 0;
    if (value >= end) return 1;
    return (value - start) / (end - start);
  });
  const scale = useTransform(progress, (value) => {
    const arrived = Math.min(total, Math.max(0, ((value - 0.05) / 0.84) * total));
    const after = Math.max(0, arrived - index - 1);
    return 1 - Math.min(after, 5) * 0.012;
  });

  return (
    <motion.button
      type="button"
      className={`polaroid ${photo.mono ? "is-mono" : ""}`}
      style={{ y, opacity, scale, rotate: photo.rotate, zIndex: index + 1 }}
      onClick={() => onOpen(photo)}
      aria-label={`View larger version of ${photo.caption}`}
    >
      <img src={photo.src} alt="" loading="lazy" decoding="async" />
      <span>{photo.caption}</span>
    </motion.button>
  );
}

function ChapterCopy({ chapter, progress }) {
  const opacity = useTransform(progress, chapter.fade, chapter.levels);
  const y = useTransform(progress, chapter.fade, [18, 0, 0, chapter.levels[3] === 0 ? -12 : 0]);

  return (
    <motion.div className={`chapter-copy ${chapter.side}`} style={{ opacity, y }}>
      <h3>{chapter.title}</h3>
      <p>{chapter.body}</p>
    </motion.div>
  );
}

function StillStory({ onOpen }) {
  return (
    <section className="story story-still" id="story">
      <h2 className="story-title">Our Story</h2>
      {chapters.map((chapter) => (
        <article className="still-chapter" key={chapter.title}>
          <div className="chapter-copy is-static">
            <h3>{chapter.title}</h3>
            <p>{chapter.body}</p>
          </div>
          <div className="still-photos">
            {chapter.photos.map((photo) => (
              <button
                type="button"
                className={`polaroid is-static ${photo.mono ? "is-mono" : ""}`}
                key={photo.caption}
                onClick={() => onOpen(photo)}
                aria-label={`View larger version of ${photo.caption}`}
              >
                <img src={photo.src} alt="" loading="lazy" decoding="async" />
                <span>{photo.caption}</span>
              </button>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default function Story() {
  const ref = useRef(null);
  const calm = useReducedMotion() === true;
  const [photo, setPhoto] = useState(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {calm ? (
        <StillStory onOpen={setPhoto} />
      ) : (
        <section className="story" id="story" ref={ref}>
          <div className="story-sticky">
            <h2 className="story-title">Our Story</h2>
            {chapters.map((chapter) => (
              <ChapterCopy key={chapter.title} chapter={chapter} progress={scrollYProgress} />
            ))}
            <div className="deck">
              {deck.map((item, index) => (
                <StackCard
                  key={item.caption}
                  photo={item}
                  index={index}
                  total={deck.length}
                  progress={scrollYProgress}
                  onOpen={setPhoto}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      <Lightbox photo={photo} onClose={() => setPhoto(null)} />
    </>
  );
}
