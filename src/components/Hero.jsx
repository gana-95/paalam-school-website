import React from "react";
import bannerImage from "../assets/img1.jfif";

export default function Hero() {
  return (
    <section className="hero" role="region" aria-labelledby="hero-title">
      <div className="hero-image">
        <img src={bannerImage} alt="Paalam School Campus" className="banner-image" />
        <div className="hero-content">
          <h2 id="hero-title">Empowering Students Through Education</h2>
          <p>A non-profit school committed to nurturing knowledge, values, and opportunities.</p>
        </div>
      </div>
    </section>
  );
}
