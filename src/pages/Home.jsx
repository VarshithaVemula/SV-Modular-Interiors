import React from "react";
import Hero from "../components/Hero";
import About from "../pages/About"; // ✅ Correct import

function Home() {
  return (
    <>
      <Hero />
      <About />  {/* ✅ About section directly below carousel */}
    </>
  );
}

export default Home;
