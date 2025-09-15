import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // Import HashLink
import logo from "/logo.png";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content container">
        {/* Left Section: Logo & About Text */}
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="SV Interiors" />
          </Link>
          <p className="footer-description">
            SV Modular Interiors is a premier destination
            for affordable luxury in interior design. With a commitment to excellence and
            creativity, we transform spaces into personalized sanctuaries of
            style and functionality, making high-quality interior design
            accessible to all.
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="footer-navigation">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><HashLink to="/#About">About Us</HashLink></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section: Contact & Social Media */}
        <div className="footer-contact-social">
          <h4>Follow us on</h4>
          <ul className="social-links">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">f</span> Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">o</span> Instagram
              </a>
            </li>
          </ul>

          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">@</span>
              <a href="mailto:svmodularinteriors21@gmail.com">svmodularinteriors21@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">&#9742;</span>
              <a href="tel:+918885105055">+91 8885105055</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        <p>Personally crafted by Varshitha Vemula – Every pixel tells a story | All Rights Reserved © {new Date().getFullYear()} SV Modular Interiors.</p>
      </div>
    </footer>
  );
}

export default Footer;