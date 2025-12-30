// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import "../../../style/slider.css";

// function Landingslider() {
//     const sliderRef = useRef(null);
//     const [currentSlide, setCurrentSlide] = useState(4); // Start on the first original slide
//     const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during animation
//     const [slidesPerView, setSlidesPerView] = useState(4); // Default for desktop

//     const slides = [
//         "https://res.cloudinary.com/dpflidsbg/image/upload/v1735552000/arcmen/Intertior%20design/interior-design-image4.webp",
//         "https://res.cloudinary.com/dpflidsbg/image/upload/v1735551832/arcmen/Intertior%20design/interior-design-image1.webp",
//         "https://res.cloudinary.com/dpflidsbg/image/upload/v1735551892/arcmen/Intertior%20design/interior-design-image2.webp",
//         "https://res.cloudinary.com/dpflidsbg/image/upload/v1735551934/arcmen/Intertior%20design/interior-design-image3.webp",
       
//     ];

//     const totalSlides = slides.length;
//     const clonedSlides = [
//         ...slides.slice(-slidesPerView), 
//         ...slides, 
//         ...slides.slice(0, slidesPerView)
//     ];

//     useEffect(() => {
//         const updateSlidesPerView = () => {
//             const width = window.innerWidth;
//             if (width <= 768) {
//                 setSlidesPerView(1);
//             } else if (width <= 1024) {
//                 setSlidesPerView(2);
//             } else {
//                 setSlidesPerView(1);
//             }
//         };

//         updateSlidesPerView();
//         window.addEventListener("resize", updateSlidesPerView);
//         return () => window.removeEventListener("resize", updateSlidesPerView);
//     }, []);

//     const goToNext = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => prev + 1);
//         }
//     };

//     const goToPrev = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => prev - 1);
//         }
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             goToNext();
//         }, 3000);
//         return () => clearInterval(interval);
//     }, [slidesPerView]);

//     const handleTransitionEnd = () => {
//         setIsAnimating(false);

//         // Wrap around logic for infinity loop
//         if (currentSlide === 0) {
//             setCurrentSlide(totalSlides); // Move to the last original slide
//         } else if (currentSlide === totalSlides + slidesPerView) {
//             setCurrentSlide(slidesPerView); // Move to the first original slide
//         }
//     };

//     return (
//         <div className="col-md-12 gallary-image-fixed">
//             <div className="overlay"></div>

//             <div className="slider-container" ref={sliderRef}>
//                 <div
//                     className="slider-track"
//                     style={{
//                         transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
//                         display: "flex",
//                         transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
//                         width: `${(clonedSlides.length / slidesPerView) * 100}%`,
//                     }}
//                     onTransitionEnd={handleTransitionEnd}
//                 >
//                     {clonedSlides.map((src, index) => (
//                         <div
//                             className="slider-slide"
//                             key={index}
//                             style={{
//                                 flex: `0 0 ${100 / slidesPerView}%`,
//                                 boxSizing: "border-box",
//                                 padding: "10px",
//                             }}
//                         >
//                             <img
//                                 src={src}
//                                 alt={`Slide ${index}`}
//                                 className="img-fluid"
//                                 loading="lazy"
//                                 style={{ width: "100%", height: "auto" }}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="prev" onClick={goToPrev}>
//                 <IoIosArrowBack size={40} color="white" />
//             </div>
//             <div className="next" onClick={goToNext}>
//                 <IoIosArrowForward size={40} color="white" />
//             </div>
//         </div>
//     );
// }

// export default Landingslider;


// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================
// ============================================================================================================

"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../../style/slider.css";

function Landingslider() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(4); // Start on the first original slide
    const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during animation
    const [slidesPerView, setSlidesPerView] = useState(4); // Default for desktop

    const slides = [
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1735552000/arcmen/Intertior%20design/interior-design-image4.webp",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1735551832/arcmen/Intertior%20design/interior-design-image1.webp",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1735551892/arcmen/Intertior%20design/interior-design-image2.webp",
        "https://res.cloudinary.com/dpflidsbg/image/upload/v1735551934/arcmen/Intertior%20design/interior-design-image3.webp",
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
            if (width <= 768) {
                setSlidesPerView(1);
            } else if (width <= 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(4);
            }
        };

        updateSlidesPerView();
        window.addEventListener("resize", updateSlidesPerView);
        return () => window.removeEventListener("resize", updateSlidesPerView);
    }, []);

    const goToNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => prev + 1);
        }
    };

    const goToPrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => prev - 1);
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

export default Landingslider;