import React, { useState } from 'react';
import './WingoGallery.css'

interface WingoGalleryProps {
    images: string[];
    layout?: number[]; // e.g. [1, 2] for 1 image in row 1, 2 in row 2
}

const WingoGallery: React.FC<WingoGalleryProps> = ({ images, layout = [3, 2] }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  
    const openImage = (index: number) => setCurrentIndex(index);
    const closeImage = () => setCurrentIndex(null);
    const showPrev = () => setCurrentIndex((prev) => (prev !== null ? Math.max(prev - 1, 0) : null));
    const showNext = () =>
      setCurrentIndex((prev) =>
        prev !== null ? Math.min(prev + 1, images.length - 1) : null
      );
  
    // Split images into rows based on the layout array
    let imageRows: string[][] = [];
    let start = 0;
    layout.forEach((count) => {
      imageRows.push(images.slice(start, start + count));
      start += count;
    });
  
    return (
      <>
        <div className="research-wrapper">
          {imageRows.map((row, rowIndex) => (
            <div className="image-row" key={rowIndex}>
              {row.map((img, i) => {
                const actualIndex = layout.slice(0, rowIndex).reduce((a, b) => a + b, 0) + i;
                return (
                  <img
                    key={actualIndex}
                    className="wingo-diagram"
                    alt={`diagram ${actualIndex + 1}`}
                    src={img}
                    onClick={() => openImage(actualIndex)}
                  />
                );
              })}
            </div>
          ))}
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
                alt={`diagram ${currentIndex + 1}`}
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

export default WingoGallery;
