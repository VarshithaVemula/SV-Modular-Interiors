import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../components/ImageModal";

function Gallery() {
  const { solutionId } = useParams();
  const [modalImg, setModalImg] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // The keys must be lowercase to match the URL slugs
  const solutionImageMaps = {
    'modular-kitchens': import.meta.glob('/public/kitchens/*.{png,jpeg,jpg,webp}'),
    'living-rooms': import.meta.glob('/public/livingrooms/*.{png,jpeg,jpg,webp}'),
    'wardrobes': import.meta.glob('/public/wardrobes/*.{png,jpeg,jpg,webp}'), // Corrected key
    'bedrooms': import.meta.glob('/public/bedrooms/*.{png,jpeg,jpg,webp}'), // Corrected key
  };

  const solutionTitles = {
    "modular-kitchens": "Modular Kitchens",
    "living-rooms": "Living Rooms",
    "wardrobes": "Wardrobes", // Corrected key
    "bedrooms": "Bedrooms", // Corrected key
  };

  useEffect(() => {
    async function loadImages() {
      setIsLoading(true);
      const imageModules = solutionImageMaps[solutionId];
      if (imageModules) {
        const imageUrls = await Promise.all(
          Object.values(imageModules).map(async (module) => {
            const img = await module();
            return img.default;
          })
        );
        setImages(imageUrls);
      } else {
        setImages([]);
      }
      setIsLoading(false);
    }
    loadImages();
  }, [solutionId]);

  return (
    <div className="gallery-layout container">
      <div className="main-gallery">
        {/* Added heading here */}
        <h2>{solutionTitles[solutionId]} Gallery</h2> 
        <div className="grid">
          {isLoading ? (
            <div>Loading images...</div>
          ) : images.length > 0 ? (
            images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${solutionId}-${i}`}
                onClick={() => setModalImg(img)}
                style={{ cursor: "pointer" }}
              />
            ))
          ) : (
            <div>No images found for this solution.</div>
          )}
        </div>
      </div>

      {modalImg && <Modal imgSrc={modalImg} onClose={() => setModalImg(null)} />}
    </div>
  );
}

export default Gallery;