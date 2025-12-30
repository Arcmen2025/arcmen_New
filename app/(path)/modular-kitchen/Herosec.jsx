import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRegThumbsUp } from 'react-icons/fa';

const Herosec = () => {
    return (
        <>
            <section className="inter-banner">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h1>Meet our Modular Kitchen Designers they are inspire you, Because 12 Different Materiel Models, 600+ modular Kitchen designs, Install India & International Brands Accessories & Appliances.</h1>
                                <p>
                                    We are the Best Modular Kitchen Manufacturer in Chennai & Tamilnadu Region.Our aim is Modular Kitchen Designs Prepare of thought thus fulfillingthe kitchen's basic function, As well as ensuring that the artistic
                                    nature of the kitchen.
                                </p>
                                <div id="overlay-btn" className="color-overlay-button" style={{ textAlign: 'center' }}>
                                    <a href="/contact-us" className="color-overlay-link ">
                                        <span className="ue-color-overlay"></span>
                                        <span className="ue-btn-txt">START YOUR PROJECTS</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-5 pb-5 our-role">
                <Container>
                    <Row className="pt-4">
                        <Col lg={4} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735207013/arcmen/modular-kitchen/appliance.jpg" alt="appliance"></img>
                                <h3>Appliances</h3>
                                <p>Wide range of Chimneys, Hobs, Microwaves & Dishwashers</p>
                            </div>
                        </Col>
                        <Col lg={4} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735207079/arcmen/modular-kitchen/hardware-fitting.jpg" alt="hardware-fitting"></img>
                                <h3>Hardware & Fittings</h3>
                                <p>International Brands for long lasting and durable to Access easily kitchens Stuffs.</p>
                            </div>
                        </Col>
                        <Col lg={4} xs={12} md={6}>
                            <div className="modular-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735207150/arcmen/modular-kitchen/accessories.jpg" alt="accessories"></img>
                                <h3>Accessories</h3>
                                <p>Serene storage solutions to maximise the kitchen space</p>
                            </div>
                        </Col>
                        <Col lg={4} xs={12} md={6} className="mt-4">
                            <div className="modular-box1">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735207213/arcmen/modular-kitchen/kitchen.jpg" alt="Kitchen arcmen"></img>
                                <h3>600+ Kitchen Design</h3>
                            </div>
                        </Col>
                        <Col lg={4} xs={12} md={6} className="mt-4">
                            <div className="modular-box1">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735207280/arcmen/modular-kitchen/excellent-quality.jpg" alt="Excellent Quality"></img>
                                <h3>Perfect Finish Excellent Quality </h3>
                            </div>
                        </Col>
                        <Col lg={4} xs={12} md={6} className="mt-4">
                            <div className="modular-box1">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735207341/arcmen/modular-kitchen/crafting-modular-kitchen-design.jpg" alt="crafting modular kitchen design"></img>
                                <h3>Crafting Modular Kitchen Design for Every House at Beautiful Look</h3>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row className='pt-4'>
                <Col lg={3} xs={12} md={6}>
                <div className='modular-box'>
                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735043143/arcmen/Interior%20designing/dinning.jpg" alt="dinning"></img>
                    <h3>Dinning</h3>
                    <p>Crockery Storage | Dinning Table & Chairs</p>
                </div>
                </Col>
                <Col lg={3} xs={12} md={6}>
                <div className='modular-box'>
                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735043375/arcmen/Interior%20designing/home-improment.jpg" alt="Home impromen"></img>
                    <h3>Home Improvement</h3>
                    <p>False Celling | Painting | Lighting | Wallpaper | Wall Décor</p>
                </div>
                </Col>
                <Col lg={3} xs={12} md={6}>
                <div className='modular-box'>
                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735044854/arcmen/Interior%20designing/flooring.jpg" alt="Flooring"></img>
                    <h3>Flooring</h3>
                    <p>Solid Wood flooring | Laminated Flooring | Deck Wood Flooring</p>
                </div>
                </Col>
                <Col lg={3} xs={12} md={6}>
                <div className='modular-box'>
                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735045124/arcmen/Interior%20designing/window.jpg" alt="Kitchen arcmen"></img>
                    <h3>Windows</h3>
                    <p>Curtains | Blinds | Mosquito net Curtain Rod</p>
                </div>
                </Col>
            </Row> */}
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
                                <h3>What we doing in interior design consulting services in Chennai & Tamilnadu
                                </h3>
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
            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h4 style={{fontWeight:"700"}}>Our Works Interior Designer in Chennai</h4>
                            <p>View Completed Projects</p>
                        </div>

                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216348/arcmen/Gallery/interior-design-projects/raja-famaly-tiruttani.jpg" alt="raja-famaly-tiruttani" className="image"></img>
                                <div className="overlay">
                                    <Link href="interior-design-projects/mr-raja-family/">Mr Raja & Family</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216394/arcmen/Gallery/interior-design-projects/baskaran-inetrior-1.jpg" alt="baskaran-inetrior" className="image"></img>
                                <div className="overlay">
                                    <Link href="interior-design-projects/mr-baskaran-family/">Mr Baskaran & Family</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216439/arcmen/Gallery/interior-design-projects/arun-Highlights.jpg" alt="Mr Arun & Family" className="image"></img>
                                <div className="overlay">
                                    <Link href="interior-design-projects/mr-arun-family/">Mr Arun & Family</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216494/arcmen/Gallery/interior-design-projects/moha-family.jpg " className="image"></img>
                                <div className="overlay">
                                    <Link href="interior-design-projects/mr-mohan-family/">Mr Mohan & Family</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216545/arcmen/Gallery/interior-design-projects/manikandan-family.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    className="image"
                                ></img>
                                <div className="overlay">
                                    <Link href="interior-design-projects/mr-manikandan-family/">Mr Manikandan & Family</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216624/arcmen/Gallery/interior-design-projects/dhanasekar-family.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    className="image"
                                ></img>
                                <div className="overlay">
                                    <Link href="interior-design-projects/mr-dhanasekar-family/">Mr Dhanasekar & Family</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216688/arcmen/Gallery/interior-design-projects/harish-family.jpg" alt="narayana-rao-individual-house interior designing company" className="image"></img>
                                <div className="overlay">
                                    <Link href="interior-design-projects/mr-harish-family/">Mr Harish & Family</Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216734/arcmen/Gallery/interior-design-projects/sandhosh-family.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    className="image"
                                ></img>
                                <div className="overlay">
                                    <Link href="interior-design-projects/mr-santhosh-family/">Mr Santhosh &Family</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4} md={6} xs={12}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735216777/arcmen/Gallery/interior-design-projects/raguram-family.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    className="image"
                                ></img>
                                <div className="overlay">
                                    {' '}
                                    <Link href="interior-design-projects/mr-raguraman-family/">Mr Raguraman & Family</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='Build-Décor'>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={8} className='align-self-center'>
                            <h5>Design & Decor Your Home Interior Easy With Us</h5>
                            <p>Call Today for a Free Estimate !</p>
                        </Col>
                        <Col sm={12} md={6} lg={4} className='align-self-center'>

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
