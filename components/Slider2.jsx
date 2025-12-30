'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../style/slider-title.scss';

function Slider2() {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Start on the first slide
    const [isAnimating, setIsAnimating] = useState(false); // Prevent rapid clicks during animation
    const [slidesPerView, setSlidesPerView] = useState(4); // Default for desktop

    const slides = [
        {
            id: 'slide-1',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raju-3bhk-house-interior-design.jpg',
            title: 'Dr.Raju 3BHK House Interior Design - Chennai',
            link: 'https://www.houzz.in/hznb/photos/dr-raju-3bhk-house-interior-design-phvw-vp~117413674',
            bg:""
        },
        {
            id: 'slide-2',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/vasanth-2bhk-house-interior-design.jpg',
            title: 'Mr.Vasanth 2BHK House Interior Design - Chennai',
            link: 'https://www.houzz.in/hznb/photos/mr-vasanth-2bhk-house-interior-design-chennai-phvw-vp~129905798'
        },
        {
            id: 'slide-3',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/srinivasan-3bhk-house.jpg',
            title: 'Mr.Srinivasan 3BHK House - Chennai',
            link: 'https://www.houzz.in/hznb/photos/mr-srinivasan-3bhk-house-interior-design-chennai-phvw-vp~129910381'
        },
        {
            id: 'slide-4',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raman-3bhk-house-interior-design.jpg',
            title: 'Mr.Raman 3BHK House Interior Design - Perumbakkam',
            link: 'https://www.houzz.in/hznb/photos/mr-raman-3bhk-house-interior-design-embassy-residency-perumbakkam-chennai-phvw-vp~116071475'
        },
        {
            id: 'slide-5',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/narayana-rao-3bhk-interior-design.jpg',
            title: 'Mr.Narayana Rao 3BHK Interior Design -  Parrys',
            link: 'https://www.houzz.in/hznb/photos/3bhk-mr-narayana-rao-parrys-interior-decoration-site-photos-phvw-vp~105593096'
        },
        {
            id: 'slide-6',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/mukulrai-3bhk-interior-design.jpg',
            title: 'Mr.Mukulrai 3BHK Interior - Parrys',
            link: 'https://www.houzz.in/hznb/photos/mr-mukulrai-parrys-3bhk-interior-decoration-site-photos-phvw-vp~105592040'
        },
        {
            id: 'slide-7',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/bhavna-3bhk-house-interior-design.jpg',
            title: 'Mrs.BHAVNA 3BHK House Interior Design - Chennai',
            link: 'https://www.houzz.in/hznb/photos/mrs-bhavna-3bhk-house-interior-design-phvw-vp~117411907'
        },
        {
            id: 'slide-8',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/eta-star-lilac-appartment.jpg',
            title: 'ETA STAR- Lilac Appartment - Adayar Chennai ',
            link: 'https://www.houzz.in/hznb/photos/eta-star-lilac-appartment-adayar-chennai-phvw-vp~137465925'
        },
        {
            id: 'slide-1',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raju-3bhk-house-interior-design.jpg',
            title: 'Dr.Raju 3BHK House Interior Design - Chennai',
            link: 'https://www.houzz.in/hznb/photos/dr-raju-3bhk-house-interior-design-phvw-vp~117413674'
        },
        {
            id: 'slide-2',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/vasanth-2bhk-house-interior-design.jpg',
            title: 'Mr.Vasanth 2BHK House Interior Design - Chennai',
            link: 'https://www.houzz.in/hznb/photos/mr-vasanth-2bhk-house-interior-design-chennai-phvw-vp~129905798'
        },
        {
            id: 'slide-3',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/srinivasan-3bhk-house.jpg',
            title: 'Mr.Srinivasan 3BHK House - Chennai',
            link: 'https://www.houzz.in/hznb/photos/mr-srinivasan-3bhk-house-interior-design-chennai-phvw-vp~129910381'
        },
        {
            id: 'slide-4',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raman-3bhk-house-interior-design.jpg',
            title: 'Mr.Raman 3BHK House Interior Design - Perumbakkam',
            link: 'https://www.houzz.in/hznb/photos/mr-raman-3bhk-house-interior-design-embassy-residency-perumbakkam-chennai-phvw-vp~116071475'
        },
        {
            id: 'slide-5',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/narayana-rao-3bhk-interior-design.jpg',
            title: 'Mr.Narayana Rao 3BHK Interior Design -  Parrys',
            link: 'https://www.houzz.in/hznb/photos/3bhk-mr-narayana-rao-parrys-interior-decoration-site-photos-phvw-vp~105593096'
        },
        {
            id: 'slide-6',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/mukulrai-3bhk-interior-design.jpg',
            title: 'Mr.Mukulrai 3BHK Interior - Parrys',
            link: 'https://www.houzz.in/hznb/photos/mr-mukulrai-parrys-3bhk-interior-decoration-site-photos-phvw-vp~105592040'
        },
        {
            id: 'slide-7',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/bhavna-3bhk-house-interior-design.jpg',
            title: 'Mrs.BHAVNA 3BHK House Interior Design - Chennai',
            link: 'https://www.houzz.in/hznb/photos/mrs-bhavna-3bhk-house-interior-design-phvw-vp~117411907'
        },
        {
            id: 'slide-8',
            src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/eta-star-lilac-appartment.jpg',
            title: 'ETA STAR- Lilac Appartment - Adayar Chennai ',
            link: 'https://www.houzz.in/hznb/photos/eta-star-lilac-appartment-adayar-chennai-phvw-vp~137465925'
        },
    ];

    const totalSlides = slides.length;
    const clonedSlides = [...slides.slice(-slidesPerView), ...slides, ...slides.slice(0, slidesPerView)];

    useEffect(() => {
        const updateSlidesPerView = () => {
            const width = window.innerWidth;
            if (width <= 480) {
                setSlidesPerView(1);
            } else if (width <= 768) {
                setSlidesPerView(2);
            } else if (width <= 1024) {
                setSlidesPerView(3);
            } else if (width <= 1440) {
                setSlidesPerView(4);
            } else {
                setSlidesPerView(4);
            }
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);
        return () => window.removeEventListener('resize', updateSlidesPerView);
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
        }, 5000);
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
                        display: 'flex',
                        transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
                        width: `${(clonedSlides.length / slidesPerView) * 100}%`
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {clonedSlides.map((slide, index) => (
                        <div
                        id={slide.id}
                            className="slider-slide"
                            key={index}
                            style={{
                                flex: `0 0 ${100 / slidesPerView}%`,
                                boxSizing: 'border-box',
                                padding: '10px',
                                height:"300px !important"
                            }}
                        >
                            <a href={slide.link} target="_blank" rel="noopener noreferrer">
                                <img src={slide.src} alt={`Slide ${index}`} className="img-fluid" loading="lazy" style={{ width: '100%', height: 'auto',position:"relative" }} />
                                {/* <div className="image-titless" > */}
                                    <span className="image-titless-title "  >{slide.title}  </span>
                                {/* </div> */}
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
    );
}

export default Slider2;


//=============================================================================================================================================================
//=============================================================================================================================================================
//=============================================================================================================================================================
//=============================================================================================================================================================
//=============================================================================================================================================================

// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import '../style/slider-title.scss';

// function Slider2() {
//     const sliderRef = useRef(null);
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [slidesPerView, setSlidesPerView] = useState(4);

//     const slides = [
//         {
//             id: 'slide-1',
//             src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raju-3bhk-house-interior-design.jpg',
//             title: 'Dr.Raju 3BHK House Interior Design - Chennai',
//             link: 'https://www.houzz.in/hznb/photos/dr-raju-3bhk-house-interior-design-phvw-vp~117413674',
//         },
//         {
//             id: 'slide-2',
//             src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/vasanth-2bhk-house-interior-design.jpg',
//             title: 'Mr.Vasanth 2BHK House Interior Design - Chennai',
//             link: 'https://www.houzz.in/hznb/photos/mr-vasanth-2bhk-house-interior-design-chennai-phvw-vp~129905798'
//         },
//         {
//             id: 'slide-3',
//             src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/srinivasan-3bhk-house.jpg',
//             title: 'Mr.Srinivasan 3BHK House - Chennai',
//             link: 'https://www.houzz.in/hznb/photos/mr-srinivasan-3bhk-house-interior-design-chennai-phvw-vp~129910381'
//         },
//         {
//             id: 'slide-4',
//             src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/raman-3bhk-house-interior-design.jpg',
//             title: 'Mr.Raman 3BHK House Interior Design - Perumbakkam',
//             link: 'https://www.houzz.in/hznb/photos/mr-raman-3bhk-house-interior-design-embassy-residency-perumbakkam-chennai-phvw-vp~116071475'
//         },
//         {
//             id: 'slide-5',
//             src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/narayana-rao-3bhk-interior-design.jpg',
//             title: 'Mr.Narayana Rao 3BHK Interior Design -  Parrys',
//             link: 'https://www.houzz.in/hznb/photos/3bhk-mr-narayana-rao-parrys-interior-decoration-site-photos-phvw-vp~105593096'
//         },
//         {
//             id: 'slide-6',
//             src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/mukulrai-3bhk-interior-design.jpg',
//             title: 'Mr.Mukulrai 3BHK Interior - Parrys',
//             link: 'https://www.houzz.in/hznb/photos/mr-mukulrai-parrys-3bhk-interior-decoration-site-photos-phvw-vp~105592040'
//         },
//         {
//             id: 'slide-7',
//             src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/bhavna-3bhk-house-interior-design.jpg',
//             title: 'Mrs.BHAVNA 3BHK House Interior Design - Chennai',
//             link: 'https://www.houzz.in/hznb/photos/mrs-bhavna-3bhk-house-interior-design-phvw-vp~117411907'
//         },
//         {
//             id: 'slide-8',
//             src: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734583897/arcmen/eta-star-lilac-appartment.jpg',
//             title: 'ETA STAR- Lilac Appartment - Adayar Chennai ',
//             link: 'https://www.houzz.in/hznb/photos/eta-star-lilac-appartment-adayar-chennai-phvw-vp~137465925'
//         },
//     ];

//     const totalSlides = slides.length;
//     const clonedSlides = [...slides.slice(-slidesPerView), ...slides, ...slides.slice(0, slidesPerView)];

//     useEffect(() => {
//         const updateSlidesPerView = () => {
//             const width = window.innerWidth;
//             if (width <= 480) {
//                 setSlidesPerView(1);
//             } else if (width <= 768) {
//                 setSlidesPerView(2);
//             } else if (width <= 1024) {
//                 setSlidesPerView(3);
//             } else if (width <= 1440) {
//                 setSlidesPerView(4);
//             } else {
//                 setSlidesPerView(4);
//             }
//         };

//         updateSlidesPerView();
//         window.addEventListener('resize', updateSlidesPerView);
//         return () => window.removeEventListener('resize', updateSlidesPerView);
//     }, []);

//     const goToNext = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => (prev + 1) % (totalSlides + 2 * slidesPerView));
//         }
//     };

//     const goToPrev = () => {
//         if (!isAnimating) {
//             setIsAnimating(true);
//             setCurrentSlide((prev) => (prev - 1 + totalSlides + 2 * slidesPerView) % (totalSlides + 2 * slidesPerView));
//         }
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             goToNext();
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [slidesPerView]);

//     const handleTransitionEnd = () => {
//         setIsAnimating(false);

//         if (currentSlide === 0) {
//             setCurrentSlide(totalSlides);
//         } else if (currentSlide === totalSlides + slidesPerView) {
//             setCurrentSlide(slidesPerView);
//         }
//     };

//     return (
//         <div>
//             <div className="slider-section">
//                 <div className="slider-container" ref={sliderRef}>
//                     <div
//                         className="slider-track"
//                         style={{
//                             transform: `translateX(-${(currentSlide * 100) / slidesPerView}%)`,
//                             display: 'flex',
//                             transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none',
//                             width: `${(clonedSlides.length / slidesPerView) * 100}%`
//                         }}
//                         onTransitionEnd={handleTransitionEnd}
//                     >
//                         {clonedSlides.map((slide, index) => (
//                             <div
//                                 id={slide.id}
//                                 className="slider-slide"
//                                 key={index}
//                                 style={{
//                                     flex: `0 0 ${100 / slidesPerView}%`,
//                                     boxSizing: 'border-box',
//                                     padding: '10px'
//                                 }}
//                             >
//                                 <a href={slide.link} target="_blank" rel="noopener noreferrer">
//                                     <img src={slide.src} alt={`Slide ${index}`} className="img-fluid" loading="lazy" style={{ width: '100%', height: 'auto', position: "relative" }} />
//                                     <span className="image-titless-title">{slide.title}</span>
//                                 </a>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 <div className="prev" onClick={goToPrev}>
//                     <IoIosArrowBack size={40} color="white" />
//                 </div>
//                 <div className="next" onClick={goToNext}>
//                     <IoIosArrowForward size={40} color="white" />
//                 </div>
//             </div>

//             <div className="content-section">
//                 <h2>Welcome to Our Gallery</h2>
//                 <p>Explore our collection of interior design projects and get inspired for your own space.</p>
//             </div>
//         </div>
//     );
// }

// export default Slider2;
