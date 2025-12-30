// // "use client";

// // import React, { useEffect, useRef, useState } from "react";
// // import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// // import "../../style/slider.css";

// // function Slidercard() {
// //     const sliderRef = useRef(null);
// //     const [currentSlide, setCurrentSlide] = useState(0); // Start on the first slide
// //     const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during animation
// //     const [slidesPerView, setSlidesPerView] = useState(4); // Default for desktop

// //     // Array of images with titles, links, and unique IDs
// //     const slides = [
// //         { 
// //             id: "slide-1", 
// //             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raju-3bhk-house-interior-design.jpg", 
// //             title: "Dr.Raju 3BHK House Interior Design - Chennai", 
// //             link: "https://www.houzz.in/hznb/photos/dr-raju-3bhk-house-interior-design-phvw-vp~117413674"
// //         },
// //         { 
// //             id: "slide-2", 
// //             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/vasanth-2bhk-house-interior-design.jpg", 
// //             title: "Mr.Vasanth 2BHK House Interior Design - Chennai", 
// //             link: "https://www.houzz.in/hznb/photos/mr-vasanth-2bhk-house-interior-design-chennai-phvw-vp~129905798"
// //         },
// //         { 
// //             id: "slide-3", 
// //             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/srinivasan-3bhk-house.jpg", 
// //             title: "Mr.Srinivasan 3BHK House - Chennai", 
// //             link: "https://www.houzz.in/hznb/photos/mr-srinivasan-3bhk-house-interior-design-chennai-phvw-vp~129910381"
// //         },
// //         { 
// //             id: "slide-4", 
// //             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raman-3bhk-house-interior-design.jpg", 
// //             title: "Mr.Raman 3BHK House Interior Design - Perumbakkam", 
// //             link: "https://www.houzz.in/hznb/photos/mr-raman-3bhk-house-interior-design-embassy-residency-perumbakkam-chennai-phvw-vp~116071475"
// //         },
// //         { 
// //             id: "slide-5", 
// //             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/narayana-rao-3bhk-interior-design.jpg", 
// //             title: "Mr.Narayana Rao 3BHK Interior Design -  Parrys", 
// //             link: "https://www.houzz.in/hznb/photos/3bhk-mr-narayana-rao-parrys-interior-decoration-site-photos-phvw-vp~105593096"
// //         },
// //         { 
// //             id: "slide-6", 
// //             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/mukulrai-3bhk-interior-design.jpg", 
// //             title: "Mr.Mukulrai 3BHK Interior - Parrys", 
// //             link: "https://www.houzz.in/hznb/photos/mr-mukulrai-parrys-3bhk-interior-decoration-site-photos-phvw-vp~105592040"
// //         },
// //         { 
// //             id: "slide-7", 
// //             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/bhavna-3bhk-house-interior-design.jpg", 
// //             title: "Mrs.BHAVNA 3BHK House Interior Design - Chennai", 
// //             link: "https://www.houzz.in/hznb/photos/mrs-bhavna-3bhk-house-interior-design-phvw-vp~117411907"
// //         },
// //         { 
// //             id: "slide-8", 
// //             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/eta-star-lilac-appartment.jpg", 
// //             title: "ETA STAR- Lilac Appartment - Adayar Chennai ", 
// //             link: "https://www.houzz.in/hznb/photos/eta-star-lilac-appartment-adayar-chennai-phvw-vp~137465925"
// //         },
// //     ];

// //     const totalSlides = slides.length;

// //     // Update the number of slides visible based on screen width
// //     useEffect(() => {
// //         const updateSlidesPerView = () => {
// //             const width = window.innerWidth;
// //             if (width <= 768) {
// //                 setSlidesPerView(1); // 1 slide on mobile
// //             } else if (width <= 1024) {
// //                 setSlidesPerView(2); // 2 slides on tablet
// //             } else {
// //                 setSlidesPerView(4); // 4 slides on desktop
// //             }
// //         };

// //         updateSlidesPerView(); // Initial check
// //         window.addEventListener("resize", updateSlidesPerView); // Listen for window resize
// //         return () => window.removeEventListener("resize", updateSlidesPerView); // Cleanup
// //     }, []);

// //     const goToNext = () => {
// //         if (!isAnimating) {
// //             setIsAnimating(true);
// //             setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1)); // Ensure we don't exceed total slides
// //         }
// //     };

// //     const goToPrev = () => {
// //         if (!isAnimating) {
// //             setIsAnimating(true);
// //             setCurrentSlide((prev) => Math.max(prev - 1, 0)); // Ensure we don't go below 0
// //         }
// //     };

// //     useEffect(() => {
// //         const interval = setInterval(() => {
// //             goToNext();
// //         }, 1000);
     
// //         return () => clearInterval(interval); // Cleanup interval
// //     }, [slidesPerView]);

// //     const handleTransitionEnd = () => {
// //         setIsAnimating(false);
// //     };

// //     return (
// //         <div className="col-md-12 gallary-image-fixed">
// //             <div className="overlay"></div>

// //             <div className="slider-container" ref={sliderRef}>
// //                 <div
// //                     className="slider-track"
// //                     style={{
// //                         transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
// //                         display: "flex",
// //                         transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
// //                         width: `${(slides.length / slidesPerView) * 100}%`, // Adjust width based on slides per view
// //                     }}
// //                     onTransitionEnd={handleTransitionEnd}
// //                 >
// //                     {slides.map((slide, index) => (
// //                         <div
// //                             id={slide.id}  // Set the unique ID for each slide
// //                             className="slider-slide"
// //                             key={index}
// //                             style={{
// //                                 flex: `0 0 ${100 / slidesPerView}%`,
// //                                 boxSizing: "border-box",
// //                                 padding: "10px",
// //                             }}
// //                         >
// //                             <a href={slide.link} target="_blank" rel="noopener noreferrer">
// //                                 <img
// //                                     src={slide.src}
// //                                     alt={`Slide ${index}`}
// //                                     className="img-fluid"
// //                                     loading="lazy"
// //                                     style={{ width: "100%", height: "auto" }}
// //                                 />
// //                                 <div className="image-title">
// //                                     {slide.title} {/* Display the title of each image */}
// //                                 </div>
// //                             </a>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>

// //             <div className="prev" onClick={goToPrev}>
// //                 <IoIosArrowBack size={40} color="white" />
// //             </div>
// //             <div className="next" onClick={goToNext}>
// //                 <IoIosArrowForward size={40} color="white" />
// //             </div>
// //         </div>
// //     );
// // }

// // export default Slidercard;
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import "../../style/slider.css";

// function Slidercard() {
//     const sliderRef = useRef(null);
//     const [currentSlide, setCurrentSlide] = useState(0); // Start on the first slide
//     const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during animation
//     const [slidesPerView, setSlidesPerView] = useState(4); // Default for desktop

//     // Array of images with titles, links, and unique IDs
//     const slides = [
//         { 
//             id: "slide-1", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raju-3bhk-house-interior-design.jpg", 
//             title: "Dr.Raju 3BHK House Interior Design - Chennai", 
//             link: "https://www.houzz.in/hznb/photos/dr-raju-3bhk-house-interior-design-phvw-vp~117413674"
//         },
//         { 
//             id: "slide-2", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/vasanth-2bhk-house-interior-design.jpg", 
//             title: "Mr.Vasanth 2BHK House Interior Design - Chennai", 
//             link: "https://www.houzz.in/hznb/photos/mr-vasanth-2bhk-house-interior-design-chennai-phvw-vp~129905798"
//         },
//         { 
//             id: "slide-3", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/srinivasan-3bhk-house.jpg", 
//             title: "Mr.Srinivasan 3BHK House - Chennai", 
//             link: "https://www.houzz.in/hznb/photos/mr-srinivasan-3bhk-house-interior-design-chennai-phvw-vp~129910381"
//         },
//         { 
//             id: "slide-4", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raman-3bhk-house-interior-design.jpg", 
//             title: "Mr.Raman 3BHK House Interior Design - Perumbakkam", 
//             link: "https://www.houzz.in/hznb/photos/mr-raman-3bhk-house-interior-design-embassy-residency-perumbakkam-chennai-phvw-vp~116071475"
//         },
//         { 
//             id: "slide-5", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/narayana-rao-3bhk-interior-design.jpg", 
//             title: "Mr.Narayana Rao 3BHK Interior Design -  Parrys", 
//             link: "https://www.houzz.in/hznb/photos/3bhk-mr-narayana-rao-parrys-interior-decoration-site-photos-phvw-vp~105593096"
//         },
//         { 
//             id: "slide-6", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/mukulrai-3bhk-interior-design.jpg", 
//             title: "Mr.Mukulrai 3BHK Interior - Parrys", 
//             link: "https://www.houzz.in/hznb/photos/mr-mukulrai-parrys-3bhk-interior-decoration-site-photos-phvw-vp~105592040"
//         },
//         { 
//             id: "slide-7", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/bhavna-3bhk-house-interior-design.jpg", 
//             title: "Mrs.BHAVNA 3BHK House Interior Design - Chennai", 
//             link: "https://www.houzz.in/hznb/photos/mrs-bhavna-3bhk-house-interior-design-phvw-vp~117411907"
//         },
//         { 
//             id: "slide-8", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/eta-star-lilac-appartment.jpg", 
//             title: "ETA STAR- Lilac Appartment - Adayar Chennai ", 
//             link: "https://www.houzz.in/hznb/photos/eta-star-lilac-appartment-adayar-chennai-phvw-vp~137465925"
//         },
//     ];

//     // Creating an array that includes cloned slides at the beginning and end
//     const infiniteSlides = [
//         slides[slides.length - 1],  // Clone the last slide
//         ...slides,  // Original slides
//         slides[0],  // Clone the first slide
//     ];

//     const totalSlides = infiniteSlides.length;

//     // Update the number of slides visible based on screen width
//     useEffect(() => {
//         const updateSlidesPerView = () => {
//             const width = window.innerWidth;
//             if (width <= 768) {
//                 setSlidesPerView(1); // 1 slide on mobile
//             } else if (width <= 1024) {
//                 setSlidesPerView(2); // 2 slides on tablet
//             } else {
//                 setSlidesPerView(4); // 4 slides on desktop
//             }
//         };

//         updateSlidesPerView(); // Initial check
//         window.addEventListener("resize", updateSlidesPerView); // Listen for window resize
//         return () => window.removeEventListener("resize", updateSlidesPerView); // Cleanup
//     }, []);

//     const goToNext = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => (prev + 1) % totalSlides); // Loop to the beginning when we reach the end
//         }
//     };

//     const goToPrev = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides); // Loop to the end when we reach the start
//         }
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             goToNext();
//         }, 1000);
     
//         return () => clearInterval(interval); // Cleanup interval
//     }, [slidesPerView]);

//     const handleTransitionEnd = () => {
//         setIsAnimating(false);
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
//                         width: `${(infiniteSlides.length / slidesPerView) * 100}%`, // Adjust width based on slides per view
//                     }}
//                     onTransitionEnd={handleTransitionEnd}
//                 >
//                     {infiniteSlides.map((slide, index) => (
//                         <div
//                             id={slide.id}  // Set the unique ID for each slide
//                             className="slider-slide"
//                             key={index}
//                             style={{
//                                 flex: `0 0 ${100 / slidesPerView}%`,
//                                 boxSizing: "border-box",
//                                 padding: "10px",
//                             }}
//                         >
//                             <a href={slide.link} target="_blank" rel="noopener noreferrer">
//                                 <img
//                                     src={slide.src}
//                                     alt={`Slide ${index}`}
//                                     className="img-fluid"
//                                     loading="lazy"
//                                     style={{ width: "100%", height: "auto" }}
//                                 />
//                                 <div className="image-title">
//                                     {slide.title} {/* Display the title of each image */}
//                                 </div>
//                             </a>
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

// export default Slidercard;




// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import "../../style/slider.css";

// function Slidercard() {
//     const sliderRef = useRef(null);
//     const [currentSlide, setCurrentSlide] = useState(0); // Start on the first slide
//     const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during animation
//     const [slidesPerView, setSlidesPerView] = useState(4); // Default for desktop

//     // Array of images with titles, links, and unique IDs
//     const slides = [
//         { 
//             id: "slide-1", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raju-3bhk-house-interior-design.jpg", 
//             title: "Dr.Raju 3BHK House Interior Design - Chennai", 
//             link: "https://www.houzz.in/hznb/photos/dr-raju-3bhk-house-interior-design-phvw-vp~117413674"
//         },
//         { 
//             id: "slide-2", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/vasanth-2bhk-house-interior-design.jpg", 
//             title: "Mr.Vasanth 2BHK House Interior Design - Chennai", 
//             link: "https://www.houzz.in/hznb/photos/mr-vasanth-2bhk-house-interior-design-chennai-phvw-vp~129905798"
//         },
//         { 
//             id: "slide-3", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/srinivasan-3bhk-house.jpg", 
//             title: "Mr.Srinivasan 3BHK House - Chennai", 
//             link: "https://www.houzz.in/hznb/photos/mr-srinivasan-3bhk-house-interior-design-chennai-phvw-vp~129910381"
//         },
//         { 
//             id: "slide-4", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raman-3bhk-house-interior-design.jpg", 
//             title: "Mr.Raman 3BHK House Interior Design - Perumbakkam", 
//             link: "https://www.houzz.in/hznb/photos/mr-raman-3bhk-house-interior-design-embassy-residency-perumbakkam-chennai-phvw-vp~116071475"
//         },
//         { 
//             id: "slide-5", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/narayana-rao-3bhk-interior-design.jpg", 
//             title: "Mr.Narayana Rao 3BHK Interior Design -  Parrys", 
//             link: "https://www.houzz.in/hznb/photos/3bhk-mr-narayana-rao-parrys-interior-decoration-site-photos-phvw-vp~105593096"
//         },
//         { 
//             id: "slide-6", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/mukulrai-3bhk-interior-design.jpg", 
//             title: "Mr.Mukulrai 3BHK Interior - Parrys", 
//             link: "https://www.houzz.in/hznb/photos/mr-mukulrai-parrys-3bhk-interior-decoration-site-photos-phvw-vp~105592040"
//         },
//         { 
//             id: "slide-7", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/bhavna-3bhk-house-interior-design.jpg", 
//             title: "Mrs.BHAVNA 3BHK House Interior Design - Chennai", 
//             link: "https://www.houzz.in/hznb/photos/mrs-bhavna-3bhk-house-interior-design-phvw-vp~117411907"
//         },
//         { 
//             id: "slide-8", 
//             src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/eta-star-lilac-appartment.jpg", 
//             title: "ETA STAR- Lilac Appartment - Adayar Chennai ", 
//             link: "https://www.houzz.in/hznb/photos/eta-star-lilac-appartment-adayar-chennai-phvw-vp~137465925"
//         },
//     ];

//     const totalSlides = slides.length;

//     // Update the number of slides visible based on screen width
//     useEffect(() => {
//         const updateSlidesPerView = () => {
//             const width = window.innerWidth;
//             if (width <= 768) {
//                 setSlidesPerView(1); // 1 slide on mobile
//             } else if (width <= 1024) {
//                 setSlidesPerView(2); // 2 slides on tablet
//             } else {
//                 setSlidesPerView(4); // 4 slides on desktop
//             }
//         };

//         updateSlidesPerView(); // Initial check
//         window.addEventListener("resize", updateSlidesPerView); // Listen for window resize
//         return () => window.removeEventListener("resize", updateSlidesPerView); // Cleanup
//     }, []);

//     const goToNext = () => {
//         setIsAnimating(true);
//         setCurrentSlide((prev) => (prev + 1) % totalSlides); // Loop to the beginning when we reach the end
//     };

//     const goToPrev = () => {
//         setIsAnimating(true);
//         setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides); // Loop to the end when we reach the start
//     };

//     useEffect(() => {
//         // Set interval to automatically rotate the slides
//         const interval = setInterval(() => {
//             goToNext();
//         }, 3000); // Change every 3 seconds

//         return () => clearInterval(interval); // Cleanup interval when the component unmounts
//     }, [totalSlides]);

//     const handleTransitionEnd = () => {
//         setIsAnimating(false);
//     };

//     return (
//         <>
//         <div className="col-md-12 gallary-image-fixed">
//             <div className="overlay"></div>

//             <div className="slider-container" ref={sliderRef}>
//                 <div
//                     className="slider-track"
//                     style={{
//                         transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
//                         display: "flex",
//                         transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
//                         width: `${(slides.length / slidesPerView) * 100}%`, // Adjust width based on slides per view
//                     }}
//                     onTransitionEnd={handleTransitionEnd}
//                 >
//                     {slides.map((slide, index) => (
//                         <div
//                             id={slide.id}  // Set the unique ID for each slide
//                             className="slider-slide"
//                             key={index}
//                             style={{
//                                 flex: `0 0 ${100 / slidesPerView}%`,
//                                 boxSizing: "border-box",
//                                 padding: "10px",
//                             }}
//                         >
//                             <a href={slide.link} target="_blank" rel="noopener noreferrer">
//                                 <img
//                                     src={slide.src}
//                                     alt={`Slide ${index}`}
//                                     className="img-fluid"
//                                     loading="lazy"
//                                     style={{ width: "100%", height: "auto" }}
//                                 />
//                                 <div className="image-title">
//                                     {slide.title} {/* Display the title of each image */}
//                                 </div>
//                             </a>
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

        
//         </>
//     );
// }

// export default Slidercard;



// ==================================================================================================================================================
// ==================================================================================================================================================
// ==================================================================================================================================================
// ==================================================================================================================================================
// ==================================================================================================================================================
// ==================================================================================================================================================
// ==================================================================================================================================================
// ==================================================================================================================================================

"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../style/slider.css";

function Slidercard() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Start on the first slide
    const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during animation
    const [slidesPerView, setSlidesPerView] = useState(1); // Default for desktop

    // Array of images with titles, links, and unique IDs
    const slides = [
        {
            id: "slide-1",
            src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raju-3bhk-house-interior-design.jpg",
            title: "Dr.Raju 3BHK House Interior Design - Chennai",
            link: "https://www.houzz.in/hznb/photos/dr-raju-3bhk-house-interior-design-phvw-vp~117413674"
        },
        {
            id: "slide-2",
            src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/vasanth-2bhk-house-interior-design.jpg",
            title: "Mr.Vasanth 2BHK House Interior Design - Chennai",
            link: "https://www.houzz.in/hznb/photos/mr-vasanth-2bhk-house-interior-design-chennai-phvw-vp~129905798"
        },
        {
            id: "slide-3",
            src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/srinivasan-3bhk-house.jpg",
            title: "Mr.Srinivasan 3BHK House - Chennai",
            link: "https://www.houzz.in/hznb/photos/mr-srinivasan-3bhk-house-interior-design-chennai-phvw-vp~129910381"
        },
        {
            id: "slide-4",
            src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raman-3bhk-house-interior-design.jpg",
            title: "Mr.Raman 3BHK House Interior Design - Perumbakkam",
            link: "https://www.houzz.in/hznb/photos/mr-raman-3bhk-house-interior-design-embassy-residency-perumbakkam-chennai-phvw-vp~116071475"
        },
        {
            id: "slide-5",
            src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/narayana-rao-3bhk-interior-design.jpg",
            title: "Mr.Narayana Rao 3BHK Interior Design -  Parrys",
            link: "https://www.houzz.in/hznb/photos/3bhk-mr-narayana-rao-parrys-interior-decoration-site-photos-phvw-vp~105593096"
        },
        {
            id: "slide-6",
            src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/mukulrai-3bhk-interior-design.jpg",
            title: "Mr.Mukulrai 3BHK Interior - Parrys",
            link: "https://www.houzz.in/hznb/photos/mr-mukulrai-parrys-3bhk-interior-decoration-site-photos-phvw-vp~105592040"
        },
        {
            id: "slide-7",
            src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/bhavna-3bhk-house-interior-design.jpg",
            title: "Mrs.BHAVNA 3BHK House Interior Design - Chennai",
            link: "https://www.houzz.in/hznb/photos/mrs-bhavna-3bhk-house-interior-design-phvw-vp~117411907"
        },
        {
            id: "slide-8",
            src: "https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/eta-star-lilac-appartment.jpg",
            title: "ETA STAR- Lilac Appartment - Adayar Chennai ",
            link: "https://www.houzz.in/hznb/photos/eta-star-lilac-appartment-adayar-chennai-phvw-vp~137465925"
        },
    ];

    const totalSlides = slides.length;
    const duplicatedSlides = [...slides, ...slides]; // Duplicate the slides

    // Update the number of slides visible based on screen width
    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setSlidesPerView(1); // 1 slide on mobile
            } else if (width <= 1024) {
                setSlidesPerView(3); // 2 slides on tablet
            } else {
                setSlidesPerView(4); // 4 slides on desktop
            }
        };

        updateSlidesPerView(); // Initial check
        window.addEventListener("resize", updateSlidesPerView); // Listen for window resize
        return () => window.removeEventListener("resize", updateSlidesPerView); // Cleanup
    }, []);

    const goToNext = () => {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % duplicatedSlides.length); // Loop to the beginning when we reach the end
    };

    const goToPrev = () => {
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + duplicatedSlides.length) % duplicatedSlides.length); // Loop to the end when we reach the start
    };

    useEffect(() => {
        // Set interval to automatically rotate the slides
        const interval = setInterval(() => {
            goToNext();
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup interval when the component unmounts
    }, []);

    const handleTransitionEnd = () => {
        setIsAnimating(false);
        if (currentSlide === totalSlides) {
            setCurrentSlide(0); // Reset to the first slide
        } else if (currentSlide === duplicatedSlides.length - 1) {
            setCurrentSlide(totalSlides - 1); // Reset to the last slide
        }
    };

    return (
        <>
        <div className="col-md-12 gallary-image-fixed">
            <div className="overlay"></div>

            <div className="slider-container" ref={sliderRef}>
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
                        display: "flex",
                        transition: isAnimating ? "transform 0.5s ease-in-out" : "none",
                        width: `${(duplicatedSlides.length / slidesPerView) * 100}%`, // Adjust width based on slides per view
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {duplicatedSlides.map((slide, index) => (
                        <div
                            id={slide.id}  // Set the unique ID for each slide
                            className="slider-slide"
                            key={index}
                            style={{
                                flex: `0 0 ${100 / slidesPerView}%`,
                                boxSizing: "border-box",
                                padding: "10px",
                            }}
                        >
                            <a href={slide.link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={slide.src}
                                    alt={`Slide ${index}`}
                                    className="img-fluid"
                                    loading="lazy"
                                    style={{ width: "100%", height: "auto" }}
                                />
                                <div className="image-title">
                                    {slide.title} {/* Display the title of each image */}
                                </div>
                            </a>
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

        </>
    );
}

export default Slidercard;
