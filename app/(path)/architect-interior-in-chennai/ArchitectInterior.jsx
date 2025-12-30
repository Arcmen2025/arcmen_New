import React from 'react';
import './ArchitectInterior.css';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

function Architectinterior() {
    return (
        <div>
            <section>
                <Container fluid className="architect-interior-banner align-content-center">
                    <Row>
                        <Col className="text-center">
                            <h1>ONE STOP TO</h1>
                            <h1 className="mb-5">CONSTRUCT YOUR HOME</h1>
                            <p >For Marking, Structural, Interior Decoration then step-in</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="Architecturalservices">
                        <Col className="text-center work-iamge" sm={12}>
                            <h4>How it works our Architectural Services</h4>
                        </Col>
                        {/* card */}

                        <Col sm={12} md={6} lg={4} className="a-services">
                            <div className="card text-center" >
                                <div className="card-image mb-4">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735204451/arcmen/Architectural/master-planning.png" alt="master-planning" loading="lazy" className="img-fluid" />
                                    <div className="card-b">
                                        <h3 className='m-2'>MASTER PLANNING</h3>
                                        <p>When designing the rooms of a house, Arcmen find the right ideas to create a perfect space, incorporating the perfect colours, materials and design.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="a-services">
                            <div className="card text-center">
                                <div className="card-image">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735204679/arcmen/Architectural/interior-design.png" alt="interior-design" loading="lazy" className="img-fluid" />
                                    <div className="card-b">
                                        <h3>INTERIOR DESIGN</h3>
                                        <p>We prepare engineering drawings like structural, electrical and plumbing. Information gathers from Project place to shape the development of buildings with creativity</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="a-services">
                            <div className="card text-center">
                                <div className="card-image">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735204764/arcmen/Architectural/3d-visualization.png" alt="3d-visualization" loading="lazy" className="img-fluid" />
                                    <div className="card-b">
                                        <h3>3D VISUALIZATION</h3>
                                        <p>Offer 3D Rendering services for interior & exterior of buildings, eye catching 3d model or walk through animations that helps your clients to realize how good their dream project coming future</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="a-services">
                            <div className="card text-center">
                                <div className="card-image">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735204834/arcmen/Architectural/landscaping.png" alt="landscaping" loading="lazy" className="img-fluid" />
                                    <div className="card-b">
                                        <h3>LANDSCAPING</h3>
                                        <p>Even we doing plan to plantation for lush greenery in building, because especially for the mind, body and perceive a different kind of inner peace.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="a-services">
                            <div className="card text-center">
                                <div className="card-image">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735204923/arcmen/Architectural/project-management.png" alt="project-management" loading="lazy" className="img-fluid" />
                                    <div className="card-b">
                                        <h3>PROJECT MANAGEMENT</h3>
                                        <p>Preparation of bill of quantities and costing, Preparation of project schedule, Involve Site Coordination with Consultants as stage wise.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="a-services">
                            <div className="card text-center">
                                <div className="card-image">
                                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205090/arcmen/Architectural/turnkey-projects.png" alt="turnkey-projects" loading="lazy" className="img-fluid" />
                                    <div className="card-b">
                                        <h3>TURNKEY PROJECTS</h3>
                                        <p>Whether construction or interiors done by our group firm Kudil Construction & Arcmen Interior, so your involvement in the process will be almost zero</p>
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
                        <Col sm={12} className="text-center work-iamge">
                            <h4>Our Works Architectural Designer in Chennai</h4>
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
                                    <Link href="/elevation-design-architectural">Mr. Joseph Sibi</Link>
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
                                    <Link href="architectural-projects/interior-design-architectural/">Dr.Neelkandan</Link>
                                    <p>Peravurani, Thanjavur</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205402/arcmen/Architectural/maddena.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
                                <div className="overlay">
                                    <Link href="architectural-projects/interior-design-valasaravakkam-architectural/">Maddena</Link>
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
                                    <Link href="architectural-projects/living-room-double-height-interior-design-architectural/">Mr.Muralidharan</Link>
                                    <p>Mayiladuthurai</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205604/arcmen/Architectural/shaul.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
                                <div className="overlay">
                                    <Link href="architectural-projects/duplex-house-elevation-design-architectural/">Mr.Shaul</Link>
                                    <p>Peravurani, Thanjavur</p>
                                </div>
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <div className="project-card">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735205673/arcmen/Architectural/ilayas.jpg" alt="narayana-rao-individual-house interior designing company" loading="lazy" className="image img-fluid"></img>
                                <div className="overlay">
                                    <Link href="architectural-projects/duplux-house-elevation-design-peravurani-architectural/">IlayasMr.ilayas</Link>
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
                                    <Link href="architectural-projects/pool-terrace-design-architectural/">Mr.Rajendera Kumar</Link>
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
                                    <Link href="architectural-projects/bedroom-interior-design-architectural/">MS.Jean interior</Link>
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
                                    <Link href="architectural-projects/duplex-house-elevation-design-nolambur-architectural/">Mr.Suresh</Link>
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
                                    <Link href="architectural-projects/duplex-villa-elevation-design-architectural/">Mr.Mahaveer</Link>
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
                                    <Link href="architectural-projects/house-of-glass-front-elevation-design-architectural/">House of Glass</Link>
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
                                    <Link href="architectural-projects/villa-landscape-design-architectural/">Mr.Balu</Link>
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
                                    <Link href="architectural-projects/row-house-architectural/">Row house</Link>
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
                                    <Link href="architectural-projects/villa-elevation-design-sadik-architectural/">Mr.Sadik</Link>
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
                                    <Link href="architectural-projects/duplex-house-elevation-design-front-ayyampettai-architectural/">Ayyampettai</Link>
                                    <p>Thanjavur</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center mt-3">
                                <div id="overlay-btn" className="color-overlay-button" style={{ textAlign: 'center' }}>
                                    <a href="/architectural-projects/" className="color-overlay-links ">
                                        <span className="ue-color-overlay"></span>
                                        <span className="ue-btn-txt">VIEW MORE DETAILS</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section className="fee-structure">
                <Container>
                    <Row>
                        <Col>
                            <h6 className="text-center">FEE STRUCTURE AND BREAK UP</h6>
                            <p>
                                We quote on the basis of the area to be developed; as per Council of Architecture regulations, we should be quoting as percentage of the project cost. Project cost varies during the course of the project. We prefer
                                quoting on area basis so that we are absolutely clear on the fee which remains constant irrespective of the project cost Our charges are never same for every client. It is customized based on their requirement and
                                design complexity. We split the projects into significant milestones and collect a stage-wise payment on completion of every milestone
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section> */}
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
        </div>
    );
}

export default Architectinterior;
