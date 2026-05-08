"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const brands = [
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331379/arcmen/kindom.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331378/arcmen/kaff.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331378/arcmen/hindware.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331374/arcmen/century.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/asianpaints.webp",
    "https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/aristo.webp",
];

const loopBrands = [...brands, ...brands];

const OurBrand = () => {
    return (
        <section className="py-5 overflow-hidden">
            <Container>
                <Row>
                    <Col>
                        <div className="text-center mb-4">
                            <h2>Our Brand Partners</h2>
                        </div>

                        <div className="slider">
                            <div className="slide-track">
                                {loopBrands.map((brand, index) => (
                                    <div className="slide" key={index}>
                                        <img src={brand} alt={`brand-${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
        .slider {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .slide-track {
          display: flex;
          width: calc(250px * ${loopBrands.length});
          animation: scroll 20s linear infinite;
        }

        .slide {
          width: 250px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          flex-shrink: 0;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(calc(-250px * ${brands.length}));
          }
        }
      `}</style>
        </section>
    );
};

export default OurBrand;