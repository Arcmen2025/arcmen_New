'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Offcanvasmobile from './Mobile-nav3.jsx';
import '../style/homestyle.scss';
import '../style/Header.css';
import { usePathname, useRouter } from 'next/navigation.js';
import Cookies from 'js-cookie';

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        // Set the active tab based on the current URL
        const path = pathname;
        if (path === '/admin-panel') {
            setActiveTab('Home');
        } else if (path === '/admin-panel/blog-forms') {
            setActiveTab('Blog');
        }
        else if (path === '/admin-panel/admin-profile') {
            setActiveTab('Profile');
        }
        //  else if (path === '/admin-panel/career-leads') {
        //     setActiveTab('Career Lead');
        // } else if (path === '/admin-panel/interior-design-inquiry') {
        //     setActiveTab('Interior Design Inquiry');
        // } else if (path === '/admin-panel/modular-kitchen-inquiry') {
        //     setActiveTab('Modular Kitchen Inquiry');
        // } 
    }, [pathname]);

    const handleLogout = () => {
        Cookies.remove('token');
        router.push('/');
    };

    return (
        <div style={{ boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2)` }}>
            <section>
                <Container>
                    {/* <Row className="d-none d-lg-block"> */}
                    <Row className="">
                        <Col>
                            <div className="navbar">
                                <div className='header2-navbar-div'>
                                    <div className="logo">
                                        <Link href="/admin-panel">
                                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" />
                                        </Link>
                                    </div>
                                    <ul className="menu">
                                        <li>
                                            <Link href="/admin-panel" style={{ color: activeTab === 'Home' ? '#4dbc15' : 'black' }}>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin-panel/blog-forms" style={{ color: activeTab === 'Blog' ? '#4dbc15' : 'black' }}>
                                                Blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin-panel/admin-profile" style={{ color: activeTab === 'Profile' ? '#4dbc15' : 'black' }}>
                                                Profile
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/admin-panel/career-leads" style={{ color: activeTab === 'Career Lead' ? '#4dbc15' : 'black' }}>
                                                Career Lead
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin-panel/interior-design-inquiry" style={{ color: activeTab === 'Interior Design Inquiry' ? '#4dbc15' : 'black' }}>
                                                Interior Design Inquiry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin-panel/modular-kitchen-inquiry" style={{ color: activeTab === 'Modular Kitchen Inquiry' ? '#4dbc15' : 'black' }}>
                                                Modular Kitchen Inquiry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin-panel/quick-service" style={{ color: activeTab === 'Quick Service' ? '#4dbc15' : 'black' }}>
                                                Quick Service
                                            </Link>
                                        </li> */}
                                        <li>
                                            <span onClick={handleLogout} style={{ color: activeTab === 'Log Out' ? '#4dbc15' : 'black' }}>
                                                Log Out
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row className="d-block d-lg-none">
                        <Offcanvasmobile />
                    </Row> */}
                </Container>
            </section>
        </div>
    );
};

export default Header;
