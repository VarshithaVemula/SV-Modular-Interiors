import React from "react";
import { motion } from "framer-motion";

// Core Value data for easy mapping
const coreValues = [
  {
    icon: "💡",
    title: "Innovation",
    description: "Cutting-edge modular solutions that adapt to your lifestyle",
  },
  {
    icon: "⭐",
    title: "Quality",
    description: "Premium materials and craftsmanship in every project",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    description: "Eco-friendly designs that care for our environment",
  },
  {
    icon: "❤️",
    title: "Customer First",
    description: "Your satisfaction is our ultimate measure of success",
  },
];

function About() {
  return (
    <section className="about-section" id="About">
      <div className="about-container">
        {/* About Us Section */}
        <h2 className="about-us-heading">About Us</h2>
        <div className="about-content-wrapper">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text-content"
          >
            <h3 className="about-heading">
              Experience Unparalleled <br /> Crafting Precision with <br /> SV Modular Interiors
            </h3>
            <p className="about-paragraph">
              Born from a singular vision, our mission is to create exceptional spaces that redefine
              modern urban living, so you never have to compromise.
            </p>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="about-image-wrapper card"
          >
            <img
              src="/about.jpg"
              alt="Vemula Suresh Kumar, Our Visionary Founder"
              className="about-image"
            />
            <div className="image-title">
              <h2>Mr.Vemula Suresh Kumar</h2>
              <h3>Our Visionary Founder</h3>
            </div>
          </motion.div>
        </div>

        {/* Our Core Values Section */}
        <div className="core-values-section">
          <h2>Our Core Values</h2>
          <p className="core-values-subtitle">
            These principles guide everything we do, from initial consultation to final installation.
          </p>
          <div className="core-values-grid">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;