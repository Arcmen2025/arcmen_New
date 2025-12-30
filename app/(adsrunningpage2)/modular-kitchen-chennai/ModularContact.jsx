'use client';
import { contactUsFormAPI } from '../../../api/ArcmenFormAPI';
import { useState, useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import ReCAPTCHA from 'react-google-recaptcha';

const ModularContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        projectLocation: '',
        service: '',
        message: ''
    });

    const [recaptcha, setRecaptcha] = useState(null);
    const recaptchaRef = useRef(null);

    const [errors, setErrors] = useState({});

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

        if (!formData.mobile) {
            tempErrors.mobile = 'Mobile number is required';
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            tempErrors.mobile = 'Mobile number must be 10 digits';
            isValid = false;
        }

        if (!formData.projectLocation) {
            tempErrors.projectLocation = 'Project location is required';
            isValid = false;
        }

        if (!formData.service) {
            tempErrors.service = 'Service is required';
            isValid = false;
        }

        if (!formData.message) {
            tempErrors.message = 'Message is required';
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
                const response = await contactUsFormAPI(formData);
                // console.log(response);
                if (response.data) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your request has been submitted successfully. Our team will get in touch with you soon.',
                        icon: 'success',
                        time: 3000
                    });
                    setFormData({
                        name: '',
                        email: '',
                        mobile: '',
                        projectLocation: '',
                        service: '',
                        message: ''
                    });
                    setRecaptcha(null); // Reset reCAPTCHA value
                    recaptchaRef.current.reset(); // Reset reCAPTCHA widget
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    const handleRecaptchaChange = (value) => {
        setRecaptcha(value);
        if (value) {
            setErrors((prevErrors) => ({ ...prevErrors, recaptcha: null }));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="con-form-page">
                <Row>
                    <Col lg={4} xs={12}>
                        <div className="mb-4">
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-100 p-2" required />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        <div className="mb-4">
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-100 p-2" required />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        <div className="mb-4">
                            <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" className="w-100 p-2" required />
                            {errors.mobile && <span className="text-danger">{errors.mobile}</span>}
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        <div className="mb-4">
                            <input type="text" id="projectLocation" name="projectLocation" value={formData.projectLocation} onChange={handleChange} placeholder="Project Location" className="w-100 p-2" required />
                            {errors.projectLocation && <span className="text-danger">{errors.projectLocation}</span>}
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        <div className="mb-4">
                            <select id="service" name="service" value={formData.service} onChange={handleChange} placeholder="Select Service" className="w-100 p-2" required>
                                <option value="">Select Service</option>
                                <option value="Interior Design">Interior Design</option>
                                <option value="Architectural Services">Architectural Services</option>
                                <option value="Modular Kitchen">Modular Kitchen</option>
                                <option value="Turnkey Construction">Turnkey Construction</option>
                                <option value="Renovation">Renovation</option>
                            </select>
                            {errors.service && <span className="text-danger">{errors.service}</span>}
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        <div className="mb-4">
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="w-100 p-2" required></textarea>
                            {errors.message && <span className="text-danger">{errors.message}</span>}
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-4">
                            <div className="mb-4">
                                <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
                                {errors.recaptcha && <span className="text-danger">{errors.recaptcha}</span>}
                            </div>

                            <button type="submit" className="sumbit-btn">
                                Send Message
                            </button>
                        </div>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default ModularContact;
