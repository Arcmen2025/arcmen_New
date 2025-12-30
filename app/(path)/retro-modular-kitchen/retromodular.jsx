import React from 'react';
import './retromodular.css';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

export default function Retromodular() {
    return (
        <div>
            <section className="retromodular-banner">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>RETRO MODULAR KITCHEN</h1>
                            <p>Be inspired by vintage kitchens that will never date, Making a stylish retro style Modular kitchen with our guide, is based on the original English Modular kitchen design Concepts</p>

                            <div className="d-flex flex-column  flex-sm-row justify-content-between">
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735218803/arcmen/island-kitchen-designer/easy-maintanance.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                            Easy to <br />
                                            maintain
                                        </h2>
                                    </div>
                                </div>
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735218728/arcmen/island-kitchen-designer/vinytage-of-style.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                            Vintage <br />
                                            of Style
                                        </h2>
                                    </div>
                                </div>
                                <div className="d-flex flex-column  flex-sm-row">
                                    <div className="p-2">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735218617/arcmen/island-kitchen-designer/curved-design-profile.png" alt="" loading="lazy" className="img-fluid" />
                                    </div>
                                    <div className="align-self-center">
                                        <h2>
                                            Seamless Carved Design <br />
                                            Profile
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
                        <Col sm={12} md={4} lg={4} className="retromodular-card">
                            <div className="card">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735208829/arcmen/island-kitchen-designer/ten-year-warrenty.png" alt="" loading="lazy" className="img-fluid" />
                                </div>
                                <div className="">
                                    <h2>15 Year Limited Warranty</h2>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className="retromodular-card">
                            <div className="card">
                                <div className="">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209009/arcmen/island-kitchen-designer/custom-threed-preview.png" alt="" loading="lazy" className="img-fluid" />
                                </div>
                                <div className="">
                                    <h2>Custom 3D Preview</h2>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={4} lg={4} className="retromodular-card">
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
                        <Col sm={12} md={12} lg={4} className="retromodular-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1 text-center">FINISH</div>
                                <div className="box-2 flex-fill">Shine, Matte, Metallic</div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={4} className="retromodular-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1  text-center">TEXTURE</div>
                                <div className="box-2 flex-fill">Wooden</div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={4} className="retromodular-textcard">
                            <div className="d-flex flex-column flex-sm-row ">
                                <div className="box-1  text-center">SHAPE</div>
                                <div className="box-2 flex-fill">Square | Arch | Carving</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209159/arcmen/island-kitchen-designer/Arcmen-New-Office-Island-kitchen.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">Arcmen New Office Island kitchen</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209272/arcmen/island-kitchen-designer/Arcmen-New-Ofice-Island-Kitchen.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">Arcmen New Office Island kitchen</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209326/arcmen/island-kitchen-designer/KAI-001-Island.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">KAI 001 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209372/arcmen/island-kitchen-designer/KEI-004-Island.jpg" />
                                    <div className="contentEdit">
                                        <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209432/arcmen/island-kitchen-designer/KAI-004-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209525/arcmen/island-kitchen-designer/KEI-003-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209611/arcmen/island-kitchen-designer/KEI-005-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
                            <div className="wrapper">
                                <div className="imageEdit">
                                    <img className="imageIMG img-fluid" loading="lazy" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735209675/arcmen/island-kitchen-designer/KEI-001-Island.jpg" />
                                    <div className="contentEdit">
                                         <h3 className="h1ImageTitle">KEI 004 Island</h3>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4} className="retromodular-image">
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
