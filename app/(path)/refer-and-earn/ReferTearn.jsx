import React from 'react'
import './ReferTearn.css'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { FaCheckCircle } from "react-icons/fa";
import Timeline from './Timeline.jsx'

function ReferTearn() {
    return (
        <div>
            <section className='refer-earn'>
                <Container>
                    <Row>
                        <Col className='text-center'>
                            <h1>Refer And Earn</h1>
                            <p><Link href='/'>Home</Link> /  Refer and Earn</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='refer-earn-content'>
                    <Row className='rae-image'>
                        <Col className='text-start text-md-center'>
                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735796014/arcmen/refer-and-earn/diamond.png" alt="diamond" loading='lazy' className='' />
                        </Col>
                        <Col className='text-end text-md-center'>
                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735796014/arcmen/refer-and-earn/diamond.png" alt="diamond" loading='lazy' />
                        </Col>
                        <Col sm={12} className='text-center'><h2>Refer and Earn</h2></Col>
                    </Row>
                    <Row className='rae-content'>
                        <Col sm={12} md={6}>
                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735288819/arcmen/refer-and-earn/refer-and-earn.jpg" alt="refer-and-earn" loading='lazy' className='img-fluid' />
                        </Col>
                        <Col sm={12} md={6} className='align-self-center'>
                            <h2>Refer Us To Your Friends</h2>
                            <p>Worth <span>Rs.15 lakhs</span> And Crack The Referral Bonus Worth Up To₹ 30,000</p>
                            <Link href='contact-us'>
                            <button>GET IN TOUCH</button>
                            </Link>
                            <h2>Inspired By Us? Now Refer Us!</h2>
                            <p>Unlock a cascade of Referral Bonus with each referral to Arcmen Interior Designer! Your network, is your key to unlocking greater benefits. Don’t wait any longer-start referring your friends today and get exciting rewards and enjoy!</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container className='refer-earn-bonus'>
                    <Row className='text-center'>
                        <Col sm={12} className=''>
                            <h3>Bonus Details</h3>
                            <h4>Refer Multiple Friends Get More Rewards!</h4>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={12} md={4} className='refer-earn-bonus-content'>
                            <div className="image-container mb-3">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735288981/arcmen/refer-and-earn/Yelagiri.jpg" alt="Yelagiri Trip" />

                                <div className="text">Yelagiri Trip</div>
                            </div>
                        </Col>

                        <Col sm={12} md={4} className='refer-earn-bonus-content'>
                            <div className="image-container mb-3">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735289034/arcmen/refer-and-earn/jewllery.jpg" alt="Yelagiri Trip" />

                                <div className="text">Jewellery To Gift Your Loved Ones</div>
                            </div>
                        </Col>

                        <Col sm={12} md={4} className='refer-earn-bonus-content'>
                            <div className="image-container mb-3">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735289087/arcmen/refer-and-earn/Home-decor.jpg" alt="Yelagiri Trip" />

                                <div className="text">Choose What You Love</div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <Timeline />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className='refer-About-content'>
                        <Col sm={12} md={6} className='align-self-center'>
                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735802516/arcmen/refer-and-earn/referral-bonus.jpg" alt="referral-bonus" loading='lazy' className='img-fluid' />
                        </Col>
                        <Col sm={12} md={6}>
                            <h6>Must Know About This Referral Bonus</h6>
                            <div className='d-flex'>
                                <div><FaCheckCircle className='refer-earn-bonus-icon' /></div>
                                <div><p>This Referral Bonus applies only to qualified customers (who pay 50% of the booking amount)</p></div>
                            </div>
                            <div className='d-flex'>
                                <div><FaCheckCircle className='refer-earn-bonus-icon' /></div>
                                <div><p>The Referral Bonus mentioned is indicative in nature and can only be redeemed as per availability</p></div>
                            </div>
                            <div className='d-flex'>
                                <div><FaCheckCircle className='refer-earn-bonus-icon' /></div>
                                <div><p>Customers already existing in the Arcmen interior Design system will be considered for the program</p></div>
                            </div>
                            <div className='d-flex'>
                                <div><FaCheckCircle className='refer-earn-bonus-icon' /></div>
                                <div><p>Calculated Value of the project by Arcmen Terms</p></div>
                            </div>
                            <div className='d-flex'>
                                <div><FaCheckCircle className='refer-earn-bonus-icon' /></div>
                                <div><p>You can avail for any date to claim the trip offer. But once confirmed the trip no cancellation applicable</p></div>
                            </div>
                            <div className='d-flex'>
                                <div><FaCheckCircle className='refer-earn-bonus-icon' /></div>
                                <div><p>The offers compile under Arcmen's Terms & Policies</p></div>
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
    )
}

export default ReferTearn