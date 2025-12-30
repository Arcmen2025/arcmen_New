'use client';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import ReCAPTCHA from 'react-google-recaptcha';
import { FaCheck } from 'react-icons/fa';
import ModularKitchenChennai from './ModularKitchenChennai';
import ModularContact from './ModularContact';
import Clientslider from './Clientslider';
import Carousel from 'react-bootstrap/Carousel';
import { modularKitchenEnquiryFormsAPI } from '@/api/ArcmenFormAPI';
import Swal from 'sweetalert2';
import { getAllAds, getAllAdsByStatus } from '@/api/AdsPostingAPI';

const ModularHero = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectLocation: '',
        budget: '',
        message: '',
        agreeTerms: true
    });
    const [posterImage, setPosterImage] = useState('https://res.cloudinary.com/dpflidsbg/image/upload/v1739421470/Interior_Architecture_Studio_nq3oib.png');
    const [show, setShow] = useState(false);
    const [recaptcha, setRecaptcha] = useState(null);
    const recaptchaRef = useRef(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name) {
            tempErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email) {
            tempErrors.email = 'Email is required';
            isValid = false;
        }
        if (!formData.phone) {
            tempErrors.phone = 'Phone number is required';
            isValid = false;
        }
        if (!formData.projectLocation) {
            tempErrors.projectLocation = 'Project location is required';
            isValid = false;
        }
        if (!formData.budget) {
            tempErrors.budget = 'Please select a budget';
            isValid = false;
        }
        if (!recaptcha) {
            tempErrors.recaptcha = 'Please complete the reCAPTCHA';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getAllAdsByStatus();
                if (result.data) {
                    if (result.data.posters.length > 0 && result.data.posters[0].posterImage && result.data.posters[0].status === 1) {
                        setPosterImage(result?.data?.posters[0]?.posterImage);
                    }
                }
            } catch (e) {
                console.log(e);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops.',
                    text: 'Something went wrong while fetching the blogs.',
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
                const response = await modularKitchenEnquiryFormsAPI(formData);
                if (response.data) {
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        timer: 3000,
                        text: 'Your request has been submitted successfully. Our team will get in touch with you soon.'
                    });

                    setShow(false);
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectLocation: '',
                        budget: '',
                        message: '',
                        agreeTerms: false
                    });

                    setRecaptcha(null);
                    recaptchaRef.current.reset();
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleClose = () => setShow(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleRecaptchaChange = (value) => {
        setRecaptcha(value);
        if (value) {
            setErrors((prevErrors) => ({ ...prevErrors, recaptcha: null }));
        }
    };

    return (
        <>
            <section>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="p-0 hero-banner">
                            <Carousel fade className="modular-carousal">
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740397907/modular-kitchen-banner_kbj17s.jpg" alt="First slide" />
                                    <Carousel.Caption>
                                        <h3>Unleash the Chef in You with Our Modular Kitchens!</h3>
                                        <p>"Effortless Cooking, Timeless Style"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740398437/Modular-kitchen-banner3_hulcvn.jpg" alt="Second slide" />
                                    <Carousel.Caption>
                                        <h3>Transform Your Kitchen with Innovative Modular Designs</h3>
                                        <p>"Experience the Perfect Blend of Style and Functionality"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740398441/modular-Kitchen-banner2_nccepg.jpg" alt="Third slide" />
                                    <Carousel.Caption>
                                        <h3>Your Dream Kitchen, Crafted to Perfection!</h3>
                                        <p>"Innovative Designs, Elegant Spaces"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="customize-moduler">
                <Container>
                    <Row className="custmdlr">
                        <Col lg={3} md={3} sm={3} xs={6}>
                            <div className="moduler-status ">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735552670/arcmen/modular-kitchen-chennai/interior-design.png"></img>
                                <h3>45 Days* Complete Handover</h3>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={6}>
                            <div className="moduler-status md-ingst">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735552714/arcmen/modular-kitchen-chennai/badge.png"></img>
                                <h3>High Quality Materials</h3>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={6}>
                            <div className="moduler-status">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735552670/arcmen/modular-kitchen-chennai/interior-design.png"></img>
                                <h3>15 year Warranty *</h3>
                            </div>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={6}>
                            <div className="moduler-status">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735552797/arcmen/modular-kitchen-chennai/money.png"></img>
                                <h3>Affordable Pricing</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="who-we-aresec" style={{ background: '#F4F4F4' }}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735552871/arcmen/modular-kitchen-chennai/modular-kitchen-image.webp" className="w-100"></img>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="who-we-are">
                                <h3>Who we are</h3>
                                <h5>Since 1995</h5>
                                <p>We will make these unique tastes of your a design reality!</p>
                            </div>
                            <div className="who-imgs">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735552897/arcmen/modular-kitchen-chennai/ecoamaze.jpg"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="who-we-aresec" style={{ background: '#F4F4F4' }}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="modular-absl">
                                <Carousel fade>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735553027/arcmen/modular-kitchen-chennai/Island-kitchen-5.jpg" alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735553173/arcmen/modular-kitchen-chennai/ultra-g-rich.png" alt="Second slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735553127/arcmen/modular-kitchen-chennai/retro-modular-kitchen-5.jpg" alt="Third slide" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735553064/arcmen/modular-kitchen-chennai/ultra-g-rich-5.jpg" alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="what-wedo">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735812643/arcmen/modular-kitchen-chennai/model-kitchen-mastro.webp"></img>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="we-make-do">
                                <h3>What we do?</h3>
                                <p>We make your dreams come true, Your interior is in our hands, and all you have left is to enjoy!</p>
                                <li>
                                    <FaCheck />
                                    Best kitchen expert Chennai & Tamil nadu
                                </li>
                                <li>
                                    <FaCheck /> Expert of Luxury & German Kitchen making
                                </li>
                                <li>
                                    <FaCheck /> Providing realistic preview
                                </li>
                                <li>
                                    <FaCheck /> Installing Latest Accessories & Lighting
                                </li>
                                <li>
                                    <FaCheck /> Expert in quartz counter top finish
                                </li>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <ModularKitchenChennai />
            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="explore-architect">
                            <h3>Your Dream Kitchen, Our Expertise</h3>
                            <iframe
                                width="100%"
                                height="600px"
                                src="https://www.youtube.com/embed/UsBH_Ud5kjc?si=QX5NA_MOedCvNIW1"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="landing-contact">
                <Container>
                    <Row>
                        <div className="">
                            <h2>Contact Us</h2>
                            <h3>Have a projects ?</h3>
                            <p>Let’s make it outstanding.</p>
                            <p>Fill out this and the team will get back to you.</p>
                        </div>
                        <div className="">
                            <ModularContact />
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="pt-5 pb-5 test-landing">
                <Container>
                    <Row>
                        <Col lg={6} xs={12}>
                            <div className="test-img">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735554124/arcmen/modular-kitchen-chennai/commo.png"></img>
                                <h2 style={{ textAlign: 'left' }}>Client Testimonials</h2>
                                <p>“Thanks to the innovative design and impeccable craftsmanship, our kitchen is now the highlight of our home. It’s both beautiful and incredibly efficient.”</p>
                            </div>
                        </Col>
                        <Col lg={6} xs={12}>
                            <Clientslider />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Modal show={show} onHide={handleClose} animation={false} className="popup-shw">
                                <Modal.Header closeButton style={{ borderBottom: '0px' }}>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body  >
                                    <div className="popup-fminter">
                                        <div className="form-inter">
                                            <p>Fill out all required fields below and we will get back to you as soon as possible</p>
                                            <form onSubmit={handleSubmit} className="con-form-page">
                                                <Row>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-100 p-2" required />
                                                            {errors.name && <span className="text-danger">{errors.name}</span>}
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-100 p-2" />
                                                            {errors.email && <span className="text-danger">{errors.email}</span>}
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile Number" className="w-100 p-2" required />
                                                            {errors.phone && <span className="text-danger">{errors.phone}</span>}
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <input type="text" id="projectLocation" name="projectLocation" value={formData.projectLocation} onChange={handleChange} placeholder="Project Location" className="w-100 p-2" required />
                                                            {errors.projectLocation && <span className="text-danger">{errors.projectLocation}</span>}
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className="mb-2 ">
                                                            <div className="mb-4">
                                                                <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
                                                                {errors.recaptcha && <span className="text-danger">{errors.recaptcha}</span>}
                                                            </div>
                                                            <button type="submit" className="sumbit-btn">
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                        <div className="popup-img" style={{ borderRadius: '0px 10px 10px 0px' }}>
                                            <img src={posterImage} alt="Offer" style={{ borderRadius: '0px 10px 10px 0px' }}></img>
                                        </div>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ModularHero;
