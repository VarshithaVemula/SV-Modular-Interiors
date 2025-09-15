import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "./index.css";
import ThankYou from "./pages/ThankYou"; 
import ScrollToTop from "./components/ScrollToTop"; // Import the new component

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Place it here to work on all page changes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Corrected: Use 'path' instead of 'href' */}
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:solutionId" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;