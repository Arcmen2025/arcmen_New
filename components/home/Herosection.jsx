'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Quickservice from './Quickservice';
import Modal from 'react-bootstrap/Modal';
import { interiorDesignEnquiryFormAPI, quickServiceRequestFormAPI } from '@/api/ArcmenFormAPI';
import Swal from 'sweetalert2';
import { getAllAdsByStatus } from '@/api/AdsPostingAPI';
import ReCAPTCHA from 'react-google-recaptcha';
const Herosection = () => {
    const [show, setShow] = useState(false);
    const [posterImage, setPosterImage] = useState('https://res.cloudinary.com/dpflidsbg/image/upload/v1739421470/Interior_Architecture_Studio_nq3oib.png');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        location: '',
        serviceName: ''
    });

    const [recaptcha, setRecaptcha] = useState(null);
    const recaptchaRef = useRef(null);
    const [errors, setErrors] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const validate = () => {
        let tempErrors = {};
        let isValid = true;
        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email address is invalid';
            isValid = false;
        }

        // Mobile number validation
        if (!formData.mobile) {
            tempErrors.mobile = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            tempErrors.mobile = 'Mobile number must be exactly 10 digits';
            isValid = false;
        }

        // Service name validation
        if (!formData.serviceName) {
            tempErrors.serviceName = 'Service name is required';
            isValid = false;
        }
        if (!recaptcha) {
            tempErrors.recaptcha = 'Please complete the reCAPTCHA';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllAdsByStatus();
                if (result?.data) {
                    // console.log(result, '===========>');
                    if (result.data.posters.length > 0 && result.data.posters[0].posterImage && result.data.posters[0].status === 1) {
                        setPosterImage(result?.data?.posters[0]?.posterImage);
                    }
                }
            } catch (e) {
                console.log(e);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops.',
                    text: 'Something error while fetching the blogs.',
                    timer: 3000
                });
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await quickServiceRequestFormAPI(formData);
                if (response.data) {
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        timer: 3000,
                        text: 'Your request has been submitted successfully. Our team will get in touch with you soon.'
                    });
                    handleClose(); // Close the modal on successful submission
                    setRecaptcha(null); // Reset reCAPTCHA value
                    recaptchaRef.current.reset(); // Reset reCAPTCHA widget

                    setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        location: '',
                        serviceName: ''
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleRecaptchaChange = (value) => {
        setRecaptcha(value);
        if (value) {
            setErrors((prevErrors) => ({ ...prevErrors, recaptcha: null }));
        }
    };

    return (
        <div>
            <section style={{ marginTop: '80px' }}>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="p-0 hero-banner">
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734327549/arcmen/qmzzdyddtrshcqtlostn.webp" // Replace with your image URL
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        {/* <h3> HOME INTERIOR DESIGNER IN CHENNAI</h3> */}
                                        <h3> COMPLETE HOME INTERIOR DÉCOR AND FURNISHING</h3>
                                        <h3></h3>
                                        {/* <p>We are Professional Residential Turnkey Interior Designer & Decorator in Chennai</p> */}
                                        <p> Home interior designer in chennai</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734327525/arcmen/ust82yy1rpffjhzmzvk9.webp" // Replace with your image URL
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>MEET OUR KITCHEN</h3>
                                        <h3>DESIGNER THEY WILL INSPIRE YOU</h3>
                                        <p>Manufacture of Indian & International Stylish Modular Kitchen Designs</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734327533/arcmen/zif4ysvwdaybieducjvd.webp" // Replace with your image URL
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>WE ARE LEADING</h3>
                                        <h3>ARCHITECTS IN CHENNAI</h3>
                                        <p>Specializing in Villas, Residences, Landscape and Constructions</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Quickservice />
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Modal show={show} size="lg" onHide={handleClose} animation={false} className="popup-shw">
                                <Modal.Header closeButton style={{ borderBottom: '0px' }}>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="pe-0 pb-0 pl-1">
                                    <div className="popup-fminter">
                                        <div className="form-inter">
                                            <p>Fill out all required fields below and we will get back to you as soon as possible.</p>
                                            <form onSubmit={handleSubmit} className="con-form-page ">
                                                <Row>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <Form.Control type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name *" className="w-100 p-2 fs_12" required />
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <Form.Control type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-100 p-2 fs_12 " />
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <Form.Control type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile *" className="w-100 p-2 fs_12" required />
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <Form.Control type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Location *" className="w-100 p-2 fs_12" required />
                                                        </div>
                                                    </Col>

                                                    <Col xs={12}>
                                                        <div className="mb-4">
                                                            <Form.Select id="serviceName" name="serviceName" value={formData.serviceName} onChange={handleChange} className="w-100 p-2 fs_12" required>
                                                                <option value="">Services</option>
                                                                <option value="Full home interior decor">Full home interior decor</option>
                                                                <option value="Modular Kitchen">Modular Kitchen</option>
                                                                <option value="Interior Design">Renovation </option>
                                                                <option value="Architectural Services">Architectural Services</option>
                                                                <option value="Turnkey Construction">Turnkey Construction</option>
                                                            </Form.Select>
                                                            {errors.serviceName && (
                                                                <p className="error" style={{ color: 'red' }}>
                                                                    {errors.serviceName}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <div className="mb-2 ">
                                                            <div className="mb-4">
                                                                <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
                                                                {errors.recaptcha && <span className="text-danger">{errors.recaptcha}</span>}
                                                            </div>{' '}
                                                            <button type="submit" className="sumbit-btn">
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                        <div className="popup-img" style={{ borderRadius: '0px 10px 10px 0px' }}>
                                            {/* <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1739421470/Interior_Architecture_Studio_nq3oib.png" alt="Offer"></img> */}
                                            <img src={posterImage} style={{ borderRadius: '0px 10px 10px 0px' }} alt="Offer"></img>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Herosection;
