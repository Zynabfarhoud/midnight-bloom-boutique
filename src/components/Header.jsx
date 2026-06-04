import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header">
      <h1>Midnight Bloom</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Shop">Shop</Link>
        <Link to="/Contact">Contact</Link>
      </nav>
    </header>
  );
}
