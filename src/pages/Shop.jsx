import React from "react";
export default function Shop() {
  return (
    <section id="Shop" className="Myproducts">
      <h2 className="light">Our Collections</h2>
      <h3 className="ForW"> Perfumes For Women</h3>
      <div className="moon">
        <div className="card">
          <img src="/wo.jpg" alt="" />
          <h3>PRADA MILANO</h3>
          <p>$25</p>
          <p1>BUY NOW</p1>
        </div>

        <div className="card">
          <img src="/w.jpg" alt="" />
          <h3>Miss Dior</h3>
          <p>$30</p>
          <p1>BUY NOW</p1>
        </div>

        <div className="card">
          <img src="/bw.jpg" alt="" />
          <h3>Bellavita</h3>
          <p>$35</p>
          <p1>BUY NOW</p1>
        </div>

        <h3 className="forM"> Perfumes for Men</h3>
        <div div className="moon">
          <div className="card">
            <img src="/m.jpg" alt="" />
            <h3>Bleu DE Chanel</h3>
            <p>$35</p>
            <p1>BUY NOW</p1>
          </div>

          <div className="card">
            <img src="/men.jpg" alt="" />
            <h3>Luxury Scent</h3>
            <p>$40</p>
            <p1>BUY NOW</p1>
          </div>

          <div className="card">
            <img src="/vm.jpg" alt="" />
            <h3>Versace Eros</h3>
            <p>$30</p>
            <p1>BUY NOW</p1>
          </div>
        </div>
      </div>
    </section>
  );
}
