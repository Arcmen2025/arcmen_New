"use client";
import React, { useEffect, useState } from "react";

const brands = [
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331379/arcmen/kindom.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331378/arcmen/kaff.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331378/arcmen/hindware.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331374/arcmen/century.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/asianpaints.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/aristo.webp",
];

const OurBrand = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [slideWidth, setSlideWidth] = useState(200);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setSlideWidth(130); // Mobile - smaller
            } else if (width < 768) {
                setSlideWidth(150); // Tablet small
            } else if (width < 1024) {
                setSlideWidth(170); // Desktop small
            } else {
                setSlideWidth(190); // Large desktop
            }
        };
        
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Double the brands for seamless loop
    const finalBrands = [...brands, ...brands];

    // Calculate animation duration based on slide width (slower animation)
    const getAnimationDuration = () => {
        if (slideWidth <= 130) return 45; // Mobile - slowest
        if (slideWidth <= 150) return 40;
        if (slideWidth <= 170) return 35;
        return 30;
    };

    const animationDuration = getAnimationDuration();

    return (
        <section className="py-4 sm:py-4 md:py-4 lg:py-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                {/* Header Section */}
                <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
                    <h2 className="font-playfair !text-lg sm:!text-base md:!text-xl lg:!text-2xl font-extrabold text-[#1a1a1a] leading-tight">
                        Our Brand 
                        <span className="text-[#4dbc15] relative inline-block ml-2">
                            Partners
                            <svg className="absolute -bottom-2 left-0 w-full h-1 sm:h-1.5" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 4 L200 4" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
                            </svg>
                        </span>
                    </h2>
                </div>

                {/* Simple Brand Slider - No background boxes */}
                <div 
                    className="relative w-full overflow-hidden py-2"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div 
                        className="flex items-center"
                        style={{
                            animationName: 'scroll',
                            animationDuration: `${animationDuration}s`,
                            animationTimingFunction: 'linear',
                            animationIterationCount: 'infinite',
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                    >
                        {finalBrands.map((brand, index) => (
                            <div 
                                key={index}
                                className="flex-shrink-0 mx-3 sm:mx-4 md:mx-5"
                                style={{ width: slideWidth }}
                            >
                                <div className="flex items-center justify-center">
                                    <img 
                                        src={brand} 
                                        alt={`Brand partner ${index + 1}`}
                                        className="w-full h-auto max-h-16 sm:max-h-20 md:max-h-24 object-contain transition-all duration-300 hover:scale-110"
                                        style={{ filter: 'brightness(0.9)' }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient Overlays for smoother edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(calc(-${slideWidth * brands.length}px - ${brands.length * 32}px));
                    }
                }

                @media (max-width: 640px) {
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-${slideWidth * brands.length}px - ${brands.length * 24}px));
                        }
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .flex {
                        animation: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default OurBrand;