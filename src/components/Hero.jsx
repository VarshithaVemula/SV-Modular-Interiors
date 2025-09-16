import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence for exit animations

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image: "/hero/1.jpg",
      title: "Welcome to SV Modular Interiors – Where Design Meets Elegance",
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

  // Automatic slide change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [slides.length]);

  // Handle previous slide
  const goToPrevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Handle next slide
  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

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
        transition: "background-image 1s ease-in-out", // Smooth transition for background image
      }}
    >
      <div
        className="overlay"
        style={{
          background: "rgba(0,0,0,0.4)",
          height: "100%",
          width: "100%", // Ensure overlay covers full width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <AnimatePresence mode="wait"> {/* Use AnimatePresence for animating components exiting the DOM */}
          {/* Slide-in Animation for Title */}
          <motion.h1
            key={currentSlide.title} // triggers animation on change
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }} // Exit animation for when title changes
            transition={{ duration: 0.8 }}
            style={{ color: "#fdf0e7ff", fontSize: "3rem", maxWidth: "80%", marginBottom: "20px" }} // Added basic styling
          >
            {currentSlide.title}
          </motion.h1>

          {/* Slide-in Animation for Button */}
          <motion.button
            key={currentSlide.buttonText}
            className="contact-btn"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }} // Exit animation for when button changes
            transition={{ duration: 0.8, delay: 0.3 }}
            onClick={() => currentSlide.link && navigate(currentSlide.link)}
            style={{ padding: "12px 25px", fontSize: "1.1rem", cursor: "pointer", border: "none", borderRadius: "5px", background: "#fdf0e7ff", color: "#333" }} // Added basic styling
          >
            {currentSlide.buttonText}
          </motion.button>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        className="carousel-arrow left-arrow"
        onClick={goToPrevSlide}
      >
        &#10094; {/* Unicode for left arrow */}
      </button>
      <button
        className="carousel-arrow right-arrow"
        onClick={goToNextSlide}
      >
        &#10095; {/* Unicode for right arrow */}
      </button>
    </div>
  );
}

export default Hero;