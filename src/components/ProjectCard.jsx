import React from "react";
import Modal from "../components/ImageModal"; // Assuming you have an ImageModal component

function ProjectCard({ name, img }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="project-card" onClick={openModal}>
        <img src={img} alt={name} style={{ cursor: "pointer" }} />
        <h3>{name}</h3>
      </div>
      {isModalOpen && <Modal imgSrc={img} onClose={closeModal} />}
    </>
  );
}

export default ProjectCard;