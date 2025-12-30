"use client";

import React, { useEffect, useRef, useState } from "react";
import "./slider.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function AutoSlider(params) {
    const slides = params.sliderImages;
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const totalSlides = slides.length;
    const slidesPerView = 1;

    // Clone slides for seamless infinite loop
    const slidesWithClones = [
        slides[totalSlides - 1], // Clone of the last slide
        ...slides,
        slides[0], // Clone of the first slide
    ];

    // Adjust for seamless looping
    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentSlide === totalSlides) {
            setCurrentSlide(0);
        } else if (currentSlide === -1) {
            setCurrentSlide(totalSlides - 1);
        }
    };

    const goToNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev + 1);
    };

    const goToPrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="col-md-12 heroSlider-fixed">
            <div className="overlay"></div>

            {/* Slider Container */}
            <div className="slider-container" ref={sliderRef}>
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${(currentSlide + 1) * (100 / slidesPerView)}%)`,
                        display: "flex",
                        transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {slidesWithClones.map((src, index) => (
                        <div className="slider-slide" key={index} style={{ minWidth: `${100 / slidesPerView}%` }}>
                            <img
                                src={src}
                                alt={`Slide ${index}`}
                                className="img-fluid"
                                loading="lazy"
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Control Arrows */}
            <div className="prev" onClick={goToPrev}>
                <IoIosArrowBack size={40} color="white" />
            </div>
            <div className="next" onClick={goToNext}>
                <IoIosArrowForward size={40} color="white" />
            </div>
        </div>
    );
}

export default AutoSlider;


