'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../style/Header-moble.css';
import { IoIosArrowDown } from 'react-icons/io';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Offcanvasmobile() {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => setIsExpanded(!isExpanded);

    return (
        <div>
            <Navbar expand="lg" className='p-0'>
                {/* <Container fluid > */}
                <Container fluid className='p-0'>
                    <div className="logo">
                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" />
                    </div>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggle} />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start" // Position the offcanvas on the left
                        show={isExpanded}
                        onHide={handleToggle}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">{/* Offcanvas */}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className="menu-mb p-0">
                                <li>
                                    <Link href="/" onClick={handleToggle}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/about-the-best-interior-designer-in-chennai" onClick={handleToggle}>About Us</Link>
                                </li>
                                <li>
                                    <Link href="/interior-designing-company-in-chennai" onClick={handleToggle}>Interior Design</Link>
                                </li>
                                <li>
                                    <Link href="/architect-interior-in-chennai" onClick={handleToggle}>Architectural Services</Link>
                                </li>
                                <li>
                                    <Link href="/modular-kitchen" onClick={handleToggle}>Modular Kitchen</Link>
                                </li>
                                <li>
                                    <NavDropdown
                                        className="dropdown"
                                        title={
                                            <span>
                                                Gallery <IoIosArrowDown />
                                            </span>
                                        }
                                    >
                                        <NavDropdown.Item href="/interior-design-projects" onClick={handleToggle}>Interior Design Projects</NavDropdown.Item>
                                        <NavDropdown.Item href="/architectural-projects" onClick={handleToggle}>Architectural Projects</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li>
                                    <NavDropdown
                                        className="dropdown"
                                        title={
                                            <span>
                                                More <IoIosArrowDown />
                                            </span>
                                        }
                                    >
                                        <NavDropdown.Item href="/blog/" onClick={handleToggle}>Blog</NavDropdown.Item>
                                        <NavDropdown.Item href="/wood-factory/" onClick={handleToggle}>Wood Factory</NavDropdown.Item>
                                        <NavDropdown.Item href="/faqs/" onClick={handleToggle}>FAQs</NavDropdown.Item>
                                        <NavDropdown.Item href="/career/" onClick={handleToggle}>Career</NavDropdown.Item>
                                        <NavDropdown.Item href="/refer-and-earn/" onClick={handleToggle}>Refer And Earn</NavDropdown.Item>
                                    </NavDropdown>
                                </li>
                                <li>
                                    <Link href="/contact-us/" onClick={handleToggle}>Contact Us</Link>
                                </li>

                            </ul>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}

export default Offcanvasmobile;
