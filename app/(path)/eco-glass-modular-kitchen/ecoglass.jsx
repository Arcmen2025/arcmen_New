import React from 'react';
import './ecoglass.css';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

export default function Ecoglass() {
    return (
        <div>
            <section className="ecoglass-banner">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>ECO GLASS MODULAR KITCHENS</h1>
                            <p>Rich and attractive acrylic mirror shine glossy modular kitchen reflects ultimate shine in your kitchen style.</p>

                            <div className="d-flex flex-column  flex-sm-row justify-content-between">
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735213797/arcmen/g-rich-modular-kitchen/international-look.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                            International <br />
                                            look
                                        </h2>
                                    </div>
                                </div>
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735213857/arcmen/g-rich-modular-kitchen/beautiful-stunning.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                            Prominently Beautiful <br />
                                            and Stunning
                                        </h2>
                                    </div>
                                </div>
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735213904/arcmen/g-rich-modular-kitchen/reflective-shine.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                            Reflective Shine more than <br />
                                            Glossy Kitchen
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
                    <Row  sm={12} md={4} lg={4}>
                        <Col xs={12} sm={12} md={4} lg={4} className="ecoglass-card">
                            <div className="card">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735208829/arcmen/island-kitchen-designer/ten-year-warrenty.png" alt="" loading="lazy" className="img-fluid" />
                                </div>
                                <div className="">
                                    <h2>15 Year Limited Warranty</h2>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4}className="ecoglass-card">
                            <div className="card">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209009/arcmen/island-kitchen-designer/custom-threed-preview.png" alt="" loading="lazy" className="img-fluid" />
                                </div>
                                <div className="">
                                    <h2>Custom 3D Preview</h2>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={4} className="ecoglass-card">
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
                        <Col sm={12} md={6} lg={6} className="ecoglass-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1  text-center">FINISH</div>
                                <div className="box-2 flex-fill">Reflective Shine</div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6} className="ecoglass-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1 text-center">TEXTURE</div>
                                <div className="box-2 flex-fill">Metallic, Colours</div>
                            </div>
                        </Col>
                        {/* <Col sm={12} md={6} lg={4} className="ecoglass-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1 flex-fill text-center">SHAPE</div>
                                <div className="box-2 flex-fill">G Shape | U Shape | L Shape</div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
            {/* <section>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209159/arcmen/island-kitchen-designer/Arcmen-New-Office-Island-kitchen.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">Arcmen New Office Island kitchen</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209272/arcmen/island-kitchen-designer/Arcmen-New-Ofice-Island-Kitchen.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">Arcmen New Office Island kitchen</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209326/arcmen/island-kitchen-designer/KAI-001-Island.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">KAI 001 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209372/arcmen/island-kitchen-designer/KEI-004-Island.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209432/arcmen/island-kitchen-designer/KAI-004-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209525/arcmen/island-kitchen-designer/KEI-003-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209611/arcmen/island-kitchen-designer/KEI-005-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209675/arcmen/island-kitchen-designer/KEI-001-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="ecoglass-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209811/arcmen/island-kitchen-designer/KAI-003-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}
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
