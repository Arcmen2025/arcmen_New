"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../style/slider.css";

function AutoSlider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Start on the first slide
    const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during animation
    const [slidesPerView, setSlidesPerView] = useState(4); // Default for desktop

    const slides = [
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734326633/arcmen/floyer-design.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330479/arcmen/kitchen-appliances.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330508/arcmen/kitchen-accessories.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330516/arcmen/living-room-interior.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330537/arcmen/wardrobe-accessories.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330551/arcmen/false-ceilling.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330579/arcmen/modular-kitchen.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330603/arcmen/badroom-interior-design.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734326633/arcmen/floyer-design.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330479/arcmen/kitchen-appliances.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330508/arcmen/kitchen-accessories.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330516/arcmen/living-room-interior.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330537/arcmen/wardrobe-accessories.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330551/arcmen/false-ceilling.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330579/arcmen/modular-kitchen.jpg",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1734330603/arcmen/badroom-interior-design.jpg",
        
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773511/False_Ceiling_ouqrpe.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773536/Foyer_Interior_Design_egvbsa.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773558/Kitchen_Accessories_kgrmrb.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773577/Kitchen_Appliances_zgpz1c.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773599/Living_room_Interior_designAccessories_ckqiua.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773622/modular_kitchenaccessories_lyyteq.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773642/wardrobe_accessories_qagfou.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773511/False_Ceiling_ouqrpe.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773536/Foyer_Interior_Design_egvbsa.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773558/Kitchen_Accessories_kgrmrb.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773577/Kitchen_Appliances_zgpz1c.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773599/Living_room_Interior_designAccessories_ckqiua.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773622/modular_kitchenaccessories_lyyteq.png",
        // "https://res.cloudinary.com/dpflidsbg/image/upload/v1739773642/wardrobe_accessories_qagfou.png",

        "https://res.cloudinary.com/dpflidsbg/image/upload/v1739955667/wardrobe_accessories_k7rri8.png",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1739955637/modular_kitchenaccessories_rjnaav.png",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1739955602/Living_room_Interior_designAccessories_jwxndv.png",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1739961427/Kitchen_Appliances_kasp69.png",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1739955549/Kitchen_Accessories_bc0ohq.png",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1739955521/Foyer_Interior_Design_mqwk0b.png",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1739955489/False_Ceiling_coryjh.png",
    ];

    const totalSlides = slides.length;
    const clonedSlides = [
        ...slides.slice(-slidesPerView),
        ...slides,
        ...slides.slice(0, slidesPerView)
    ];

    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setSlidesPerView(2);
            } else if (width <= 768) {
                setSlidesPerView(3);
            } else if (width <= 1024) {
                setSlidesPerView(4);
            } else if (width <= 1440) {
                setSlidesPerView(5);
            } else {
                setSlidesPerView(6);
            }
        };

        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    const goToNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % (totalSlides + 2 * slidesPerView));
        }
    };

    const goToPrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev - 1 + totalSlides + 2 * slidesPerView) % (totalSlides + 2 * slidesPerView));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [slidesPerView]);

    const handleTransitionEnd = () => {
        setIsAnimating(false);

        // Wrap around logic for infinity loop
        if (currentSlide === 0) {
            setCurrentSlide(totalSlides); // Move to the last original slide
        } else if (currentSlide === totalSlides + slidesPerView) {
            setCurrentSlide(slidesPerView); // Move to the first original slide
        }
    };

    return (
        <div className="col-md-12 gallary-image-fixed">
            <div className="overlay"></div>

            <div className="slider-container" ref={sliderRef}>
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
                        display: "flex",
                        transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
                        width: `${(clonedSlides.length / slidesPerView) * 100}%`,
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {clonedSlides.map((src, index) => (
                        <div
                            className="slider-slide"
                            key={index}
                            style={{
                                flex: `0 0 ${100 / slidesPerView}%`,
                                boxSizing: "border-box",
                                padding: "10px",
                            }}
                        >
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
