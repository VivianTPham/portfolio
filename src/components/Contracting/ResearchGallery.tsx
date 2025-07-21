import React, { useState } from 'react';
import './ResearchGallery.css';

interface ResearchGalleryProps {
  images: string[];
}

const ResearchGallery: React.FC<ResearchGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openImage = (index: number) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const showNext = () =>
    setCurrentIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : prev
    );

  return (
    <>
      <div className="research-wrapper">
        <div className="row1">
          {images.slice(0, 3).map((img, i) => (
            <img
              key={i}
              className="research-diagram"
              alt={`clckr ${i + 1}`}
              src={img}
              onClick={() => openImage(i)}
            />
          ))}
        </div>
        <div className="row2">
          {images.slice(3).map((img, i) => (
            <img
              key={i + 3}
              className="research-diagram"
              alt={`clckr ${i + 4}`}
              src={img}
              onClick={() => openImage(i + 3)}
            />
          ))}
        </div>
      </div>

      {currentIndex !== null && (
        <div className="popup-overlay" onClick={closeImage}>
          <div className="popup-container" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-nav-button left"
              onClick={showPrev}
              disabled={currentIndex === 0}
            >
              ‹
            </button>
            <img
              className="popup-image"
              src={images[currentIndex]}
              alt={`clckr ${currentIndex + 1}`}
            />
            <button
              className="gallery-nav-button right"
              onClick={showNext}
              disabled={currentIndex === images.length - 1}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResearchGallery;
