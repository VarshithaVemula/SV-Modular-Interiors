import React from "react";
import SolutionCard from "../components/SolutionCard";
import SolutionsHero from "../components/SolutionsHero";
import { Link } from "react-router-dom";

function Solutions() {
  const services = [
    { 
      title: "Modular Kitchens", 
      desc: "Durable, functional, and stylish.", 
      img: "/kitchens/9.jpeg" 
    },
    { 
      title: "Living Rooms", 
      desc: "Cozy, inviting, and modern.",
      img: "/livingrooms/4.jpg" 
    },
    { 
      title: "Wardrobes", 
      desc: "A custom wardrobe that's designed for your life, not just your clothes.",
      img: "/wardrobes/3.jpg"  
    },
    {
      title: "Bedrooms", 
      desc: "Your private oasis, where comfort meets contemporary design.",
      img: "/bedrooms/6.jpg" 
    },
  ];

  function slugify(title) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <>
      <SolutionsHero />
      <section className="solutions-page container" id="Solutions">
        <h1>Our Solutions</h1>
        <div className="grid">
          {services.map((s) => (
            <Link key={s.title} to={`/solutions/${slugify(s.title)}`}>
              {/* Pass the image prop to SolutionCard */}
              <SolutionCard title={s.title} desc={s.desc} img={s.img} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Solutions;