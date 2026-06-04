import { useNavigate } from "react-router-dom";
import React from "react";
export default function Contact() {
  const Navigate = useNavigate();
  return (
    <section id="Contact" className="Con">
      <div className="night">
        <img src="/all.jpg" alt="" />
        <div class="text">
          <h2>Midnight</h2>
          <h1>Bloom</h1>
          <button className="btn" onClick={() => Navigate("/shop")}>
            Explore Now
          </button>
        </div>
      </div>
      <div className="info">
        <p>Phone: +961 03 000 939</p>
        <p>Location: Tyre, Lebanon</p>
        <p>Email: midbloom5@gmail.com</p>
      </div>
    </section>
  );
}
