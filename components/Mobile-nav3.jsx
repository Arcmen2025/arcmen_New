'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../style/Header-moble.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation.js';

function Offcanvasmobile() {

  const router=useRouter()
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => setIsExpanded(!isExpanded);
    const [activeTab, setActiveTab] = useState('Home');

      const handleTabClick = (tab) => {
            setActiveTab(tab);
        };
        const handleLogout = (tab) => {
            setActiveTab(tab);
            Cookies.remove('token');
            router.push('/');
        };
    
    return (
        <div>
            <Navbar expand="lg">
                <Container fluid>
                    <div className="logo">
                        <Link href="/admin-panel">
                            <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" />
                        </Link>
                    </div>
                    {/* <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggle} />
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end" show={isExpanded} onHide={handleToggle}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className="menu-mb p-0">
                                <li>
                                    <Link href="/admin-panel" onClick={() => handleTabClick('Home')} style={{ color: activeTab === 'Home' ? '#4dbc15' : 'black' }}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin-panel/blog-forms" onClick={() => handleTabClick('Blog')} style={{ color: activeTab === 'Blog' ? '#4dbc15' : 'black' }}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin-panel/career-leads" onClick={() => handleTabClick('Career Lead')} style={{ color: activeTab === 'Career Lead' ? '#4dbc15' : 'black' }}>
                                        Career Lead
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin-panel/interior-design-inquiry" onClick={() => handleTabClick('Interior Design Inquiry')} style={{ color: activeTab === 'Interior Design Inquiry' ? '#4dbc15' : 'black' }}>
                                        Interior Design Inquiry
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin-panel/modular-kitchen-inquiry" onClick={() => handleTabClick('Modular Kitchen Inquiry')} style={{ color: activeTab === 'Modular Kitchen Inquiry' ? '#4dbc15' : 'black' }}>
                                        Modular Kitchen Inquiry
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin-panel/quick-service/" onClick={() => handleTabClick('Quick Service')} style={{ color: activeTab === 'Quick Service' ? '#4dbc15' : 'black' }}>
                                        Quick Service
                                    </Link>
                                </li>
                                <li>
                                    <span onClick={() => handleLogout('Log Out')} style={{ color: activeTab === 'Log Out' ? '#4dbc15' : 'black' }}>
                                        Log Out
                                    </span>
                                </li>
                            </ul>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas> */}
                </Container>
            </Navbar>
        </div>
    );
}

export default Offcanvasmobile;
