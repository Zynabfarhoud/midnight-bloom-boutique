import { useNavigate } from "react-router-dom";
import React from "react";
export default function Home() {
  const Navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-con">
        <h2>Catch Your Happy Moments</h2>
        <p className="rose">
          "Your favorite memories, distilled into a signature scent"
        </p>
        <img src="/hero.jpg.jpg" alt="" className="hero-img" />
        <button className="button" onClick={() => Navigate("/shop")}>
          Explore Now
        </button>
      </div>
    </section>
  );
}
