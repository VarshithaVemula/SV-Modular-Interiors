import React from "react";
import { Link } from "react-router-dom";

function SolutionCard({ title, desc, img }) {
  const path = `/solutions/${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Link to={path} className="card">
      {img && (
        <div className="img-wrapper">
          <img src={img} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
}

export default SolutionCard;