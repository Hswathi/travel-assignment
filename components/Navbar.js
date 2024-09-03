import React from "react";
import "../styles/navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Travel</div>
      <div className="nav-link">
        <div>Home</div>
        <div>About</div>
        <div>Discover</div>
        <div>Places</div>
      </div>
    </nav>
  );
}

export default Navbar;
