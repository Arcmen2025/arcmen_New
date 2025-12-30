'use client'

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { quickServiceRequestFormAPI } from '@/api/ArcmenFormAPI';
import Swal from 'sweetalert2';

const Quickservice = () => {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        serviceName: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let newErrors = {};
        let isValid = true;

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
            isValid = false;
        }

        // Mobile number validation
        if (!formData.mobile) {
            newErrors.mobile = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be exactly 10 digits';
            isValid = false;
        }

        // Service name validation
        if (!formData.serviceName) {
            newErrors.serviceName = 'Service name is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await quickServiceRequestFormAPI(formData);
                // console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'Form submitted succesfully',
                    text: 'Your request has been submitted successfully. Our team will get in touch with you soon.',
                    timer: 3000
                })
                if (response) {
                    setFormData({
                        email: '',
                        mobile: '',
                        serviceName: '',
                    });
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>
            <section className='quickser-sec'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className='quick'>
                                <h3>Quick Service Request</h3>
                                <h2>Book a Free consultation</h2>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className='quickser-form'>
                                <form onSubmit={handleSubmit} className="con-form-page">
                                    <div className="mb-4">
                                        <select
                                            id="serviceName"
                                            name="serviceName"
                                            value={formData.serviceName}
                                            onChange={handleChange}
                                            className="w-100 p-2"
                                            required
                                        >
                                            <option value="">Services</option>
                                            <option value="Full home interior decor">Full home interior decor</option>
                                            <option value="Modular Kitchen">Modular Kitchen</option>
                                            <option value="Interior Design">Renovation </option>
                                            <option value="Architectural Services">Architectural Services</option>
                                            <option value="Turnkey Construction">Turnkey Construction</option>
                                        </select>
                                        {errors.serviceName && <p className="error" style={{ color: "red" }}>{errors.serviceName}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your email"
                                            className="w-100 p-2"
                                            required
                                        />
                                        {errors.email && <p className="error" style={{ color: "red" }} >{errors.email}</p>}
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="tel"
                                            id="mobile"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            placeholder="Mobile Number"
                                            className="w-100 p-2"
                                            required
                                        />
                                        {errors.mobile && <p className="error" style={{ color: "red" }}>{errors.mobile}</p>}
                                    </div>
                                    <button type="submit" style={{ color: "white", borderRadius: "5px" }}>SUBMIT</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Quickservice
