import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="SV Interiors" />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li onClick={closeMenu}>
            <NavLink to="/" end className={({ isActive }) => (isActive && location.hash === "") ? "active" : ""}>Home</NavLink>
          </li>
          <li onClick={closeMenu}>
            <HashLink to="/#About" className={location.pathname === "/" && location.hash === "#About" ? "active" : ""}>About</HashLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/solutions" className={({ isActive }) => isActive ? "active" : ""}>Solutions</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;