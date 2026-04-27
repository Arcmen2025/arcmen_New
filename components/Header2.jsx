'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../style/homestyle.scss';
import '../style/Header.css';
import { usePathname, useRouter } from 'next/navigation.js';
import Cookies from 'js-cookie';

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const path = pathname;
        if (path === '/admin-panel') {
            setActiveTab('Home');
        } else if (path === '/admin-panel/blog-forms') {
            setActiveTab('Blog');
        }
        else if (path === '/admin-panel/admin-profile') {
            setActiveTab('Profile');
        }
    }, [pathname]);

    const handleLogout = () => {
        Cookies.remove('token');
        router.push('/');
    };

    return (
        <div style={{ boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.2)` }}>
            <section>
                <Container>
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
                                        {/* <li>
                                            <Link href="/admin-panel/cdn" style={{ color: activeTab === 'cdn' ? '#4dbc15' : 'black' }}>
                                                CDN
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link href="/admin-panel/admin-profile" style={{ color: activeTab === 'Profile' ? '#4dbc15' : 'black' }}>
                                                Profile
                                            </Link>
                                        </li>
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
                </Container>
            </section>
        </div>
    );
};

export default Header;
