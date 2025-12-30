// 'use client';
// import Link from 'next/link';
// import React, { useState, useEffect, useRef } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import '../style/homestyle.scss';
// import '../style/Header-poster.css';
// import ReCAPTCHA from 'react-google-recaptcha';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { contactUsFormAPI, interiorDesignEnquiryFormAPI } from '@/api/ArcmenFormAPI';
// import Swal from 'sweetalert2';
// import { getAllAds, getAllAdsByStatus } from '@/api/AdsPostingAPI';
// import { IoCall } from 'react-icons/io5';

// const Header = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         projectLocation: '',
//         interiorType: '',
//         budget: '',
//         agreeTerms: true
//     });
//     const [posterImage, setPosterImage] = useState('https://res.cloudinary.com/dpflidsbg/image/upload/v1739421470/Interior_Architecture_Studio_nq3oib.png');

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData({
//             ...formData,
//             [name]: type === 'checkbox' ? checked : value
//         });
//     };

//     const [recaptcha, setRecaptcha] = useState(null);
//     const recaptchaRef = useRef(null);

//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         let tempErrors = {};
//         let isValid = true;

//         if (!formData.name) {
//             tempErrors.name = 'Name is required';
//             isValid = false;
//         }

//         if (!formData.email) {
//             tempErrors.email = 'Email is required';
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             tempErrors.email = 'Email address is invalid';
//             isValid = false;
//         }

//         if (!formData.phone) {
//             tempErrors.phone = 'Phone number is required';
//             isValid = false;
//         }

//         if (!formData.projectLocation) {
//             tempErrors.projectLocation = 'Project location is required';
//             isValid = false;
//         }

//         if (!formData.interiorType) {
//             tempErrors.interiorType = 'Interior type is required';
//             isValid = false;
//         }

//         if (!formData.budget) {
//             tempErrors.budget = 'Budget is required';
//             isValid = false;
//         }

//         if (!recaptcha) {
//             tempErrors.recaptcha = 'Please complete the reCAPTCHA';
//             isValid = false;
//         }

//         setErrors(tempErrors);
//         return isValid;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validate()) {
//             try {
//                 const response = await interiorDesignEnquiryFormAPI(formData);
//                 // console.log(response);
//                 if (response.data) {
//                     Swal.fire({
//                         title: 'Success!',
//                         icon: 'success',
//                         timer: 3000,
//                         text: 'Your request has been submitted successfully. Our team will get in touch with you soon.'
//                     });
//                     handleClose();
//                     resetForm();
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             name: '',
//             email: '',
//             phone: '',
//             projectLocation: '',
//             interiorType: '',
//             budget: '',
//             agreeTerms: true
//         });
//         setRecaptcha(null);
//         recaptchaRef.current.reset();
//     };

//     const handleRecaptchaChange = (value) => {
//         setRecaptcha(value);
//         if (value) {
//             setErrors((prevErrors) => ({ ...prevErrors, recaptcha: null }));
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const result = await getAllAdsByStatus();
//                 if (result.data) {
//                     if (result.data.posters.length > 0 && result.data.posters[0].posterImage && result.data.posters[0].status === 1) {
//                         setPosterImage(result?.data?.posters[0]?.posterImage);
//                     }
//                 }
//             } catch (e) {
//                 console.log(e);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops.',
//                     text: 'Something went wrong while fetching the blogs.',
//                     timer: 3000
//                 });
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <>
//             <div style={{ boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2)` }}>
//                 <section>
//                     <Container>
//                         <Row className="">
//                             <Col>
//                                 <div className="navbar">
//                                     <div>
//                                         <div className="logo">
//                                             <Link href="/">
//                                                 <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" />
//                                             </Link>
//                                         </div>
//                                     </div>
//                                     <section>
//                                         <div style={{ color: '#75a313' }}>
//                                             <a href="tel:+919962998008" className="nav-link ps-2" id="phonecta">
//                                                 <span id="phone">99629 98008</span>
//                                             </a>
//                                             <button type="button" className="btn pe-3 ps-4" style={{ color: '#fff', background: '#75a313' }} data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>
//                                                 Book Now
//                                             </button>
//                                         </div>
//                                     </section>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </section>
//             </div>
//             <div className="sidebar-content-div hd-btn">
//                 <div className="icon-sty">
//                     <a href="https://wa.me/9962998008" className="sidebar-icon" target="_blank" rel="noopener">
//                         <svg width="33.163" height="33.158" viewBox="0 0 33.163 33.158" style={{ marginTop: '15px', marginLeft: '6px' }}>
//                             <ellipse id="Ellipse_25" data-name="Ellipse 25" cx="12.5" cy="12" rx="12.5" ry="12" transform="translate(4 4.579)" fill="#fff"></ellipse>
//                             <g id="Layer_2" data-name="Layer 2">
//                                 <g id="Color">
//                                     <g id="_08.Whatsapp" data-name="08.Whatsapp">
//                                         <path
//                                             id="Icon"
//                                             d="M52.588,36A16.579,16.579,0,0,0,39.163,62.3l-2.072,6.159,6.379-2.039A16.579,16.579,0,1,0,52.588,36ZM61.4,59.447l-1.766,1.766c-1.857,1.857-6.781-.187-11.145-4.559s-6.321-9.284-4.555-11.12L45.7,43.767a1.853,1.853,0,0,1,2.508,0l2.6,2.595a1.728,1.728,0,0,1-.651,2.876,1.687,1.687,0,0,0-1.115,2.048,8.019,8.019,0,0,0,4.833,4.829A1.77,1.77,0,0,0,55.9,54.987a1.733,1.733,0,0,1,2.9-.651l2.6,2.6a1.853,1.853,0,0,1,0,2.508Z"
//                                             transform="translate(-36.015 -36)"
//                                             fill="#07d97e"
//                                         ></path>
//                                     </g>
//                                 </g>
//                             </g>
//                         </svg>
//                     </a>
//                     {/* <span className="mail-icon-div">
//                         <a href="mailto:contact@arcmeninterior.com" className="sidebar-icon emil-bx">
//                             <svg width="19.882" height="14.891" viewBox="0 0 19.882 14.891" style={{ marginTop: '0px', marginLeft: '6px' }}>
//                                 <path
//                                     id="Path_24"
//                                     data-name="Path 24"
//                                     d="M11.6,176.927a2.99,2.99,0,0,1-3.323,0L.132,171.5Q.065,171.451,0,171.4v8.9a1.83,1.83,0,0,0,1.83,1.83H18.052a1.83,1.83,0,0,0,1.83-1.83v-8.9c-.043.032-.087.064-.133.094Z"
//                                     transform="translate(0 -167.242)"
//                                     fill="#75a313"
//                                 ></path>
//                                 <path
//                                     id="Path_25"
//                                     data-name="Path 25"
//                                     d="M.779,67.551l8.147,5.432a1.826,1.826,0,0,0,2.031,0L19.1,67.551a1.744,1.744,0,0,0,.779-1.455,1.832,1.832,0,0,0-1.83-1.83H1.83A1.832,1.832,0,0,0,0,66.1a1.744,1.744,0,0,0,.779,1.454Z"
//                                     transform="translate(0 -64.266)"
//                                     fill="#75a313"
//                                 ></path>
//                             </svg>
//                         </a>
//                     </span> */}
//                     <span className="mail-icon-div d-none d-lg-block">
//                         <a href="mailto:contact@arcmeninterior.com" className="sidebar-icon emil-bx">
//                             <svg width="19.882" height="14.891" viewBox="0 0 19.882 14.891" style={{ marginTop: '0px', marginLeft: '6px' }}>
//                                 <path
//                                     id="Path_24"
//                                     data-name="Path 24"
//                                     d="M11.6,176.927a2.99,2.99,0,0,1-3.323,0L.132,171.5Q.065,171.451,0,171.4v8.9a1.83,1.83,0,0,0,1.83,1.83H18.052a1.83,1.83,0,0,0,1.83-1.83v-8.9c-.043.032-.087.064-.133.094Z"
//                                     transform="translate(0 -167.242)"
//                                     fill="#75a313"
//                                 ></path>
//                                 <path
//                                     id="Path_25"
//                                     data-name="Path 25"
//                                     d="M.779,67.551l8.147,5.432a1.826,1.826,0,0,0,2.031,0L19.1,67.551a1.744,1.744,0,0,0,.779-1.455,1.832,1.832,0,0,0-1.83-1.83H1.83A1.832,1.832,0,0,0,0,66.1a1.744,1.744,0,0,0,.779,1.454Z"
//                                     transform="translate(0 -64.266)"
//                                     fill="#75a313"
//                                 ></path>
//                             </svg>
//                         </a>
//                     </span>
//                     <span className="mail-icon-div d-block d-lg-none">
//                         <a href="tel:+919962998008" className="sidebar-icon emil-bx">
//                             <IoCall style={{ marginLeft: '5px', fill: '#75a313', fontSize: '20px' }} />
//                         </a>
//                     </span>
//                 </div>

//                 <button type="button" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>
//                     Book Now
//                 </button>

//                 <section>
//                     <Container>
//                         <Row>
//                             <Col lg={12}>
//                                 <Modal show={show} size="lg" onHide={handleClose} animation={false} className="popup-show">
//                                     <Modal.Header closeButton style={{ borderBottom: '0px' }}>
//                                         <Modal.Title></Modal.Title>
//                                     </Modal.Header>
//                                     <Modal.Body className="pe-0 pb-0 pl-1" style={{ paddingTop: '4px' }}>
//                                         <div className="popup-fminter">
//                                             <div className="form-inter">
//                                                 <p>Fill out all required fields below and we will get back to you as soon as possible</p>
//                                                 <form onSubmit={handleSubmit} className="con-form-page">
//                                                     <Row>
//                                                         <Col xs={12}>
//                                                             <div className="mb-2">
//                                                                 <Form.Control type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name *" className="w-100 p-2" required />
//                                                                 {errors.name && <span className="text-danger">{errors.name}</span>}
//                                                             </div>
//                                                         </Col>
//                                                         <Col xs={12}>
//                                                             <div className="mb-2">
//                                                                 <Form.Control type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" className="w-100 p-2" />
//                                                                 {errors.email && <span className="text-danger">{errors.email}</span>}
//                                                             </div>
//                                                         </Col>
//                                                         <Col xs={12}>
//                                                             <div className="mb-2">
//                                                                 <Form.Control type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone *" className="w-100 p-2" required />
//                                                                 {errors.phone && <span className="text-danger">{errors.phone}</span>}
//                                                             </div>
//                                                         </Col>
//                                                         <Col xs={12}>
//                                                             <div className="mb-2">
//                                                                 <Form.Control
//                                                                     type="text"
//                                                                     id="projectLocation"
//                                                                     name="projectLocation"
//                                                                     value={formData.projectLocation}
//                                                                     onChange={handleChange}
//                                                                     placeholder="Project Location *"
//                                                                     className="w-100 p-2"
//                                                                     required
//                                                                 />
//                                                                 {errors.projectLocation && <span className="text-danger">{errors.projectLocation}</span>}
//                                                             </div>
//                                                         </Col>
//                                                         <Col xs={12}>
//                                                             <div className="mb-2 burget-check">
//                                                                 <Form.Check inline label="2BHK" type="radio" id="houseType1" name="interiorType" value="2BHK" onChange={handleChange} checked={formData.interiorType === '2BHK'} />
//                                                                 <Form.Check inline label="3BHK" type="radio" id="houseType2" name="interiorType" value="3BHK" onChange={handleChange} checked={formData.interiorType === '3BHK'} />
//                                                                 <Form.Check inline label="4BHK" type="radio" id="houseType3" name="interiorType" value="4BHK" onChange={handleChange} checked={formData.interiorType === '4BHK'} />
//                                                                 <Form.Check inline label="Above 4BHK" type="radio" id="houseType4" name="interiorType" value="Above 4BHK" onChange={handleChange} checked={formData.interiorType === 'Above 4BHK'} />
//                                                                 {errors.interiorType && <span className="text-danger">{errors.interiorType}</span>}
//                                                             </div>
//                                                         </Col>

//                                                         <Col xs={12}>
//                                                             <div className="mb-2">
//                                                                 <Form.Select id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="Project Value" className="w-100" required>
//                                                                     <option value="">Project Value</option>
//                                                                     <option value="Above 8 Lakhs">Above 8 Lakhs</option>
//                                                                     <option value="Above 15 Lakhs">Above 15 Lakhs</option>
//                                                                     <option value="Above 20 Lakhs">Above 20 Lakhs</option>
//                                                                     <option value="Above 25 Lakhs">Above 25 Lakhs</option>
//                                                                 </Form.Select>
//                                                                 {errors.budget && <span className="text-danger">{errors.budget}</span>}
//                                                             </div>
//                                                         </Col>
//                                                         <Col lg={12}>
//                                                             <div className="mb-2 ">
//                                                                 <div className="mb-4">
//                                                                     <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
//                                                                     {errors.recaptcha && <span className="text-danger">{errors.recaptcha}</span>}
//                                                                 </div>
//                                                                 <button type="submit" className="sumbit-btn">
//                                                                     Submit
//                                                                 </button>
//                                                             </div>
//                                                         </Col>
//                                                     </Row>
//                                                 </form>
//                                             </div>
//                                             <div className="popup-img" style={{ borderRadius: '0px 10px 10px 0px' }}>
//                                                 <img src={posterImage} alt="Offer" style={{ borderRadius: '0px 10px 10px 0px' }}></img>
//                                             </div>
//                                         </div>
//                                     </Modal.Body>
//                                 </Modal>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </section>
//             </div>
//         </>
//     );
// };

// export default Header;


// =========================================
// =========================================
// =========================================
// =========================================

'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Modal, Form } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import { contactUsFormAPI, interiorDesignEnquiryFormAPI } from '@/api/ArcmenFormAPI';
import { getAllAds, getAllAdsByStatus } from '@/api/AdsPostingAPI';
import { IoCall } from 'react-icons/io5';
import '../style/homestyle.scss';
import '../style/Header-poster.css';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectLocation: '',
        interiorType: '',
        budget: '',
        agreeTerms: true
    });
    const [posterImage, setPosterImage] = useState('https://res.cloudinary.com/dpflidsbg/image/upload/v1739421470/Interior_Architecture_Studio_nq3oib.png');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const [recaptcha, setRecaptcha] = useState(null);
    const recaptchaRef = useRef(null);

    const [errors, setErrors] = useState({});

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
                if (response.data) {
                    Swal.fire({
                        title: 'Success!',
                        icon: 'success',
                        timer: 3000,
                        text: 'Your request has been submitted successfully. Our team will get in touch with you soon.'
                    });
                    handleClose();
                    resetForm();
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
        setRecaptcha(null);
        recaptchaRef.current.reset();
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
                    text: 'Something went wrong while fetching the blogs.',
                    timer: 3000
                });
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div style={{ boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2)` }}>
                <section>
                    <Container>
                        <Row className="">
                            <Col>
                                <div className="navbar">
                                    <div>
                                        <div className="logo">
                                            <Link href="/">
                                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <section>
                                        <div style={{ color: '#75a313' }}>
                                            <a href="tel:+919962998008" className="nav-link ps-2" id="phonecta">
                                                <span id="phone">99629 98008</span>
                                            </a>
                                            <button type="button" className="btn pe-3 ps-4" style={{ color: '#fff', background: '#75a313' }} data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>
                                                Book Now
                                            </button>
                                        </div>
                                    </section>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
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

                <button type="button" className="btn btn-primary " data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>
                    Book Now
                </button>

                <section>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Modal show={show} size="lg" onHide={handleClose} animation={false} className="popup-show">
                                    <Modal.Header closeButton style={{ borderBottom: '0px' }}>
                                        <Modal.Title></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body className="pe-0 pb-0 pl-1" >
                                        <div className="popup-fminter">
                                            <div className="form-inter mt-3">
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

                                                        <Col xs={12}>
                                                            <div className="mb-2">
                                                                <Form.Select id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="Project Value" className="w-100" required>
                                                                    <option value="">Project Value</option>
                                                                    <option value="Above 8 Lakhs">Above 8 Lakhs</option>
                                                                    <option value="Above 15 Lakhs">Above 15 Lakhs</option>
                                                                    <option value="Above 20 Lakhs">Above 20 Lakhs</option>
                                                                    <option value="Above 25 Lakhs">Above 25 Lakhs</option>
                                                                </Form.Select>
                                                                {errors.budget && <span className="text-danger">{errors.budget}</span>}
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
        </>
    );
};

export default Header;
