import React from 'react';
import './about-page.css';
import { Col, Container, Row } from 'react-bootstrap';

function Aboutcard() {
    return (
        <div>
            <section>
            <div className="box-container">
                <Row className="justify-content-center"> 
                    <Col sm={12} md={6} lg={4} className='box-item'>
                        <div className="box-item">
                            <div className="flip-box">
                                <div className="flip-box-front text-center" style={{ backgroundColor: "#4dbc15" }}>
                                    <div className="inner color-white">
                                        <div>
                                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734946407/arcmen/about/design.png" alt="" loading='lazy' className='img-fluid' />
                                        </div>
                                        <h3 className="flip-box-header">We have Experts for Interior Designer</h3>
                                        <p>Modern & Variety design types,Creative concepts and Space planning, everything is kept in mind</p>
                                    </div>
                                </div>
                                <div className="flip-box-back text-center" >
                                    <div className="inner color-white">
                                        <div>
                                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734946407/arcmen/about/design.png" alt="" loading='lazy' className='img-fluid' />
                                        </div>
                                        <h3 className="flip-box-header">We have Experts for Interior Designer</h3>
                                        <p>Modern & Variety design types,Creative concepts and Space planning, everything is kept in mind</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={4} className='box-item'>
                        <div className="box-item">
                            <div className="flip-box">
                                <div className="flip-box-front text-center" style={{ backgroundColor: "#4dbc15" }}>
                                    <div className="inner color-white">
                                        <div>
                                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734946358/arcmen/about/dwonload.png" alt="" loading='lazy' className='img-fluid' />
                                        </div>
                                        <h3 className="flip-box-header">We Have Experts for Architecture & Construction</h3>
                                        <p>Well experienced Architect & Construction Team for coordinate the Projects with Architect</p>
                                    </div>
                                </div>
                                <div className="flip-box-back text-center" >
                                    <div className="inner color-white">
                                        <div>
                                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734946358/arcmen/about/dwonload.png" alt="" loading='lazy' className='img-fluid' />
                                        </div>
                                        <h3 className="flip-box-header">We Have Experts for Architecture & Construction</h3>
                                        <p>Well experienced Architect & Construction Team for coordinate the Projects with Architect</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} md={6} lg={4} className='box-item'>
                        <div className="box-item">
                            <div className="flip-box">
                                <div className="flip-box-front text-center" style={{ backgroundColor: "#4dbc15" }}>
                                    <div className="inner color-white">
                                        <div>
                                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734946326/arcmen/about/team.png" alt="" loading='lazy' className='img-fluid' />
                                        </div>
                                        <h3 className="flip-box-header">We Have Experts for Execution Team</h3>
                                        <p>Modern & Variety design types,Creative concepts and Space planning, everything is kept in mind</p>
                                    </div>
                                </div>
                                <div className="flip-box-back text-center" >
                                    <div className="inner color-white">
                                        <div>
                                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734946326/arcmen/about/team.png" alt="" loading='lazy' className='img-fluid' />
                                        </div>
                                        <h3 className="flip-box-header">We Have Experts for Execution Team</h3>
                                        <p>Follow the projects as per Design & Complete the Project As per schedule date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>



            </div>
            </section>
        </div>
    );
}

export default Aboutcard;