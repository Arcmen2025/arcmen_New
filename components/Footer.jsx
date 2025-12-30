import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/footer.css';
import Link from 'next/link';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <section className="ar-man">
                <Container className="arc-man-footer">
                    <Row className="footer-main justify-content-between mb-5">
                        <Col sm={12} md={6} lg={4}>
                            <h5>About</h5>
                            <p>From the humble beginnings of a small interior decor contractor in 1995, Arcmen has accelerated into the 2013 to become the largest independently owned Architects, interior designer and execution team in Chennai.</p>
                            <div className="d-flex gap-3 mb-3">
                                <div>
                                    <Link href="https://maps.app.goo.gl/NaRqbJyEBCYSS4zQ6" target="_blank">
                                        <FaLocationDot style={{ color: 'blue', width: '25px', height: '25px' }} />
                                    </Link>{' '}
                                </div>
                                <div>
                                    <Link href="https://www.facebook.com/arcmeninteriordesign/" alt="facebook">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189618/arcmen/Icons/facebook.png" loading="lazy" alt="facebook" className="img-fluid" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://www.instagram.com/arcmeninteriordesigner/" alt="instagram">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189754/arcmen/Icons/instagram.png" alt="instagram" className="img-fluid" loading="lazy" />
                                    </Link>
                                </div>
                                {/* <div>
                                    <Link href="https://www.youtube.com/channel/UCRD1RPuq6W64Z4TGoVDIByw" alt="youtube">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189796/arcmen/Icons/youtube.png" alt="youtube" className="img-fluid" loading="lazy" />
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://in.pinterest.com/arcmeninteriordesign/" alt="pinterest">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189675/arcmen/Icons/pinterest.png" loading="lazy" alt="pinterest" className="img-fluid" />
                                    </Link>
                                </div> */}
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <h5>Contact Us</h5>
                            <div className="">
                                <div>
                                    <p className="mb-0">
                                        <strong>Call us:</strong> +91 99629 98008 / 03 / 01
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-0">
                                        <strong>Email:</strong> contact@arcmeninterior.com
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-0">
                                        <strong>Address:</strong> No.5, Ramakrishna Main Road, Opp. to villakku kadai, Nethaji Nagar, Porur, Chennai – 600116.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="footer-copy mt-5">
                    <Row className="">
                        <Col className="text-center pb-3 pt-3">
                            <p className="mb-1">Copyright © 2024 Arcmen kitchens and interiors. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Footer;
