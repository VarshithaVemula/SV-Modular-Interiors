import React, { useState, useEffect } from "react";
import Modal from "../components/ImageModal";
import VideoModal from "../components/VideoModal";

function Projects() {
  const [modalImg, setModalImg] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);
  const [projects, setProjects] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const projectData = [
    { name: "Kothur,Kakinada,Andhrapradesh", filename: "5.jpg" },
    { name: "Madhapur,Hyderabad", filename: "15.jpg" },
    { name: "Kakinada,Andhrapradesh", filename: "4.jpg" },
    { name: "Kakinada,Andhrapradesh", filename: "3.jpg" },
    { name: "Ecil,Hyderabad", filename: "2.jpg" },
    { name: "Gachibowli, Hyderabad", filename: "1.jpg" },
    { name: "Hyderabad", filename: "6.jpg" },
    { name: "Hyderabad", filename: "9.jpg" },
    { name: "Hyderabad", filename: "10.jpg" },
    { name: "Hyderabad", filename: "7.jpg" },
    { name: "Hyderabad", filename: "11.jpg" },
    { name: "Hyderabad", filename: "8.jpg" },
  ];

  const videoData = [
    { name: "Achampet,Kakinada", filename: "12.mp4" },
    { name: "Chintal,Hyderabad", filename: "14.mp4" },
    { name: "Kothur,Kakinada", filename: "13.mp4" },
  ];

  useEffect(() => {
    async function loadContent() {
      setIsLoading(true);

      const imageModules = import.meta.glob('/public/projects/*.{png,jpeg,jpg,webp}');
      const importedImages = await Promise.all(
        Object.keys(imageModules).map(async (path) => {
          const module = imageModules[path];
          const img = await module();
          return { path: img.default, filename: path.split('/').pop() };
        })
      );
      const populatedProjects = projectData.map(data => {
        const matchingImage = importedImages.find(img => img.filename === data.filename);
        return { ...data, img: matchingImage ? matchingImage.path : null };
      });
      setProjects(populatedProjects);

      const videoModules = import.meta.glob('/public/projects/*.{mp4,webm,ogg}');
      const importedVideos = await Promise.all(
        Object.keys(videoModules).map(async (path) => {
          const module = videoModules[path];
          const video = await module();
          return { path: video.default, filename: path.split('/').pop() };
        })
      );
      
      console.log("Videos found by the code:", importedVideos); 
      
      const populatedVideos = videoData.map(data => {
        const matchingVideo = importedVideos.find(video => video.filename === data.filename);
        return { ...data, src: matchingVideo ? matchingVideo.path : null };
      });
      setVideos(populatedVideos);

      setIsLoading(false);
    }
    loadContent();
  }, []);

  const handleImageClick = (imgSrc) => {
    setModalImg(imgSrc);
  };
  const handleVideoClick = (videoSrc) => {
    setModalVideo(videoSrc);
  };

  const closeModal = () => {
    setModalImg(null);
    setModalVideo(null);
  };

  return (
    <>
      <section className="projects-page container" id="Projects">
        <h1>Our Projects</h1>
        <div className="grid">
          {isLoading ? (
            <div>Loading projects...</div>
          ) : projects.length > 0 ? (
            projects.map((project, i) => (
              <div key={i} className="project-card" onClick={() => handleImageClick(project.img)}>
                <img src={project.img} alt={project.name} style={{ cursor: "pointer" }} />
                <div className="project-info">
                  <h3>{project.name}</h3>
                </div>
              </div>
            ))
          ) : (
            <div>No projects found.</div>
          )}
        </div>
      </section>

      <section className="raw-videos-section container">
        <h1>Some of our Raw Videos</h1>
        <h3>No edits, no filters—just the raw passion of our work in motion.</h3>
        <div className="raw-videos-grid">
          {isLoading ? (
            <div>Loading videos...</div>
          ) : videos.length > 0 ? (
            videos.map((video, i) => (
              <div key={i} className="project-card video-card" onClick={() => handleVideoClick(video.src)}>
                <video src={video.src} muted preload="metadata" />
                <div className="project-info">
                  <h3>{video.name}</h3>
                </div>
              </div>
            ))
          ) : (
            <div>No videos found.</div>
          )}
        </div>
      </section>

      {modalImg && <Modal imgSrc={modalImg} onClose={closeModal} />}
      {modalVideo && <VideoModal videoSrc={modalVideo} onClose={closeModal} />}
    </>
  );
}

export default Projects;