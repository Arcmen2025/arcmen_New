'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { FaCheck } from 'react-icons/fa';
import ModularKitchenChennai from './ModularKitchenChennai';
import ModularContact from './ModularContact';
import Clientslider from './Clientslider';
import Carousel from 'react-bootstrap/Carousel';
import { modularKitchenEnquiryFormsAPI } from '@/api/ArcmenFormAPI';
import Swal from 'sweetalert2';
import { getAllAds, getAllAdsByStatus } from '@/api/AdsPostingAPI';
import Link from 'next/link';

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const result = await getAllAds();
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await modularKitchenEnquiryFormsAPI(formData);
            // console.log(response);
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
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleClose = () => setShow(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <>
            <section>
                <Container fluid>
                    <Row>
                        <Col lg={12} className="p-0 hero-banner">
                            <Carousel fade className="modular-kitchen-carousel-container">
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740397907/modular-kitchen-banner_kbj17s.jpg" alt="Third slide" />
                                    <Carousel.Caption>
                                        <h3>Unleash the Chef in You with Our Modular Kitchens!</h3>
                                        <p>"Effortless Cooking, Timeless Style"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    {/* <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735797019/arcmen/modular-kitchen-chennai/modular-babner-2.jpg" alt="Second slide" /> */}
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740398437/Modular-kitchen-banner3_hulcvn.jpg" alt="Second slide" />
                                    <Carousel.Caption>
                                        <h3>Transform Your Kitchen with Innovative Modular Designs</h3>
                                        <p>"Experience the Perfect Blend of Style and Functionality"</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    {/* <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735797101/arcmen/modular-kitchen-chennai/modular-banner-3.jpg" alt="Third slide" /> */}
                                    <img className="d-block w-100" src="https://res.cloudinary.com/dpflidsbg/image/upload/v1740398441/modular-Kitchen-banner2_nccepg.jpg" alt="First slide" />
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
            {/* <section className="who-we-aresec" style={{ background: '#F4F4F4' }}>
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
            </section> */}
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
            <section className="Build-Décor mt-3">
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
        </>
    );
};

export default ModularHero;
