

"use client";
import React, { useState, useEffect } from 'react';
import "./about-page.css"; 
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const imagetext = [
    {
        name: 'Ramesh M',
        location: 'Chennai',
        review: '“Our house is located in Ambur, 200 kms away from Chennai. We came to know about Arcmen via Google. We contacted Mr. Balaraman. He responded very quickly. Highly knowledgeable right from start to end. After finalizing the 3D design and confirming the drawing details, they executed the same as in the design. Arcmen team did a wonderful job to make our new home look perfect with their interior works. We really appreciate the Arcmen interior design team for their sincerity and perfection in work. Thank you.”',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587506/arcmen/about/ramesh.png',
        rating: 5,
    },
    {
        name: 'Vasanth Martin',
        location: 'Chennai',
        review: 'I highly recommend Arcmen interior design in Chennai for the quality modular kitchen and the entire interior work. The 3D design and the final work matched exactly. They finished the work within the promised time and used the quality materials. They made our home in Prince highlands Iyyapanthangal very practical for every day and look beautiful.',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587425/arcmen/about/client-4.png',
        rating: 5,
    },
    {
        name: 'Manivannan Durai',
        location: 'Chennai',
        review: 'I live in Moulivakkam, Porur. I would strongly recommend Arcmen Modular Kitchen and Interiors, Porur design team headed by Balraman sir. More than the work I was impressed with their ethics towards work. If you are looking for interiors for your home. I would strongly recommend them.',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587658/arcmen/about/subbiah.png',
        rating: 0,
    },
    {
        name: 'Arun Dev',
        location: 'Chennai',
        review: 'The team discussed a range of designs for the layout we had in the kitchen as well as bedrooms and came up with many options, following which they also guided on materials selection and fittings with a clear focus. Very satisfied with the work. Delivery – given the variety handled some delays (few days) must be accepted. Overall very happy with the fit and finish of the work. Work completed in May 2023.',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587386/arcmen/about/client-2.png',
        rating: 5,
    },
    {
        name: 'Sathiskumar S',
        location: 'Chennai',
        review: 'Arcmen is proved they are the best kitchen and interiors, because our kitchen is small size but they provided lots of suggestions and ideas, finally we got a very spacious and best kitchen. And other wood work also very good finishing and we got a good commands from our relatives. Price also economic. If you go here, I would say u will get a best modular kitchen and interiors. That is for sure.',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587575/arcmen/about/sathish.png',
        rating: 5,
    },
    {
        name: 'Mr.SURES KUMAR | Valasaravakkam',
        location: 'Chennai',
        review: 'Work was really satisfactory…. it was completed on time as we expected… finishing and the quality was excellent…. designs Wer quite amazin… keep goin… best of luck',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587686/arcmen/about/suresh-kumar.png',
        rating: 5,
    },
    {
        name: 'MR.JACKSON | Perungalathur',
        location: 'Chennai',
        review: 'Arcmen Modular Kitchen: Very professional work. Lots of design options available with them. Total experience was good',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587478/arcmen/about/jackson.png',
        rating: 5,
    },
    {
        name: 'Mr.SUBBIAH | ISHA GAYATHRI',
        location: 'Chennai',
        review: 'Arcmen Interiors – interior designers in chennai : They have a very good knowledge in the field. They keep Customer service in front and steering the wheel and that is their success. They even suggest creative ideas when we are blank. We did a complete modular kitchen and it really came out well. Nobody is perfect and they should have a backup plan when the staffs are unavailable.Our 3D design got a bit delayed because of Staff not available but still they have managed to complete it as promised. Thanks to the whole team. Great work indeed.',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587658/arcmen/about/subbiah.png',
        rating: 5,
    },
    {
        name: 'Mr.SARAVANA PRAKASH | lyyapanthangal',
        location: 'Chennai',
        review: 'Arcmen approach was very customer friendly, providing lot of good suggestions about the interior even if you don’t have any idea on the same.Their 3d design output was very helpful in realising the final output of our interior design which also helps us in making final changes accordingly. Importantly their workers are very dedicated and disciplined completing the work on time. Project manager Mr.Balaraman was very approachable and used to have frequent visits during site work and provides lot of suggestions. Overall I am completely satisfied with the work they have done. Thanks Arcmen!',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587544/arcmen/about/saravana-prakash.png',
        rating: 5,
    },
    {
        name: 'MR.SATHISH KUMAR | lyyapanthangal',
        location: 'Chennai',
        review: 'Arcmen is proved they are the best kitchen and interiors, because our kitchen is small size but they provided lots of suggestions and ideas ,finally we got a very spacious and best kitchen. And other wood work also very good finishing and we got a good commands from our relatives. Price also economic. If you go here, I would say u will get a best modular kitchen and interiors. That is for sure',
        image: 'https://res.cloudinary.com/dpflidsbg/image/upload/v1734587621/arcmen/about/sathish-kumar.png',
        rating: 5,
    },
];

function AutoSliders() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(2);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial setup

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagetext.length);
        }, 6000);

        return () => {
            clearInterval(timer);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagetext.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagetext.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const currentSlides = [];
    for (let i = 0; i < slidesToShow; i++) {
        const index = (currentIndex + i) % imagetext.length;
        currentSlides.push(imagetext[index]);
    }

    return (
        <Container>
            <h2 className='pb-2 m-2 text-center header-h6'>CLIENT TESTIMONIALS</h2>
            <Row>
                <Col className="heroSlider-cliend h-100">
                    <div className="overlay"></div>
                    <div className="slider responsive">
                        {currentSlides.map((item, index) => (
                            <div
                                key={index}
                                className={`slide ${index === 0 ? 'active' : ''} col-sm-12 col-md-12 col-lg-6 h-100`}
                                style={{ flex: `1 0 calc(${100 / slidesToShow}% - 1rem)` }}
                            >
                                <img src={item.image} alt={`Slide ${index + 1}`} className='img-fluid' loading='lazy' />
                                <div className="imagetext-content">
                                    <p>{item.review}</p>
                                    <h3>{item.name}</h3>
                                    <div className="rating">
                                        {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                                    </div>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="dots">
                        {imagetext.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                    <div className="prev" onClick={handlePrev}>
                        <span><IoIosArrowBack /></span>
                    </div>
                    <div className="next" onClick={handleNext}>
                        <span><IoIosArrowForward /></span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AutoSliders;
