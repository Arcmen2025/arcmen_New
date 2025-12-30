import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FaRegThumbsUp } from 'react-icons/fa';
import Link from 'next/link';

const Herosec = () => {
    return (
        <>
            <section>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="p-0 hero-banner">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735545384/arcmen/landing%20pages/interior%20design/interior-design-2.webp" alt="First slide" />
                                    <Carousel.Caption>
                                        <h3>Artistry in Every Corner, Beauty in</h3>
                                        <h3>Every Detail!</h3>
                                        <p>"Designs That Reflect Your Personality!"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735545372/arcmen/landing%20pages/interior%20design/interrior-design-3.webp" alt="Second slide" />
                                    <Carousel.Caption>
                                        <h3>Creating Spaces That Tell Your Story!</h3>
                                        <p>"Your Space, Your Style, Our Expertise"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735545368/arcmen/landing%20pages/interior%20design/interior-design.webp" alt="Third slide" />
                                    <Carousel.Caption>
                                        <h3>WE TAKE PRIDE IN BUILDING STYLISH AND </h3>
                                        <h3>FEATURED INTERIOR DESIGN.</h3>
                                        <p>"Designing Dreams, Crafting Reality"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-5 pb-5 our-role">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h2>OUR ROLE OF WORK IN INTERIOR DECORATER </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col lg={3} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735037748/arcmen/Interior%20designing/Kitchen-arcmen.jpg" alt="Kitchen arcmen" />
                                <h3>Modular Kitchen </h3>
                                <p>600+ Kitchen designs | Accessories | Appliances | Countertops</p>
                            </div>
                        </Col>
                        <Col lg={3} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735041011/arcmen/Interior%20designing/bedroom-arcmen.jpg" alt="bedroom arcmen" />
                                <h3>Bedroom interior</h3>
                                <p>Wardrobe | Wardrobe Accessories | Cot | Cot Backdrop |Dressing</p>
                            </div>
                        </Col>
                        <Col lg={3} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735041202/arcmen/Interior%20designing/Living-arcmen.jpg" alt="Living arcmen" />
                                <h3>Living Room interior </h3>
                                <p>TV Unit | Designer Partitions Pooja Unit</p>
                            </div>
                        </Col>
                        <Col lg={3} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735041529/arcmen/Interior%20designing/pooja-room.jpg" alt="Pooja Room" />
                                <h3>Pooja Room</h3>
                                <p>Modern Pooja Unit Traditional Pooja Unit</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="pt-4">
                        <Col lg={3} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735043143/arcmen/Interior%20designing/dinning.jpg" alt="Dinning" />
                                <h3>Dinning</h3>
                                <p>Crockery Storage | Dinning Table & Chairs</p>
                            </div>
                        </Col>
                        <Col lg={3} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735043375/arcmen/Interior%20designing/home-improment.jpg" alt="Home Improvement" />
                                <h3>Home Improvement</h3>
                                <p>False Celling | Painting | Lighting | Wallpaper | Wall Décor</p>
                            </div>
                        </Col>
                        <Col lg={3} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735044854/arcmen/Interior%20designing/flooring.jpg" alt="Flooring" />
                                <h3>Flooring</h3>
                                <p>Solid Wood flooring | Laminated Flooring | Deck Wood Flooring</p>
                            </div>
                        </Col>
                        <Col lg={3} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735045124/arcmen/Interior%20designing/window.jpg" alt="Windows" />
                                <h3>Windows</h3>
                                <p>Curtains | Blinds | Mosquito net Curtain Rod</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <div className="text-center mt-5">
                                    <h5 style={{ lineHeight: '25px', fontSize: '21px', fontWeight: '700', color: '#131d3b' }}>
                                        Arcmen has its own working group to manufacture the needs of its own projects. Additional works for Vendors specializes in textiles, gypsum mouldings and paintwork.
                                    </h5>
                                    <p>Similarly fine marble, granite, Wooden flooring to the specification for the appropriate project.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="interior-design">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="">
                                <h2>INTERIOR DESIGN CONSULTANCY PROVIDER IN CHENNAI</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col lg={6} md={12} className="list-of">
                            <div className="">
                                <h3>What we doing in interior design consulting services in Chennai & Tamilnadu</h3>
                            </div>
                        </Col>
                        <Col lg={6} md={12} style={{ background: '#4DBC15', padding: '20px 40px' }}>
                            <div className="interior-list">
                                <p>
                                    <FaRegThumbsUp /> 3D Virtual Reality preview.
                                </p>
                                <p>
                                    <FaRegThumbsUp /> Flooring & Ceiling view Options.
                                </p>
                                <p>
                                    <FaRegThumbsUp /> Space planning.
                                </p>
                                <p>
                                    <FaRegThumbsUp /> Material ideas of Paints, Wallpaper, Curtains & More.
                                </p>
                                <p>
                                    <FaRegThumbsUp /> Furniture Design choices for Modular kitchen, bedrooms, dinning, Led TV units & More.
                                </p>
                                <p>
                                    <FaRegThumbsUp /> Advising on budget allocation; suggesting spaces where you can save and where you can spend
                                </p>
                                <p>
                                    <FaRegThumbsUp /> Branding with logo.
                                </p>
                                <p>
                                    <FaRegThumbsUp /> Calculating bill of quantities.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="Build-Décor">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={8} className="align-self-center">
                            <h5>Design & Decor Your Home Interior Easy With Us</h5>
                            <p>Call Today for a Free Estimate !</p>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="align-self-center">
                            <div id="" className="color-overlay-button">
                                <Link href="contact-us/" className="color-overlay-link">
                                    <span className="ue-color-overlay"></span>
                                    <span className="ue-btn-txt">GET A FREE QUOTES</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Herosec;
