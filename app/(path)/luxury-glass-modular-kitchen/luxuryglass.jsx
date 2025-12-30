import React from 'react';
import './luxuryglass.css';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

export default function Islandkitchen() {
    return (
        <div>
            <section className="luxuryglass-banner">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>LUXURY GLASS MODULAR KITCHEN</h1>
                            <p>This Fully Glass Modular Kitchen made by Saint Gobin Frameless Border Glass Shutters, which gives fashionable finish & reflects the morning sun shine light in your house.</p>

                            <div className="d-flex flex-column  flex-sm-row justify-content-between">
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735293907/arcmen/luxury-glass-modular-kitchen/healthy-and-hygenic.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                            Healthy & <br />
                                            Hygienic
                                        </h2>
                                    </div>
                                </div>
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735293775/arcmen/luxury-glass-modular-kitchen/highly-durable.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                            Highly <br />
                                            Durable
                                        </h2>
                                    </div>
                                </div>
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735293907/arcmen/luxury-glass-modular-kitchen/healthy-and-hygenic.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                           Available range of colours <br />
                                            & Finishes
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={4} className="luxuryglass-card">
                            <div className="card">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735208829/arcmen/island-kitchen-designer/ten-year-warrenty.png" alt="" loading="lazy" className="img-fluid" />
                                </div>
                                <div className="">
                                    <h2>15 Year Limited Warranty</h2>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className="luxuryglass-card">
                            <div className="card">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209009/arcmen/island-kitchen-designer/custom-threed-preview.png" alt="" loading="lazy" className="img-fluid" />
                                </div>
                                <div className="">
                                    <h2>Custom 3D Preview</h2>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className="luxuryglass-card">
                            <div className="card">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209076/arcmen/island-kitchen-designer/shade-change-option.png" alt="" loading="lazy" className="img-fluid" />
                                </div>
                                <div className="text-center">
                                    <h2>Shade Change Options</h2>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        {/* <Col sm={12} md={6} lg={4} className="luxuryglass-textcard"> */}
                        <Col className="luxuryglass-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1 text-center">FINISH</div>
                                <div className="box-2 flex-fill">Glass, Acrylic, PU Wooden, Glossy</div>
                            </div>
                        </Col>
                        {/* <Col sm={12} md={6} lg={4} className="luxuryglass-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1 text-center">TEXTURE</div>
                                <div className="box-2 flex-fill">Reflective, Glasse, Matt</div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1 text-center">SHAPE</div>
                                <div className="box-2 flex-fill">G Shape | U Shape | L Shape</div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735210566/arcmen/luxury-glass-modular-kitchen/luxury-glass-u-shape-design.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">luxury glass u shape design</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735210644/arcmen/luxury-glass-modular-kitchen/luxury-glass-straightline-kithchen-design.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">luxury glass straightline kithchen design</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735210696/arcmen/luxury-glass-modular-kitchen/luxury-glass-l-shape-kitchen-design.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">luxury glass l shape kitchen design</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735210755/arcmen/luxury-glass-modular-kitchen/luxury-glass-island-kitchen-design.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">luxury glass island kitchen design</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735210826/arcmen/luxury-glass-modular-kitchen/luxury-glass-parallel-kitchen-design.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">luxury glass parallel kitchen design</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        {/* <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209525/arcmen/island-kitchen-designer/KEI-003-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209611/arcmen/island-kitchen-designer/KEI-005-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209675/arcmen/island-kitchen-designer/KEI-001-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="luxuryglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209811/arcmen/island-kitchen-designer/KAI-003-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col> */}
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
        </div>
    );
}
