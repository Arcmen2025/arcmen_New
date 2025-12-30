'useClinet';
import Link from 'next/link';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './about-page.css'
import AboutTab from './Abouttab';
import Aboutcard from './About-card';
import Clientslider from './clientslider';

function Aboutpage() {
    return (
        <div>
            <section className='about-banner'>
                <Container>
                    <Row>
                        <Col className='text-center '>
                            <h1>About Us</h1>
                            <p><Link style={{color:"white"}} href='/'>Home</Link> / About Us</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='about-content'>
                        <Col sm={12} md={6} lg={6}>
                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734587299/arcmen/about/Balaraman-Portraint.jpg" alt="https://res.cloudinary.com/dpflidsbg/image/upload/v1734587299/arcmen/about/Balaraman-Portraint.jpg" loading='lazy' className='img-fluid' />
                        </Col>
                        <Col sm={12} md={6} lg={6} className='align-self-center pt-3'>
                            <p>We started from a small interior decorator in 1995, We are a Chennai-based 2nd generation Business Doing here, Arcmen has accelerated into 2013 to become the largest independently owned architect, interior designer and execution team in Chennai.</p>
                            <p>We are the expert team of architects & Interior designers in Chennai region, because our design and execution of fine works made us the best Interior Decorator in Chennai for 27 years. We have handled turnkey Projects of construction including Interior decoration for more than 5 Years.</p>
                            <p>Our Chief design & Project Mr. Balaraman Bakthavatchalam, worked As one of some prestigious projects in UAE, The Oceanic Tower Palm Jumeirah and Burj Khalifa He is the Man behind everything at Arcmen.</p>
                            <p>A young First-generation Entrepreneur with engineering knowledge, Mr. Balaraman is a well-known and leading architecture and interior designer in Chennai for the last 10 years of residential interior design and architectural services in Chennai & Entire Tamilnadu, India. His 22 years work experience in Abroad & India, His Creative & Updated design and material Knowledge giving to Rapid growth of Arcmen.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="about-tab">
                        <Col>
                            <AboutTab />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <section>
                <Container>
                    <Row>
                        <Col>
                            
                        </Col>
                    </Row>
                </Container>
            </section> */}
           
           <Aboutcard />
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Clientslider />
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
    )
}

export default Aboutpage;