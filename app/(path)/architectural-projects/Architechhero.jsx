// import Link from 'next/link';
// import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';

// const Architechhero = () => {
//     return (
//         <>
//             <section className="architech-banner">
//                 <Container>
//                     <Row>
//                         <Col lg={7} xs={12} md={12}>
//                             <div className="">
//                                 <h1>Architectural Design Projects</h1>
//                             </div>
//                         </Col>
//                         <Col lg={5} xs={12} md={12}></Col>
//                     </Row>
//                 </Container>
//             </section>
//             <section className="pt-5">
//                 <Container>
//                     <Row>
//                         <Col sm={12} className="text-center work-iamge">
//                             <h4 style={{ fontWeight: '700' }}>Our Works Architectural Designer in Chennai</h4>
//                             <p>View Completed Projects</p>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205202/arcmen/Architectural/joseph-sibi.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                     <Link href="architectural-projects/elevation-design-architectural">Mr. Joseph Sibi</Link>
//                                     <p>Thirumullaivoil, Chennai</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205322/arcmen/Architectural/neelkandan.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                     <Link href="architectural-projects/interior-design-architectural/">Dr.Neelkandan</Link>
//                                     <p>Peravurani, Thanjavur</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205402/arcmen/Architectural/maddena.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
//                                 <div className="overlay">
//                                     <Link href="architectural-projects/interior-design-valasaravakkam-architectural/">Maddena</Link>
//                                     <p>Valasaravakkam, Chennai</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205477/arcmen/Architectural/muralidharan.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                     {' '}
//                                     <Link href="architectural-projects/living-room-double-height-interior-design-architectural/">Mr.Muralidharan</Link>
//                                     <p>Mayiladuthurai</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205604/arcmen/Architectural/shaul.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/duplex-house-elevation-design-architectural/">Mr.Shaul</Link>
//                                     <p>Peravurani, Thanjavur</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205673/arcmen/Architectural/ilayas.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/duplux-house-elevation-design-peravurani-architectural/">IlayasMr.ilayas</Link>
//                                     <p>Kumbakonam</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205772/arcmen/Architectural/rajendera-kumar.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/pool-terrace-design-architectural/">Mr.Rajendera Kumar</Link>
//                                     <p>Besant Nagar, Chennai</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205855/arcmen/Architectural/jean-interior.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/bedroom-interior-design-architectural/">MS.Jean interior</Link>
//                                     {/* <p>Parrys, Chennai</p> */}
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276731/arcmen/Gallery/architectural-projects/suresh.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/duplex-house-elevation-design-nolambur-architectural/">Mr.Suresh</Link>
//                                     <p>Nolambur, Chennai</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276771/arcmen/Gallery/architectural-projects/mahaveer.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/duplex-villa-elevation-design-architectural/">Mr.Mahaveer</Link>
//                                     {/* <p>Parrys, Chennai</p> */}
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276819/arcmen/Gallery/architectural-projects/house-of-glass.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/house-of-glass-front-elevation-design-architectural/">House of Glass</Link>
//                                     {/* <p>Parrys, Chennai</p> */}
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276894/arcmen/Gallery/architectural-projects/balu.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/villa-landscape-design-architectural/">Mr.Balu</Link>
//                                     <p>Peravurani, Thanjavur</p>
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276944/arcmen/Gallery/architectural-projects/row-house.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/row-house-architectural/">Row house</Link>
//                                     {/* <p>Parrys, Chennai</p> */}
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735277001/arcmen/Gallery/architectural-projects/sadik.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/villa-elevation-design-sadik-architectural/">Mr.Sadik</Link>
//                                     {/* <p>Parrys, Chennai</p> */}
//                                 </div>
//                             </div>
//                         </Col>

//                         <Col sm={12} md={6} lg={4}>
//                             <div className="project-card">
//                                 <img
//                                     src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735277074/arcmen/Gallery/architectural-projects/ayyampettai.jpg"
//                                     alt="narayana-rao-individual-house interior designing company"
//                                     loading="lazy"
//                                     className="image img-fluid"
//                                 ></img>
//                                 <div className="overlay">
//                                 <Link href="architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural/">Ayyampettai</Link>
//                                     <p>Thanjavur</p>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col lg={12}>
//                             <div className="text-center mt-3">
//                                 <div id="overlay-btn" className="color-overlay-button" style={{ textAlign: 'center' }}>
//                                     <a href="/how-we-process-works/" className="color-overlay-links ">
//                                         <span className="ue-color-overlay"></span>
//                                         <span className="ue-btn-txt">VIEW MORE DETAILS</span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//             <section className="Build-Décor">
//                 <Container>
//                     <Row>
//                         <Col sm={12} md={6} lg={8} className="align-self-center">
//                             <h5>Design & Decor Your Home Interior Easy With Us</h5>
//                             <p>Call Today for a Free Estimate !</p>
//                         </Col>
//                         <Col sm={12} md={6} lg={4} className="align-self-center">
//                             <div id="" className="color-overlay-button">
//                                 <Link href="contact-us/" className="color-overlay-link">
//                                     <span className="ue-color-overlay"></span>
//                                     <span className="ue-btn-txt">GET A FREE QUOTES</span>
//                                 </Link>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </>
//     );
// };

// export default Architechhero;


// ========================================================================================================
// ========================================================================================================
// ========================================================================================================
// ========================================================================================================
// ========================================================================================================
// ========================================================================================================
// ========================================================================================================
// ========================================================================================================


import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Architechhero = () => {
    return (
        <>
            <section className="architech-banner">
                <Container>
                    <Row>
                        <Col lg={7} xs={12} md={12}>
                            <div className="">
                                <h1>Architectural Design Projects</h1>
                            </div>
                        </Col>
                        <Col lg={5} xs={12} md={12}></Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-5">
                <Container>
                    <Row>
                        <Col sm={12} className="text-center work-iamge">
                            <h4 style={{ fontWeight: '700' }}>Our Works Architectural Designer in Chennai</h4>
                            <p>View Completed Projects</p>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205202/arcmen/Architectural/joseph-sibi.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                    <Link href="elevation-design-architectural">Mr. Joseph Sibi</Link>
                                    <p>Thirumullaivoil, Chennai</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205322/arcmen/Architectural/neelkandan.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                    <Link href="interior-design-architectural/">Dr.Neelkandan</Link>
                                    <p>Peravurani, Thanjavur</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205402/arcmen/Architectural/maddena.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
                                <div className="overlay">
                                    <Link href="interior-design-valasaravakkam-architectural/">Maddena</Link>
                                    <p>Valasaravakkam, Chennai</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205477/arcmen/Architectural/muralidharan.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                    {' '}
                                    <Link href="living-room-double-height-interior-design-architectural/">Mr.Muralidharan</Link>
                                    <p>Mayiladuthurai</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205604/arcmen/Architectural/shaul.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
                                <div className="overlay">
                                <Link href="duplex-house-elevation-design-architectural/">Mr.Shaul</Link>
                                    <p>Peravurani, Thanjavur</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205673/arcmen/Architectural/ilayas.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
                                <div className="overlay">
                                <Link href="duplux-house-elevation-design-peravurani-architectural/">IlayasMr.ilayas</Link>
                                    <p>Kumbakonam</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205772/arcmen/Architectural/rajendera-kumar.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="pool-terrace-design-architectural/">Mr.Rajendera Kumar</Link>
                                    <p>Besant Nagar, Chennai</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205855/arcmen/Architectural/jean-interior.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="bedroom-interior-design-architectural/">MS.Jean interior</Link>
                                    {/* <p>Parrys, Chennai</p> */}
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276731/arcmen/Gallery/architectural-projects/suresh.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="duplex-house-elevation-design-nolambur-architectural/">Mr.Suresh</Link>
                                    <p>Nolambur, Chennai</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276771/arcmen/Gallery/architectural-projects/mahaveer.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="duplex-villa-elevation-design-architectural/">Mr.Mahaveer</Link>
                                    {/* <p>Parrys, Chennai</p> */}
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276819/arcmen/Gallery/architectural-projects/house-of-glass.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="house-of-glass-front-elevation-design-architectural/">House of Glass</Link>
                                    {/* <p>Parrys, Chennai</p> */}
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276894/arcmen/Gallery/architectural-projects/balu.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="villa-landscape-design-architectural/">Mr.Balu</Link>
                                    <p>Peravurani, Thanjavur</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735276944/arcmen/Gallery/architectural-projects/row-house.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="row-house-architectural/">Row house</Link>
                                    {/* <p>Parrys, Chennai</p> */}
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735277001/arcmen/Gallery/architectural-projects/sadik.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="villa-elevation-design-sadik-architectural/">Mr.Sadik</Link>
                                    {/* <p>Parrys, Chennai</p> */}
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img
                                    src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735277074/arcmen/Gallery/architectural-projects/ayyampettai.jpg"
                                    alt="narayana-rao-individual-house interior designing company"
                                    loading="lazy"
                                    className="image img-fluid"
                                ></img>
                                <div className="overlay">
                                <Link href="duplex-house-elevation-design-front-ayyampettai-architectural/">Ayyampettai</Link>
                                    <p>Thanjavur</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center mt-3">
                                <div id="overlay-btn" className="color-overlay-button" style={{ textAlign: 'center' }}>
                                    <a href="/how-we-process-works/" className="color-overlay-links ">
                                        <span className="ue-color-overlay"></span>
                                        <span className="ue-btn-txt">VIEW MORE DETAILS</span>
                                    </a>
                                </div>
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

export default Architechhero;
