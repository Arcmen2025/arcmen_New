'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ReCAPTCHA from 'react-google-recaptcha';
import Landingslider from './Landingslider';
import ContactForm from './Contact-form';
import Clientslider from './Clientslider';
import { contactUsFormAPI, interiorDesignEnquiryFormAPI } from '@/api/ArcmenFormAPI';
import Swal from 'sweetalert2';
import { getAllAds, getAllAdsByStatus } from '@/api/AdsPostingAPI';

const Interiorhero = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectLocation: '',
        interiorType: '',
        budget: '',
        agreeTerms: true
    });
    const [recaptcha, setRecaptcha] = useState(null);
    const recaptchaRef = useRef(null);
    const [errors, setErrors] = useState({});

    const [posterImage, setPosterImage] = useState('https://res.cloudinary.com/dpflidsbg/image/upload/v1739421470/Interior_Architecture_Studio_nq3oib.png');

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
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email address is invalid';
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

        if (!formData.interiorType) {
            tempErrors.interiorType = 'Interior type is required';
            isValid = false;
        }

        if (!formData.budget) {
            tempErrors.budget = 'Budget is required';
            isValid = false;
        }

        if (!recaptcha) {
            tempErrors.recaptcha = 'Please complete the reCAPTCHA';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await interiorDesignEnquiryFormAPI(formData);
                // console.log(response);
                if (response.data) {
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        timer: 3000,
                        text: 'Your request has been submitted successfully. Our team will get in touch with you soon.'
                    });
                    handleClose(); // Close the modal on successful submission
                    resetForm(); // Reset all form fields
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            projectLocation: '',
            interiorType: '',
            budget: '',
            agreeTerms: true
        });
        setRecaptcha(null); // Reset reCAPTCHA value
        recaptchaRef.current.reset(); // Reset reCAPTCHA widget
    };

    const handleRecaptchaChange = (value) => {
        setRecaptcha(value);
        if (value) {
            setErrors((prevErrors) => ({ ...prevErrors, recaptcha: null }));
        }
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
                    text: 'Something error while fetching the blogs.',
                    timer: 3000
                });
            }
        };
        fetchData();
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(true); // Show the modal on component mount
    }, []);

    return (
        <div>
            <section>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="p-0 hero-banner">
                            <Carousel fade>
                                <Carousel.Item>
                                    {/* <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735545384/arcmen/landing%20pages/interior%20design/interior-design-2.webp" alt="First slide" /> */}
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740396244/arcmen-interior-main-banner1_xucspf.jpg" alt="First slide" />
                                    <Carousel.Caption>
                                        <h3>Artistry in Every Corner, Beauty in</h3>
                                        <h3>Every Detail!</h3>
                                        <p>"Designs That Reflect Your Personality!"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    {/* <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735545372/arcmen/landing%20pages/interior%20design/interrior-design-3.webp" alt="Second slide" /> */}
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740396244/arcmen-Interior-main-banner2_mcmknt.jpg" alt="Second slide" />
                                    <Carousel.Caption>
                                        <h3>Creating Spaces That Tell Your Story!</h3>
                                        <p>"Your Space, Your Style, Our Expertise"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    {/* <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735545368/arcmen/landing%20pages/interior%20design/interior-design.webp" alt="Third slide" /> */}
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740396243/arcmen-interior-main-banner3_uqkxxh.jpg" alt="Third slide" />
                                    <Carousel.Caption>
                                        <h3>WE TAKE PRIDE IN BUILDING STYLISH AND </h3>
                                        <h3>FEATURED INTERIOR DESIGN.</h3>
                                        <p>"Designing Dreams, Crafting Reality"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h2>OUR BRAND</h2>
                            </div>
                            <div className="slider">
                                <div className="slide-track">
                                    <div className="slide">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331379/arcmen/kindom.webp" height="100%" width="100%" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331378/arcmen/kaff.webp" height="100%" width="100%" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331378/arcmen/hindware.webp" height="100%" width="100%" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331374/arcmen/century.webp" height="100" width="100%" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/asianpaints.webp" height="100" width="100%" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/aristo.webp" height="100" width="100%" alt="" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="we-love">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="we-love-cont">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735548775/arcmen/landing%20pages/interior%20design/lights.webp"></img>
                                <h2>We Love Minimalism.</h2>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735548776/arcmen/landing%20pages/interior%20design/Banner-bottom.webp"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="designed-for">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h2>Designed For You</h2>
                                <p>We’ve designed and curated pieces that are a cut above your average home goods because, when you level up your everyday objects, you elevate your daily rituals. Let the magic happen.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735550859/arcmen/Intertior%20design/living.webp"></img>
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735550900/arcmen/Intertior%20design/kitchen-interior-deisgn.webp" className="mt-5"></img>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735550927/arcmen/Intertior%20design/pooja-room-1.webp"></img>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row>
                        <Col lg={4} xs={0}></Col>
                        <Col lg={8} xs={12}>
                            <div className="our-workpro">
                                <h2>Our work process make your dream true</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6}>
                            <div className="our-proimg">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735550978/arcmen/Intertior%20design/workprocess.webp"></img>
                            </div>
                        </Col>
                        <Col lg={6} md={6}>
                            <div className="number-sec">
                                <div className="number">
                                    <p>01</p>
                                </div>
                                <div className="content-bx">
                                    <h3>Perfection in Every Inch</h3>
                                    <p>Every space meticulously crafted, every inch a testament to perfection</p>
                                </div>
                            </div>
                            <div className="number-sec">
                                <div className="number">
                                    <p>02</p>
                                </div>
                                <div className="content-bx">
                                    <h3>Simple idea & Design</h3>
                                    <p>Transform your home with elegant simplicity, where every detail is crafted for your unique style</p>
                                </div>
                            </div>
                            <div className="number-sec">
                                <div className="number">
                                    <p>03</p>
                                </div>
                                <div className="content-bx">
                                    <h3>Comfortable Support</h3>
                                    <p>Creating comfortable and stylish spaces, our designs support your lifestyle with every detail</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className="text-center matrial-bx">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735551154/arcmen/Intertior%20design/Paint-wallpaper.png"></img>
                                <h3>Materials ideas of Paint, wallpaper, curtain & more...</h3>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="text-center matrial-bx">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735551210/arcmen/Intertior%20design/3d-Visula.png"></img>
                                <h3>3D Virtual reality preview</h3>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="text-center matrial-bx">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735551295/arcmen/Intertior%20design/process-2.png"></img>
                                <h3>Flooring & Ceiling View options</h3>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="text-center matrial-bx">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735551108/arcmen/Intertior%20design/Space-planning.png"></img>
                                <h3>Space planning</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="wedesign-your">
                <Container>
                    <Row>
                        <div className="text-centerFill out all required fields below and we will get back to you as soon as possible">
                            <h3>We design your home</h3>
                        </div>
                        <Landingslider />
                    </Row>
                </Container>
            </section>
            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="explore-architect">
                            <h3>Explore Architect Design Studio & Experience Centre Tour</h3>
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
                            <ContactForm />
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="pt-5 pb-5 test-landing">
                <Container>
                    <Row>
                        <Col lg={6} xs={12}>
                            <div className="test-img">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735627314/arcmen/Intertior%20design/b.webp"></img>
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
                            <Modal show={show} size="lg" onHide={handleClose} animation={false} className="popup-show">
                                <Modal.Header closeButton style={{ borderBottom: '0px' }}>
                                    <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="pe-0 pb-0 pl-1">
                                    <div className="popup-fminter">
                                        <div className="form-inter">
                                            <p>Fill out all required fields below and we will get back to you as soon as possible</p>
                                            <form onSubmit={handleSubmit} className="con-form-page">
                                                <Row>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <Form.Control type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name *" className="w-100 p-2" required />
                                                            {errors.name && <span className="text-danger">{errors.name}</span>}
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <Form.Control type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" className="w-100 p-2" />
                                                            {errors.email && <span className="text-danger">{errors.email}</span>}
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <Form.Control type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone *" className="w-100 p-2" required />
                                                            {errors.phone && <span className="text-danger">{errors.phone}</span>}
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2">
                                                            <Form.Control
                                                                type="text"
                                                                id="projectLocation"
                                                                name="projectLocation"
                                                                value={formData.projectLocation}
                                                                onChange={handleChange}
                                                                placeholder="Project Location *"
                                                                className="w-100 p-2"
                                                                required
                                                            />
                                                            {errors.projectLocation && <span className="text-danger">{errors.projectLocation}</span>}
                                                        </div>
                                                    </Col>
                                                    <Col xs={12}>
                                                        <div className="mb-2 burget-check">
                                                            <Form.Check inline label="2BHK" type="radio" id="houseType1" name="interiorType" value="2BHK" onChange={handleChange} checked={formData.interiorType === '2BHK'} />
                                                            <Form.Check inline label="3BHK" type="radio" id="houseType2" name="interiorType" value="3BHK" onChange={handleChange} checked={formData.interiorType === '3BHK'} />
                                                            <Form.Check inline label="4BHK" type="radio" id="houseType3" name="interiorType" value="4BHK" onChange={handleChange} checked={formData.interiorType === '4BHK'} />
                                                            <Form.Check inline label="Above 4BHK" type="radio" id="houseType4" name="interiorType" value="Above 4BHK" onChange={handleChange} checked={formData.interiorType === 'Above 4BHK'} />
                                                            {errors.interiorType && <span className="text-danger">{errors.interiorType}</span>}
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
        </div>
    );
};

export default Interiorhero;
