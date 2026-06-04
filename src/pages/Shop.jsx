import React, { useState } from "react";
export default function Shop() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = (perfumeName) => {
    setCartCount(cartCount + 1);
    alert(perfumeName + " added to cart!");
  };
  const clearCart = () => {
    setCartCount(0);
    alert("Cart has been cleared!");
  };
  return (
    <section id="Shop" className="Myproducts">
      <h2 className="light">Our Collections</h2>
      <div
        className="Cartcounter"
        onClick={clearCart}
        style={{
          color: "#fff",
          cursor: "pointer",
          margin: "10px 0",
          fontSize: "18px",
        }}
      >
        🛒 Cart: {cartCount} items{"  "}
        <span style={{ color: "#ff4d4d", marginLeft: "5px" }}>
          (Click to clear)
        </span>
      </div>

      <h3 className="ForW"> Perfumes For Women</h3>
      <div className="moon">
        <div className="card">
          <img src="/wo.jpg" alt="" />
          <h3>PRADA MILANO</h3>
          <p>$25</p>
          <button onClick={() => addToCart("PRADA MILANO")}>BUY NOW</button>
        </div>

        <div className="card">
          <img src="/w.jpg" alt="" />
          <h3>Miss Dior</h3>
          <p>$30</p>
          <button onClick={() => addToCart("MISS DIOR")}>BUY NOW</button>
        </div>

        <div className="card">
          <img src="/bw.jpg" alt="" />
          <h3>Bellavita</h3>
          <p>$35</p>
          <button onClick={() => addToCart("BELLAVITA")}>BUY NOW</button>
        </div>

        <h3 className="forM"> Perfumes for Men</h3>
        <div div className="moon">
          <div className="card">
            <img src="/m.jpg" alt="" />
            <h3>Bleu DE Chanel</h3>
            <p>$35</p>
            <button onClick={() => addToCart("BLEU DE CHANEL")}>BUY NOW</button>
          </div>

          <div className="card">
            <img src="/men.jpg" alt="" />
            <h3>Luxury Scent</h3>
            <p>$40</p>
            <button onClick={() => addToCart("LUXURY SCENT")}>BUY NOW</button>
          </div>

          <div className="card">
            <img src="/vm.jpg" alt="" />
            <h3>Versace Eros</h3>
            <p>$30</p>
            <button onClick={() => addToCart("VERSACE EROS")}>BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}
