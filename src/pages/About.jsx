import React, { useState } from "react";

export default function About() {
  const [activeInfo, setActiveInfo] = useState("");
  const handleBadgeClick = (message) => {
    setActiveInfo(message);
  };
  return (
    <div className="about-container">
      <h2 className="about-title">Our Story</h2>
      <div className="about-content">
        <p className="about-tagline">"Distilled Into A Signature Scent"</p>
        <p className="about-text">
          At <strong>Midnight Bloom</strong>, we believe that a fragrance is
          more than just a scent—it is an identity. Our boutique is dedicated to
          offering an exclusive collection of fine perfumes that blend classic
          elegance with modern sophistication, helping you find your own perfect
          signature style.
        </p>

        <div className="about-features">
          <div
            className="feature-badge"
            onClick={() =>
              handleBadgeClick(
                "We source our essential oils from France to guarantee a 24-hour luxury experience.",
              )
            }
          >
            ✨ Premium Quality
          </div>

          <div
            className="feature-badge"
            onClick={() =>
              handleBadgeClick(
                "Our products are 100% vegan and never tested on animals.",
              )
            }
          >
            🌿 Cruelty-Free Ingredients
          </div>

          <div
            className="feature-badge"
            onClick={() =>
              handleBadgeClick(
                "Crafted with a high oil concentration so your signature scent lasts all day and night.",
              )
            }
          >
            ⏳ Long-Lasting Scent
          </div>
        </div>
        {activeInfo && (
          <div className="feature-info-box">
            <p>{activeInfo}</p>
          </div>
        )}
      </div>
    </div>
  );
}
