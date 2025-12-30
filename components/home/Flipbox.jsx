import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AutoSlider from '../slider';
import Slidercard from './Slidercard';
import Clientslider from '../../app/(path)/about-the-best-interior-designer-in-chennai/clientslider';
import Link from 'next/link';
import Slider2 from '../Slider2';
const Flipbox = () => {
    return (
        <>
            <section className="flipbox-sec">
                <Container>
                    <Row>
                        <Col lg={4}>
                            <div className="flip-box homeflip">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <h2>Interior Design</h2>
                                        <p>We are the expert team of interior designer in Chennai, Tamilnadu region because our designer and execution team fine works makes us best Interior Decorator in Chennai &amp; Tamilnadu of 25years.</p>
                                    </div>
                                    <div className="flip-box-back">
                                        <h2>Interior Design</h2>
                                        <p>We are the expert team of interior designer in Chennai, Tamilnadu region because our designer and execution team fine works makes us best Interior Decorator in Chennai &amp; Tamilnadu of 25years.</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="flip-box homeflip">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <h2>Modular Kitchen</h2>
                                        <p>Meet our Kitchen designer they are inspire you, because 9 Different Materiel Models, Using India &amp; International Brands &amp; Appliances, we make European Style HI-end Modular Kitchen in Chennai</p>
                                    </div>
                                    <div className="flip-box-back">
                                        <h2>Modular Kitchen</h2>
                                        <p>Meet our Kitchen designer they are inspire you, because 9 Different Materiel Models, Using India &amp; International Brands &amp; Appliances, we make European Style HI-end Modular Kitchen in Chennai</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="flip-box homeflip">
                                <div className="flip-box-inner">
                                    <div className="flip-box-front">
                                        <h2>Architectural Services</h2>
                                        <p>Arcmen provides best residential architects services in Chennai &amp; Tamilnadu.Offers High End Residential Homes and Luxury Villa Architecture of 15Years</p>
                                        <p></p>
                                    </div>
                                    <div className="flip-box-back">
                                        <h2>Architectural Services</h2>
                                        <p>Arcmen provides best residential architects services in Chennai &amp; Tamilnadu.Offers High End Residential Homes and Luxury Villa Architecture of 15Years</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Flip box end */}

            {/* Slider start */}
            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h2>HOME DESIGN ALL IN UNDER ONE ROOF </h2>
                            </div>
                            <div>
                                <AutoSlider />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="process-work">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>THIS IS HOW WE PROCESS WORKS</h2>
                        </div>

                        <Col lg={2} xs={6} md={4} className="w-20">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330916/arcmen/talk-to-our-expert.png" alt="Talk to our Expert Get Plan or Visit Site"></img>
                                <h3>Talk to our Expert Get Plan or Visit Site</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6} md={4} className="w-20">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330913/arcmen/Brainstorming.png" alt="Brainstorming Customer"></img>
                                <h3>Brainstorming Customer as Design Partner </h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6} md={4} className="w-20">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330914/arcmen/final-proposal.png" alt="Final proposal Start the Production"></img>
                                <h3>Final proposal Start the Production</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6} md={4} className="w-20">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330915/arcmen/Installing%20a%20Ready%20Units.png" alt="Installing a Ready Units"></img>
                                <h3>Installing a Ready Units</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6} md={4} className="w-20">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330914/arcmen/handing-over.png" alt="Talk to our Expert Get Plan or Visit Site"></img>
                                <h3>Handing Over Hello to See You Soon</h3>
                            </div>
                        </Col>
                        <div id="overlay-btns" className="color-overlay-buttons">
                            <a href="how-we-process-works/" className="color-overlay-links">
                                <span className="ue-color-overlays"></span>
                                <span className="ue-btn-txts">VIEW MORE DETAILS</span>
                            </a>
                        </div>
                    </Row>
                </Container>
            </section>
            <section className="whychoose pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>PROFESSIONAL HOME INTERIOR DESIGN COMPANY</h2>
                        </div>

                        <Col xs={6} md={4} className="w-12">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330913/arcmen/15-year-material-warranty.png" alt="Talk to our Expert Get Plan or Visit Site"></img>
                                <h3>15 Year Material Warranty</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="w-12">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330913/arcmen/25-years-experience.png" alt="25 years Experience"></img>
                                <h3>25 years Experience </h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="w-12">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330914/arcmen/2000-above-happy-clients.png" alt="2000 above happy clients"></img>
                                <h3>2000 above happy clients</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="w-12">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330914/arcmen/Installed-in-45-days.png" alt="Installing a Ready Units"></img>
                                <h3>Installed in 45 days</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="w-12">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330913/arcmen/competitive-price.png" alt="Competitive Price"></img>
                                <h3>Competitive Price</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="w-12">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330917/arcmen/Water-proof-plywoods.png" alt="Water proof plywoods"></img>
                                <h3>Water proof plywoods</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="w-12">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330915/arcmen/international-brands.png" alt="International Brands"></img>
                                <h3>International Brands</h3>
                            </div>
                        </Col>
                        <Col xs={6} md={4} className="w-12">
                            <div className="proces-box">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734330913/arcmen/EMI-option.png" alt="Emai-option"></img>
                                <h3>0% EMI Option</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section style={{ background: '#4DBC15', padding: '50px 0px' }} className="advantage-get">
                <Container>
                    <Row>
                        <div className="text-center mb-3">
                            <h2 style={{ color: '#fff !important' }}>ADVANTAGES TO GET ARCMEN</h2>
                        </div>

                        <Col lg={2} xs={12} md={6} className="w-20">
                            <div className="advance-box" style={{ background: '#68E6FF', padding: '40px 10px', borderRadius: '5px' }}>
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331377/arcmen/high-quality-3d-preview.png" alt="Emai-option"></img>
                                <h3>HIGH QUALITY 3D PREVIEW</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={12} md={6} className="w-20">
                            <div className="advance-box" style={{ background: '#E4ADFF', padding: '40px 10px', borderRadius: '5px', marginTop: '30px' }}>
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331376/arcmen/designing-consulting-service.png" alt="Emai-option"></img>
                                <h3>DESIGNING & CONSULTING SERVICES</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={12} md={6} className="w-20">
                            <div className="advance-box" style={{ background: '#F8EC7C', padding: '40px 10px', borderRadius: '5px' }}>
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331380/arcmen/luxury-furniture.png" alt="Emai-option"></img>
                                <h3>LUXURY FURNITURE TO MATCH YOUR STYLE</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={12} md={6} className="w-20">
                            <div className="advance-box" style={{ background: '#F66165', padding: '40px 10px', borderRadius: '5px', marginTop: '30px' }}>
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331381/arcmen/turnkey-construction.png" alt="Emai-option"></img>
                                <h3>TURNKEY CONSTRUCTION</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={12} md={6} className="w-20">
                            <div className="advance-box" style={{ background: '#FFB755', padding: '40px 10px', borderRadius: '5px' }}>
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331383/arcmen/what-you-will-see-we-will-deliver.png" alt="Emai-option"></img>
                                <h3>WHAT YOU WILL SEE WE WILL DELIVER </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*OUR OTHER SERVICES
             */}

            <section className="pt-5 pb-5">
                <Container>
                    <Row>
                        <div className="text-center">
                            <h2>OUR OTHER SERVICES</h2>
                        </div>
                        <Col lg={2} xs={6}>
                            <div className="other-service">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331381/arcmen/wallpaper-designs.png" alt="curtains curtain rods"></img>
                                <h3>Curtains & Curtain Rods</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6}>
                            <div className="other-service">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331383/arcmen/window-blinds.png" alt="Emai-option"></img>
                                <h3>Window Blinds</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6}>
                            <div className="other-service">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331381/arcmen/wallpaper-designs.png" alt="Emai-option"></img>
                                <h3>Wallpaper Designs</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6}>
                            <div className="other-service">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331384/arcmen/wooder-flooring.png" alt="Emai-option"></img>
                                <h3>Wooden Flooring</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6}>
                            <div className="other-service">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331374/arcmen/CNC-wooden-design.png" alt="CNC wooden design"></img>
                                <h3>CNC Wooden Design</h3>
                            </div>
                        </Col>
                        <Col lg={2} xs={6}>
                            <div className="other-service">
                                <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331382/arcmen/wall-paintings.png" alt="Emai-option"></img>
                                <h3>Wall Paintings</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="vedio-sec">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h2 style={{ color: '#4DBC15 !important' }}>EXPLORE ARCMEN'S INTERIOR DESIGN STUDIO & EXPERIENCE CENTER TOUR EXCELLENCE</h2>
                                <iframe
                                    width="100%"
                                    height="600"
                                    src="https://www.youtube.com/embed/UsBH_Ud5kjc?si=P3Giul_EhZ1Ay-2h"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Testiominal */}

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
              <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331374/arcmen/century.webp" height="100%" width="100%" alt="" />
            </div>
            <div className="slide">
              <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/asianpaints.webp" height="100%" width="100%" alt="" />
            </div>
            <div className="slide">
              <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/aristo.webp" height="100%" width="100%" alt="" />
            </div>
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
              <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331374/arcmen/century.webp" height="100%" width="100%" alt="" />
            </div>
            <div className="slide">
              <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/asianpaints.webp" height="100%" width="100%" alt="" />
            </div>
            <div className="slide">
              <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1734331373/arcmen/aristo.webp" height="100%" width="100%" alt="" />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>



            <section className="project-card">
                <Container>
                    <Row>
                        <Col>
                            {/* <Slidercard /> */}
                            <Slider2 />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col>
                            <Clientslider />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="Build-Décor">
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

export default Flipbox;



