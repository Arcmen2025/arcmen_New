'use client';
import React from 'react';
import { contactUsFormAPI } from '../../../api/ArcmenFormAPI';
import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Homepopup = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await contactUsFormAPI(formData);
                // console.log(response);
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
            } catch (error) {
                console.log(error);
            }
        }
    };
    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!recaptcha) {
            tempErrors.recaptcha = 'Please complete the reCAPTCHA';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
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
                    <Col xs={12}>
                        <div className="mb-2">
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="w-100 p-2" required />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="mb-2">
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-100 p-2" required />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="mb-2">
                            <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="mobile Number" className="w-100 p-2" required />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="mb-2">
                            <input type="text" id="projectLocation" name="projectLocation" value={formData.projectLocation} onChange={handleChange} placeholder="Project projectLocation" className="w-100 p-2" required />
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className="mb-2 burget-check">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                            <label htmlFor="vehicle1"> 2Bhk</label>
                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"></input>
                            <label htmlFor="vehicle2"> 3Bhk</label>
                            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"></input>
                            <label htmlFor="vehicle3"> 4Bhk</label>
                        </div>
                    </Col>
                    {/* <Col xs={12}>
                        <div className="mb-2">
                            <select id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="Select Project Value" className="w-100 p-2" required>
                                <option value="">Select Project Value</option>
                                <option value="Interior Design">6-9 Lakhs</option>
                                <option value="Architectural Services">9-12 Lakhs</option>
                                <option value="Modular Kitchen">12 -15 Lakhs</option>
                                <option value="Turnkey Construction">Above 15 Lakhs</option>
                            </select>
                        </div>
                    </Col> */}
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
    );
};

export default Homepopup;
