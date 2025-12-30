import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageThumbnailCarousel from './ImageThumbnailCarousel';

const Woodhero = () => {
    return (
        <>
            <section className="wood-banner">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="wood-title">
                                <a href="/">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo"></img>
                                </a>
                                <h1>WOOD FACTORY & WORKSHOPS</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center glass-works">
                                <h2>WOOD FACTORY</h2>
                                <p>
                                    In our Partnering wood factory RM Modula is more important than just a production facility where it is the heart of the company’s manufacturing operations to create high-quality wood products. Whether focusing on
                                    custom-made designs, maintaining quality control and advanced machinery combined with the skill and expertise of our craftsmen, allows for precise cutting, shaping, and finishing that ensures the highest standards
                                    of quality, delivering impeccable flawless woodwork. Our factory plays a vital role in the company’s success and reputation in the market.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <ImageThumbnailCarousel />
                </Container>
            </section>
            <section className="scrolling-container">
            <Container>
                <Row>
                    <Col md={8} className='m-auto'>
                        <div className="scrolling-text-container">
                            <div className="scrolling-text">
                              <h1>

                                Work Shops Work Shops Work Shops Work Shops Work Shops Work Shops Work Shops Work Shops Work Shops
                              </h1>
                            </div>
                            <div className="scrolling-text">
                                <h1>

                                &nbsp;Work Shops Work Shops Work Shops Work Shops Work Shops Work Shops Work Shops Work Shops Work Shops
                                </h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
                    <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center glass-works">
                                <h2>Glass Works</h2>
                                <p>
                                    S3 Glass and We offer our projects Glass and Mirrors works for entire Tamilnadu & South India, Glass Shutter for wardrobes, Kitchens and frame Profiles and our featuring Products are Glass Partitions, Smart Glass
                                    Table, Marble finish glass, Switchable Glass, Stack Glass Garden, LED Mirrors. We are able to deliver the ordered consignments on-time at the clients.
                                </p>
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735286354/arcmen/wood%20factory/glass-shop.webp"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Woodhero;
