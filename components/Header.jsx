'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Modal, Form } from 'react-bootstrap';
import Offcanvasmobile from './Mobile-nav.jsx';
import { IoIosArrowDown } from 'react-icons/io';
import '../style/homestyle.scss';
import '../style/Header.css';
import { usePathname } from 'next/navigation.js';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import { FaLocationDot } from 'react-icons/fa6';
import { quickServiceRequestFormAPI } from '@/api/ArcmenFormAPI.js';
import { IoCall } from 'react-icons/io5';

const Header = () => {
    const path = usePathname();
    const [activeTab, setActiveTab] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [recaptcha, setRecaptcha] = useState(null);
    const recaptchaRef = useRef(null);

    useEffect(() => {
        // Set the active tab based on the current URL
        if (path === '/') {
            setActiveTab('Home');
        } else if (path === '/about-the-best-interior-designer-in-chennai') {
            setActiveTab('About Us');
        } else if (path === '/interior-designing-company-in-chennai') {
            setActiveTab('Interior Design');
        } else if (path === '/architect-interior-in-chennai') {
            setActiveTab('Architectural Services');
        } else if (path.startsWith('/modular-kitchen')) {
            setActiveTab('Modular Kitchen');
        } else if (path.startsWith('/interior-design-projects') || path.startsWith('/architectural-projects')) {
            setActiveTab('Gallery');
        } else if (path.startsWith('/blog') || path.startsWith('/wood-factory') || path.startsWith('/faqs') || path.startsWith('/career') || path.startsWith('/refer-and-earn')) {
            setActiveTab('More');
        } else if (path === '/contact-us') {
            setActiveTab('Contact Us');
        }
    }, [path]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        location: '',
        serviceName: ''
    });
    const [errors, setErrors] = useState({});
    const [posterImage, setPosterImage] = useState('https://res.cloudinary.com/dpflidsbg/image/upload/v1739421470/Interior_Architecture_Studio_nq3oib.png');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

        // Mobile number validation
        if (!formData.mobile) {
            tempErrors.mobile = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            tempErrors.mobile = 'Mobile number must be exactly 10 digits';
            isValid = false;
        }

        // Service name validation
        if (!formData.location) {
            tempErrors.location = 'Location is required';
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
                console.log('API Error:', error);
            }
        }
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
            }
        };
        fetchData();
    }, []);

    return (
        <>
            {/* <section style={{ marginBottom: '80px' }}> */}
            <section className='mb-5'>
                <div className="fixed-navbar">
                    <section className="header-body d-none d-lg-block">
                        <Container>
                            <Row>
                                <Col className="align-self-center">
                                    <Link href="tel:+919962998008">+91 99629 98008 / 03 / 01</Link>
                                </Col>
                                <Col>
                                    <ul className="social d-flex align-self-center justify-content-end list-unstyled">
                                        <li>
                                            <Link href="https://maps.app.goo.gl/NaRqbJyEBCYSS4zQ6" target="_blank">
                                                <FaLocationDot />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.facebook.com/arcmeninteriordesign/" alt="facebook">
                                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189618/arcmen/Icons/facebook.png" loading="lazy" alt="facebook" className="img-fluid" style={{ width: '25px' }} />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/arcmeninteriordesigner/" alt="instagram">
                                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189754/arcmen/Icons/instagram.png" alt="instagram" className="img-fluid" loading="lazy" style={{ width: '25px' }} />
                                            </Link>
                                        </li>
                                     
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section>
                        <Container>
                            <Row className="d-none d-lg-block">
                                <Col>
                                    {/* <div className="navbar" > */}
                                    <div className="navbar p-0">
                                        <div className="logo">
                                            <Link href="/">
                                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" />
                                            </Link>
                                        </div>
                                        <ul className="menu">
                                            <li>
                                                <Link href="/" style={{ color: activeTab === 'Home' ? '#4dbc15' : 'black' }}>
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about-the-best-interior-designer-in-chennai" style={{ color: activeTab === 'About Us' ? '#4dbc15' : 'black' }}>
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/interior-designing-company-in-chennai" style={{ color: activeTab === 'Interior Design' ? '#4dbc15' : 'black' }}>
                                                    Interior Design
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/architect-interior-in-chennai" style={{ color: activeTab === 'Architectural Services' ? '#4dbc15' : 'black' }}>
                                                    Architectural Services
                                                </Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link href="/modular-kitchen" style={{ color: activeTab === 'Modular Kitchen' ? '#4dbc15' : 'black' }}>
                                                    {/* Modular Kitchen <IoIosArrowDown />{' '} */}
                                                    Modular Kitchen
                                                </Link>
                                                {/* <div className="dropdown-content">
                                                <Link href="/island-kitchen-designer">Island Kitchen</Link>
                                            </div> */}
                                            </li>
                                            <li className="dropdown">
                                                <Link href="#" style={{ color: activeTab === 'Gallery' ? '#4dbc15' : 'black' }}>
                                                    Projects <IoIosArrowDown />{' '}
                                                </Link>
                                                <div className="dropdown-content">
                                                    <Link href="/interior-design-projects">Interior Design Projects</Link>
                                                    <Link href="/architectural-projects">Architectural Projects</Link>
                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <Link href="#" style={{ color: activeTab === 'More' ? '#4dbc15' : 'black' }}>
                                                    More <IoIosArrowDown />{' '}
                                                </Link>
                                                <div className="dropdown-content">
                                                    <Link href="/blog/">Blog</Link>
                                                    <Link href="/wood-factory/">Wood Factory</Link>
                                                    <Link href="/faqs/">FAQs</Link>
                                                    <Link href="/career/">Career</Link>
                                                    <Link href="/refer-and-earn/">Refer And Earn</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <Link href="/contact-us/" style={{ color: activeTab === 'Contact Us' ? '#4dbc15' : 'black' }}>
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="d-block d-lg-none">
                                <Offcanvasmobile />
                            </Row>
                        </Container>
                    </section>
                </div>
            </section>
            <div className="sidebar-content-div hd-btn">
                <div className="icon-sty">
                    <a href="https://wa.me/9962998008" className="sidebar-icon" target="_blank" rel="noopener">
                        <svg width="33.163" height="33.158" viewBox="0 0 33.163 33.158" style={{ marginTop: '15px', marginLeft: '6px' }}>
                            <ellipse id="Ellipse_25" data-name="Ellipse 25" cx="12.5" cy="12" rx="12.5" ry="12" transform="translate(4 4.579)" fill="#fff"></ellipse>
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Color">
                                    <g id="_08.Whatsapp" data-name="08.Whatsapp">
                                        <path
                                            id="Icon"
                                            d="M52.588,36A16.579,16.579,0,0,0,39.163,62.3l-2.072,6.159,6.379-2.039A16.579,16.579,0,1,0,52.588,36ZM61.4,59.447l-1.766,1.766c-1.857,1.857-6.781-.187-11.145-4.559s-6.321-9.284-4.555-11.12L45.7,43.767a1.853,1.853,0,0,1,2.508,0l2.6,2.595a1.728,1.728,0,0,1-.651,2.876,1.687,1.687,0,0,0-1.115,2.048,8.019,8.019,0,0,0,4.833,4.829A1.77,1.77,0,0,0,55.9,54.987a1.733,1.733,0,0,1,2.9-.651l2.6,2.6a1.853,1.853,0,0,1,0,2.508Z"
                                            transform="translate(-36.015 -36)"
                                            fill="#07d97e"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                    <span className="mail-icon-div d-none d-lg-block">
                        <a href="mailto:contact@arcmeninterior.com" className="sidebar-icon emil-bx">
                            <svg width="19.882" height="14.891" viewBox="0 0 19.882 14.891" style={{ marginTop: '0px', marginLeft: '6px' }}>
                                <path
                                    id="Path_24"
                                    data-name="Path 24"
                                    d="M11.6,176.927a2.99,2.99,0,0,1-3.323,0L.132,171.5Q.065,171.451,0,171.4v8.9a1.83,1.83,0,0,0,1.83,1.83H18.052a1.83,1.83,0,0,0,1.83-1.83v-8.9c-.043.032-.087.064-.133.094Z"
                                    transform="translate(0 -167.242)"
                                    fill="#75a313"
                                ></path>
                                <path
                                    id="Path_25"
                                    data-name="Path 25"
                                    d="M.779,67.551l8.147,5.432a1.826,1.826,0,0,0,2.031,0L19.1,67.551a1.744,1.744,0,0,0,.779-1.455,1.832,1.832,0,0,0-1.83-1.83H1.83A1.832,1.832,0,0,0,0,66.1a1.744,1.744,0,0,0,.779,1.454Z"
                                    transform="translate(0 -64.266)"
                                    fill="#75a313"
                                ></path>
                            </svg>
                        </a>
                    </span>
                    <span className="mail-icon-div d-block d-lg-none">
                        <a href="tel:+919962998008" className="sidebar-icon emil-bx">
                            <IoCall style={{ marginLeft: '5px', fill: '#75a313', fontSize: '20px' }} />
                        </a>
                    </span>
                </div>

                <button type="button" className="btn btn-primary" onClick={handleShow}>
                    Book Now
                </button>

                <section>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Modal show={show} size="lg" onHide={handleClose} animation={false} className="popup-shw">
                                    <Modal.Header closeButton style={{ borderBottom: '0px' }}>
                                        <Modal.Title></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="pe-0 pb-0 pl-1" >
                                        <div className="popup-fminter">
                                            <div className="form-inter">
                                                <p>Fill out all required fields below and we will get back to you as soon as possible.</p>
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
                                                                <Form.Control type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-100 p-2" />
                                                                {errors.email && <span className="text-danger">{errors.email}</span>}
                                                            </div>
                                                        </Col>
                                                        <Col xs={12}>
                                                            <div className="mb-2">
                                                                <Form.Control type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile *" className="w-100 p-2" required />
                                                                {errors.mobile && <span className="text-danger">{errors.mobile}</span>}
                                                            </div>
                                                        </Col>
                                                        <Col xs={12}>
                                                            <div className="mb-2">
                                                                <Form.Control type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Location *" className="w-100 p-2" required />
                                                                {errors.location && <span className="text-danger">{errors.location}</span>}
                                                            </div>
                                                        </Col>

                                                        <Col xs={12}>
                                                            <div className="mb-4">
                                                                <Form.Select id="serviceName" name="serviceName" value={formData.serviceName} onChange={handleChange} className="w-100 p-2" required>
                                                                    <option value="">Services</option>
                                                                    <option value="Interior Design">Interior Design</option>
                                                                    <option value="Architectural Services">Architectural Services</option>
                                                                    <option value="Modular Kitchen">Modular Kitchen</option>
                                                                    <option value="Turnkey Construction">Turnkey Construction</option>
                                                                    <option value="Renovation">Renovation</option>
                                                                </Form.Select>
                                                                {errors.serviceName && <span className="text-danger">{errors.serviceName}</span>}
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
        </>
    );
};

export default Header;
