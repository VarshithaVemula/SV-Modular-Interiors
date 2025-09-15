import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    // Add the id="About" attribute to the section tag
    <section className="about-section" id="About">
      <div className="about-container">
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
            className="about-image-wrapper"
          >
            <img
              src="/aboutimg.jpg"
              alt="SV Modular Interiors"
              className="about-image"
            />
            {/* Added a title below the image */}
            <div className="image-title text-center">
  <h2>Vemula Suresh Kumar</h2>
  <h3>Our Visionary Founder</h3>
</div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;