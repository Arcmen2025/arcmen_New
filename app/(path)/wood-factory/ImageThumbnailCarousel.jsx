"use client"

// src/components/ImageThumbnailCarousel.js
import React, { useEffect, useState, useRef } from 'react';
import './woodfactory.scss'; // Make sure to import the CSS file

const images = [
  'https://res.cloudinary.com/dpflidsbg/image/upload/v1735286173/arcmen/wood%20factory/beam-saw.webp',
  'https://res.cloudinary.com/dpflidsbg/image/upload/v1735286034/arcmen/wood%20factory/panel-saw.webp',
  'https://res.cloudinary.com/dpflidsbg/image/upload/v1735286216/arcmen/wood%20factory/CNC.webp',
  'https://res.cloudinary.com/dpflidsbg/image/upload/v1735286262/arcmen/wood%20factory/CNC2.webp',
  'https://res.cloudinary.com/dpflidsbg/image/upload/v1735286313/arcmen/wood%20factory/edge-bander.webp',
];

const ImageThumbnailCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselSliderRef = useRef(null);
  const autoplayInterval = 3000; // Set the interval time in milliseconds

  useEffect(() => {
    const handleKeydown = (e) => {
      const actions = {
        Home: () => setActiveIndex(0),
        End: () => setActiveIndex(images.length - 1),
        ArrowLeft: () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1)),
        ArrowRight: () => setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0)),
      };
      if (actions[e.key]) {
        actions[e.key]();
      }
    };

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (carouselSliderRef.current) {
      const activeSlide = carouselSliderRef.current.children[activeIndex];
      const { offsetLeft, offsetWidth } = activeSlide;
      const { clientWidth } = carouselSliderRef.current;
      carouselSliderRef.current.scrollTo({
        left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleButtonClick = (direction) => {
    setActiveIndex((prev) => (direction === 'prev' ? (prev > 0 ? prev - 1 : images.length - 1) : (prev < images.length - 1 ? prev + 1 : 0)));
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="image-thumbnail-carousel">
      <section className="image-display">
        <div className="screen">
          <img src={images[activeIndex]} alt={`Slide ${activeIndex}`} />
        </div>
      </section>
      <section className="thumbnail-carousel">
        <button type="button" className="carousel__btn prev" aria-label="Previous slide" onClick={() => handleButtonClick('prev')} disabled={activeIndex === 0}>
          <svg width="16" height="16" fill="currentColor" className="arrow-icon arrow-left-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>
        <ul className="carousel__slider" ref={carouselSliderRef}>
          {images.map((image, index) => (
            <li key={index} className={`carousel__slide ${index === activeIndex ? 'active' : ''}`} onClick={() => handleThumbnailClick(index)}>
              <div className="thumbnail">
                <img loading="lazy" src={image} alt={`Thumbnail ${index}`} />
                {index === activeIndex && <div className="overlay"></div>}
              </div>
            </li>
          ))}
        </ul>
        <button type="button" className="carousel__btn next" aria-label="Next slide" onClick={() => handleButtonClick('next')} disabled={activeIndex === images.length - 1}>
          <svg width="16" height="16" fill="currentColor" className="arrow-icon arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </section>
    </div>
  );
};

export default ImageThumbnailCarousel;
