import React, { useEffect, useRef, useState } from 'react';
import './ImageCarousel.css';

// Import all images from src/assets and the project root `pictures` folder (if present).
const modulesFromAssets = import.meta.glob('../../assets/*.{jpg,jpeg,png,jfif,webp}', { eager: true });
let modulesFromRoot = {};
try {
  modulesFromRoot = import.meta.glob('/pictures/*.{jpg,jpeg,png,jfif,webp}', { eager: true });
} catch (e) {
  // ignore if glob doesn't match or isn't accessible
}

const discoveredImages = [
  ...Object.values(modulesFromAssets).map((m) => m.default),
  ...Object.values(modulesFromRoot).map((m) => m.default),
].filter(Boolean);

export default function ImageCarousel({ interval = 5000, images: propImages }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const slides = (propImages && propImages.length) ? propImages : discoveredImages;

  useEffect(() => {
    if (!slides.length) return;
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [paused, interval, slides.length]);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  if (!slides.length) {
    return null;
  }

  return (
    <div
      className="image-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button className="arrow left" onClick={prev} aria-label="Previous image">‹</button>
      <div className="slides">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Slide ${i + 1}`}
            className={i === index ? 'active' : 'inactive'}
            loading="lazy"
          />
        ))}
      </div>
      <button className="arrow right" onClick={next} aria-label="Next image">›</button>
      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'dot active' : 'dot'}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
