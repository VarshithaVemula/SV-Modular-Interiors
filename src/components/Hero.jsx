import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
  {
    image: "/hero/1.jpg",
    title: " Welcome to SV Modular Interiors – Where Design Meets Elegance",
    buttonText: "Contact Us",
    link: "/contact",
  },
  {
    image: "/hero/2.jpg",
    title: "Tailored Interior Solutions for Every Dream",
    buttonText: "Our Solutions",
    link: "/solutions",
  },
  {
    image: "/hero/3.jpg",
    title: "Designing Spaces, Creating Comfort",
    buttonText: "View Projects",
    link: "/projects",
  },
  {
    image: "/hero/4.jpg",
    title: "Inspiring Interiors That Reflect Your Style",
    buttonText: "Get Started",
    link: "/about",
  },
];


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  const currentSlide = slides[currentImageIndex];

  return (
    <div
      className="hero-carousel"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div
        className="overlay"
        style={{
          background: "rgba(0,0,0,0.4)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Slide-in Animation for Title */}
        <motion.h1
          key={currentSlide.title} // triggers animation on change
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          style={{ color: "#fdf0e7ff" }}
        >
          {currentSlide.title}
        </motion.h1>

        {/* Slide-in Animation for Button */}
        <motion.button
          key={currentSlide.buttonText}
          className="contact-btn"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onClick={() => currentSlide.link && navigate(currentSlide.link)}
        >
          {currentSlide.buttonText}
        </motion.button>
      </div>
    </div>
  );
}

export default Hero;
