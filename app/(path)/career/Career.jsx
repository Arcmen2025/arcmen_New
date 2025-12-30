'use client';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { Col, Container, Row, Form, Button, Alert } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import './Career.scss';
import { careerFormAPI } from '@/api/ArcmenFormAPI';
import Swal from 'sweetalert2';

const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        jobPosition: 'Select Position',
        portfolioType: '',
        portfolioLink: '',
        dob: '',
        gender: 'Male',
        maritalStatus: 'Single',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const [filesResume, setFilesResume] = useState(null);
    const [filesPortfolio, setFilesPortfolio] = useState(null);

    const [errors, setErrors] = useState({});
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [alert, setAlert] = useState({ show: false, message: '', variant: '', countdown: 5 });
    const formRef = useRef(null);
    const recaptchaRef = useRef(null);

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email address is invalid';
        if (!formData.mobile) newErrors.mobile = 'Mobile is required';
        else if (!/^\d{8,10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be between 8 and 10 digits';
        if (formData.jobPosition === 'Select Position') newErrors.jobPosition = 'Select the Job Position';
        if (showPortfolioChoice && formData.portfolioType === 'Select Option') newErrors.portfolioType = 'Portfolio Type is required';
        if (!formData.dob) newErrors.dob = 'Date of Birth is required';
        else if (new Date(formData.dob) > new Date()) newErrors.dob = 'Date of Birth cannot be in the future';
        else if (calculateAge(formData.dob) < 18) newErrors.dob = 'You must be at least 18 years old';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.state) newErrors.state = 'State is required';
        if (!formData.zipCode) newErrors.zipCode = 'ZIP Code is required';
        else if (!/^\d+$/.test(formData.zipCode)) newErrors.zipCode = 'ZIP Code must be a number';
        if (showPortfolioChoice && formData.portfolioType === 'I have Portfolio Link' && !formData.portfolioLink) newErrors.portfolioLink = 'Portfolio Link is required';
        if (showPortfolioChoice && formData.portfolioType === 'I have Portfolio upload file' && !filesPortfolio) newErrors.portfolio = 'Portfolio File is required';
        if (!filesResume) newErrors.resume = 'Resume is required';
        if (!recaptchaValue) newErrors.recaptcha = 'Please complete the reCAPTCHA';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            if (name === 'resume') {
                if (files[0] && (files[0].type === 'application/pdf' || files[0].type === 'application/msword' || files[0].type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || files[0].type.startsWith('image/'))) {
                    setFilesResume(files[0]);
                    delete errors.resume;
                } else {
                    setErrors({ ...errors, resume: 'Invalid file type. Please upload a PDF, Word document, or image.' });
                }
            } else if (name === 'portfolio') {
                if (files[0] && (files[0].type === 'application/pdf' || files[0].type === 'application/msword' || files[0].type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || files[0].type.startsWith('image/'))) {
                    setFilesPortfolio(files[0]);
                    delete errors.portfolio;
                } else {
                    setErrors({ ...errors, portfolio: 'Invalid file type. Please upload a PDF, Word document, or image.' });
                }
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        validateField(name, value, type, files);
    };

    const validateField = (name, value, type, files) => {
        const newErrors = { ...errors };

        if (type === 'file') {
            if (name === 'resume' && (!files[0] || !(files[0].type === 'application/pdf' || files[0].type === 'application/msword' || files[0].type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || files[0].type.startsWith('image/')))) {
                newErrors.resume = 'Invalid file type. Please upload a PDF, Word document, or image.';
            } else {
                delete newErrors.resume;
            }
            if (name === 'portfolio' && (!files[0] || !(files[0].type === 'application/pdf' || files[0].type === 'application/msword' || files[0].type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || files[0].type.startsWith('image/')))) {
                newErrors.portfolio = 'Invalid file type. Please upload a PDF, Word document, or image.';
            } else {
                delete newErrors.portfolio;
            }
        } else {
            if (name === 'name' && !value) newErrors.name = 'Name is required';
            else if (name === 'email' && (!value || !/\S+@\S+\.\S+/.test(value))) newErrors.email = 'Email address is invalid';
            else if (name === 'mobile' && !value) newErrors.mobile = 'Mobile is required';
            else if (name === 'mobile' && !/^\d{8,10}$/.test(value)) newErrors.mobile = 'Mobile number must be between 8 and 10 digits';
            else if (name === 'jobPosition' && value === 'Select Position') newErrors.jobPosition = 'Select the Job Position';
            else if (showPortfolioChoice && name === 'portfolioType' && value === 'Select Option') newErrors.portfolioType = 'Portfolio Type is required';
            else if (name === 'dob' && !value) newErrors.dob = 'Date of Birth is required';
            else if (name === 'dob' && new Date(value) > new Date()) newErrors.dob = 'Date of Birth cannot be in the future';
            else if (name === 'dob' && calculateAge(value) < 18) newErrors.dob = 'You must be at least 18 years old';
            else if (name === 'address' && !value) newErrors.address = 'Address is required';
            else if (name === 'city' && !value) newErrors.city = 'City is required';
            else if (name === 'state' && !value) newErrors.state = 'State is required';
            else if (name === 'zipCode' && !value) newErrors.zipCode = 'ZIP Code is required';
            else if (name === 'zipCode' && !/^\d+$/.test(value)) newErrors.zipCode = 'ZIP Code must be a number';
            else if (showPortfolioChoice && name === 'portfolioLink' && !value && formData.portfolioType === 'I have Portfolio Link') newErrors.portfolioLink = 'Portfolio Link is required';
            else delete newErrors[name];
        }
        setErrors(newErrors);
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            setAlert({ show: true, message: 'Please fill in all required fields', variant: 'danger', countdown: 5 });
            return;
        }
        try {
            console.log('Form Data:', formData);
            console.log('Files:', { resume: filesResume, portfolio: filesPortfolio });

            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('mobile', formData.mobile);
            formDataToSend.append('jobPosition', formData.jobPosition);
            formDataToSend.append('portfolioType', formData.portfolioType.length > 0 ? formData.portfolioType : "-");
            formDataToSend.append('portfolioLink', formData.portfolioLink.length > 0 ? formData.portfolioLink : "-");
            formDataToSend.append('dob', formData.dob);
            formDataToSend.append('gender', formData.gender);
            formDataToSend.append('maritalStatus', formData.maritalStatus);
            formDataToSend.append('address', formData.address);
            formDataToSend.append('city', formData.city);
            formDataToSend.append('state', formData.state);
            formDataToSend.append('zipCode', formData.zipCode);
            if (filesResume) {
                formDataToSend.append('resume', filesResume);
            }
            if (filesPortfolio) {
                formDataToSend.append('portfolio', filesPortfolio);
            }

            const response = await careerFormAPI(formDataToSend);
            if (response.data) {
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    text: "Your request has been submitted successfully. Our team will get in touch with you soon.",
                    timer: 3000,
                });

                // Reset form fields and reCAPTCHA
                formRef.current.reset();
                setFormData({
                    name: '',
                    email: '',
                    mobile: '',
                    jobPosition: 'Select Position',
                    portfolioType: '',
                    portfolioLink: '',
                    dob: '',
                    gender: 'Male',
                    maritalStatus: 'Single',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: ''
                });
                setFilesResume(null);
                setFilesPortfolio(null);
                setRecaptchaValue(null);
                recaptchaRef.current.reset();
            } else {
                setAlert({ show: true, message: 'An error occurred while submitting the form', variant: 'danger', countdown: 5 });
            }
        } catch (error) {
            console.error(error);
            setAlert({ show: true, message: 'An error occurred while submitting the form', variant: 'danger', countdown: 5 });
        }
    };

    useEffect(() => {
        let timer;
        if (alert.show) {
            timer = setInterval(() => {
                setAlert((prevAlert) => ({
                    ...prevAlert,
                    countdown: prevAlert.countdown - 1
                }));
            }, 1000);

            setTimeout(() => {
                setAlert({ show: false, message: '', variant: '', countdown: 5 });
            }, 5000);
        }

        return () => clearInterval(timer);
    }, [alert.show]);

    const showPortfolioChoice = ['Senior Architect', 'Junior Architect', 'Senior Interior Designer', 'Junior Interior Designer', 'Civil Engineer', 'Internship (B.Arch., B.Des.,)'].includes(formData.jobPosition);

    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <div>
            {alert.show && (
                <Alert variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
                    {alert.message} ({alert.countdown} s)
                </Alert>
            )}
            <section className="career-banner">
                <Container>
                    <Row>
                        <Col className="text-center ">
                            <h1>Career</h1>
                            <p>
                                <Link href="/" style={{ color: '#4DBC15' }}>
                                    Home
                                </Link>{' '}
                                / Career
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="career-form-section">
                <Container>
                    <section className="career-form-section-inner">
                        <Row>
                            <Col>
                                <div className="mb-1">
                                    <h1 className="career-form-heading">Professional Goals Assessment</h1>
                                </div>
                                <div>
                                    <Form ref={formRef} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6} className="mb-4">
                                                <Form.Group controlId="formName">
                                                    <Form.Label className="mb-0">
                                                        Name<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="text" name="name" value={formData.name} onChange={handleChange} className={errors.name ? 'border-danger' : ''} />
                                                    {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <Form.Group controlId="formEmail">
                                                    <Form.Label className="mb-0">
                                                        Email<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? 'border-danger' : ''} />
                                                    {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6} className="mb-4">
                                                <Form.Group controlId="formMobile">
                                                    <Form.Label className="mb-0">
                                                        Mobile<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className={errors.mobile ? 'border-danger' : ''} pattern="\d{8,10}" />
                                                    {errors.mobile && <Form.Text className="text-danger">{errors.mobile}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <Form.Group controlId="formJobPosition">
                                                    <Form.Label className="mb-0">
                                                        Job Position<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" as="select" name="jobPosition" value={formData.jobPosition} onChange={handleChange} className={errors.jobPosition ? 'border-danger' : ''}>
                                                        <option hidden value="">
                                                            Select Position
                                                        </option>
                                                        <option>Receptionist</option>
                                                        <option>Senior Architect</option>
                                                        <option>Junior Architect</option>
                                                        <option>Senior Interior Designer</option>
                                                        <option>Junior Interior Designer</option>
                                                        <option>Civil Engineer</option>
                                                        <option>Internship (B.Arch., B.Des.,)</option>
                                                        <option>Project Supervisor</option>
                                                        <option>Marketing Manager</option>
                                                        <option>Carpenter</option>
                                                    </Form.Control>
                                                    {errors.jobPosition && <Form.Text className="text-danger">{errors.jobPosition}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} className="mb-4">
                                                <Form.Group controlId="formResume">
                                                    <Form.Label className="mb-0">
                                                        Resume<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="file" name="resume" accept=".pdf,.doc,.docx,image/*" onChange={handleChange} className={errors.resume ? 'border-danger' : ''} />
                                                    <Form.Text className={errors.resume ? 'border-danger' : 'text-muted'}>Upload only PDF, DOC, DOCX or Image{errors.resume ? `` : errors.resume }</Form.Text>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        {showPortfolioChoice && (
                                            <Row className="mb-4">
                                                <Col md={6} className="mb-4">
                                                    <Form.Group controlId="formPortfolioChoice">
                                                        <Form.Label className="mb-0">
                                                            Choose your Portfolio<sup style={{ color: 'red' }}>*</sup>
                                                        </Form.Label>
                                                        <Form.Control size="lg" as="select" className={errors.portfolioType ? 'border-danger' : ''} name="portfolioType" value={formData.portfolioType} onChange={handleChange} required>
                                                            <option hidden>Select Option</option>
                                                            <option>I have Portfolio Link</option>
                                                            <option>I have Portfolio upload file</option>
                                                        </Form.Control>
                                                        {errors.portfolioType && <Form.Text className="text-danger">{errors.portfolioType}</Form.Text>}
                                                    </Form.Group>
                                                </Col>
                                                {formData.portfolioType === 'I have Portfolio Link' && (
                                                    <Col md={6} className="mb-4">
                                                        <Form.Group controlId="formPortfolioLink">
                                                            <Form.Label className="mb-0">
                                                                Portfolio Link<sup style={{ color: 'red' }}>*</sup>
                                                            </Form.Label>
                                                            <Form.Control size="lg" className={errors.portfolioLink ? 'border-danger' : ''} type="text" name="portfolioLink" value={formData.portfolioLink} onChange={handleChange} required  placeholder='https://portfolio.com/portfolio-link'/>
                                                            {errors.portfolioLink && <Form.Text className="text-danger">{errors.portfolioLink}</Form.Text>}
                                                        </Form.Group>
                                                    </Col>
                                                )}
                                                {formData.portfolioType === 'I have Portfolio upload file' && (
                                                    <Col md={6} className="mb-4">
                                                        <Form.Group controlId="formPortfolioFile">
                                                            <Form.Label className="mb-0">
                                                                Upload Your Portfolio<sup style={{ color: 'red' }}>*</sup>
                                                            </Form.Label>
                                                            <Form.Control size="lg" type="file" name="portfolio" accept=".pdf,.doc,.docx,image/*" onChange={handleChange} required />
                                                            <Form.Text className={errors.portfolio ? 'border-danger' : 'text-muted'}>Maximum file size 48KB {errors.portfolio ? '' : errors.portfolio} </Form.Text>
                                                        </Form.Group>
                                                    </Col>
                                                )}
                                            </Row>
                                        )}
                                        <Row>
                                            <Col md={4} className="mb-4">
                                                <Form.Group controlId="formDOB">
                                                    <Form.Label className="mb-0">
                                                        Date of Birth<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="date" name="dob" value={formData.dob} onChange={handleChange} className={errors.dob ? 'border-danger' : ''} max={currentDate} />
                                                    {errors.dob && <Form.Text className="text-danger">{errors.dob}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={4} className="mb-4">
                                                <Form.Group controlId="formGender">
                                                    <Form.Label>
                                                        Gender<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <div>
                                                        <Form.Check style={{ marginRight: '1rem' }} type="radio" label="Male" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="d-inline-block mr-3" />
                                                        <Form.Check
                                                            style={{ marginRight: '1rem' }}
                                                            type="radio"
                                                            label="Female"
                                                            name="gender"
                                                            value="Female"
                                                            checked={formData.gender === 'Female'}
                                                            onChange={handleChange}
                                                            className="d-inline-block mr-3"
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                            <Col md={4} className="mb-4">
                                                <Form.Group controlId="formMaritalStatus">
                                                    <Form.Label>
                                                        Marital Status<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <div>
                                                        <Form.Check
                                                            type="radio"
                                                            label="Single"
                                                            name="maritalStatus"
                                                            value="Single"
                                                            checked={formData.maritalStatus === 'Single'}
                                                            onChange={handleChange}
                                                            className="d-inline-block"
                                                            style={{ marginRight: '1rem' }} // Custom margin
                                                        />
                                                        <Form.Check
                                                            type="radio"
                                                            label="Married"
                                                            name="maritalStatus"
                                                            value="Married"
                                                            checked={formData.maritalStatus === 'Married'}
                                                            onChange={handleChange}
                                                            className="d-inline-block"
                                                            style={{ marginRight: '1rem' }} // Custom margin
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <h2 className="career-form-heading2">Address</h2>
                                        <Row>
                                            <Col md={6} className="mb-4">
                                                <Form.Group controlId="formAddress">
                                                    <Form.Label className="mb-0">
                                                        Address<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="text" name="address" value={formData.address} onChange={handleChange} className={errors.address ? 'border-danger' : ''} />
                                                    {errors.address && <Form.Text className="text-danger">{errors.address}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <Form.Group controlId="formCity">
                                                    <Form.Label className="mb-0">
                                                        City<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="text" name="city" value={formData.city} onChange={handleChange} className={errors.city ? 'border-danger' : ''} />
                                                    {errors.city && <Form.Text className="text-danger">{errors.city}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6} className="mb-4">
                                                <Form.Group controlId="formState">
                                                    <Form.Label className="mb-0">
                                                        State<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="text" name="state" value={formData.state} onChange={handleChange} className={errors.state ? 'border-danger' : ''} />
                                                    {errors.state && <Form.Text className="text-danger">{errors.state}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                            <Col md={6} className="mb-4">
                                                <Form.Group controlId="formZipCode">
                                                    <Form.Label className="mb-0">
                                                        ZIP / Postal Code<sup style={{ color: 'red' }}>*</sup>
                                                    </Form.Label>
                                                    <Form.Control size="lg" type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} className={errors.zipCode ? 'border-danger' : ''} pattern="\d+" />
                                                    {errors.zipCode && <Form.Text className="text-danger">{errors.zipCode}</Form.Text>}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <div className="mb-4">
                                            <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={handleRecaptchaChange} />
                                            {errors.recaptcha && <span className="text-danger">{errors.recaptcha}</span>}
                                        </div>

                                        <Button type="submit">Submit</Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </section>
        </div>
    );
};

export default Career;
