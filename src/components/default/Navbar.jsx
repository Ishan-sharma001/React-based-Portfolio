import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../default/styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </div>
      <ul className={`nav-links ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)}>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
