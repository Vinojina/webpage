import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="PawPrints Haven Logo" className="logo-image" />
        <h1 className="logo">PawPrints Haven</h1>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;