'use client';
import { ChangePassword, getProfile, updateProfile } from '@/api/UserAuthentication';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

const Profile = () => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [emailID, setEmailID] = useState('');
    const [profileUpdate, setProfileUpdate] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [showModel, setShowModel] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProfile();
            if (result.data) {
                setFName(result.data.firstName);
                setLName(result.data.lastName);
                setEmailID(result.data.email);
            }
        };
        fetchData();
    }, []);

    const handleClose = () => {
        if (showModel) {
            // console.log(showModel, '8888888888');
            setShowModel(false);
            setProfileUpdate({
                firstName: '',
                lastName: '',
                email: ''
            });
        }
    };

    const handleModelShow = () => {
        setProfileUpdate({
            firstName: fName,
            lastName: lName,
            email: emailID
        });
        setShowModel(true);
    };

    const handleResetPasswordField = () => {
        // console.log('Resetting password fields');
        setPassword('');
        setConfirmPassword('');
        setOldPassword('');
    };

    const validatePasswordChange = () => {
        const newErrors = {};
        if (!oldPassword) newErrors.oldPassword = 'Old Password is required';
        if (!password) newErrors.password = 'New Password is required';
        if (!confirmPassword) newErrors.confirmPassword = 'Confirm Password is required';
        if (password !== confirmPassword) newErrors.confirmPassword = "Passwords don't match";
        return newErrors;
    };

    const handleChangePassword = async () => {
        const newErrors = validatePasswordChange();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        const data = { oldPassword: oldPassword, password: password };
        try {
            const result = await ChangePassword(data);
            if (result.data) {
                Swal.fire({ title: 'Success', text: result.data.message, icon: 'success', timer: 3000 });
                handleResetPasswordField(); // Reset password fields after successful change
            } else {
                Swal.fire({ title: 'OOPS', text: "Couldn't able to change password", icon: 'error', timer: 3000 });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const validateProfileUpdate = () => {
        const newErrors = {};
        if (!profileUpdate.firstName) newErrors.firstName = 'First Name is required';
        if (!profileUpdate.lastName) newErrors.lastName = 'Last Name is required';
        if (!profileUpdate.email) newErrors.email = 'Email is required';
        return newErrors;
    };

    const handleUpdateProfile = async () => {
        const newErrors = validateProfileUpdate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        const data = profileUpdate;
        const result = await updateProfile(data);
        // console.log(result, '---------->');
        if (result.data) {
            setFName(result.data.firstName);
            setLName(result.data.lastName);
            setEmailID(result.data.email);

            Swal.fire({ title: 'Success', text: result.data.message, icon: 'success', timer: 3000 });
            handleClose();
        }
    };

    return (
        <div style={{ backgroundImage: 'linear-gradient( 90.1deg,  rgba(8,81,98,1) 14.5%, rgba(198,231,249,1) 135.4% )' }}>
            <Container>
                <Row>
                    <Col>
                        <div className="mt-3 p-5" style={{ border: '1px solid black', borderRadius: '10px', background: '#fff' }}>
                            <Form>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" disabled value={fName} />
                                </Form.Group>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" disabled value={lName} />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email ID</Form.Label>
                                    <Form.Control type="text" disabled value={emailID} />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="mt-3 mb-2">
                            <Button onClick={handleModelShow} variant="info">
                                Update Profile
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <section className="mb-3">
                            <div className="mt-3 p-5" style={{ border: '1px solid black', borderRadius: '10px', background: '#fff' }}>
                                <Form>
                                    <Form.Group controlId="oldPassword">
                                        <Form.Label>Old Password</Form.Label>
                                        <Form.Control type="password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
                                        {errors.oldPassword && <Form.Text className="text-danger">{errors.oldPassword}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="password">
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
                                    </Form.Group>
                                    <Form.Group controlId="confirmPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                        {errors.confirmPassword && <Form.Text className="text-danger">{errors.confirmPassword}</Form.Text>}
                                    </Form.Group>

                                    <div className="d-flex justify-content-center mt-5">
                                        <div>
                                            <Button variant="success" onClick={handleChangePassword} className="me-3">
                                                Change
                                            </Button>
                                            <Button variant="danger" onClick={handleResetPasswordField}>
                                                Clear
                                            </Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>

            <Modal show={showModel} onHide={handleClose} backdrop="static" keyboard={false} size="xl">
                <Modal.Header closeButton style={{ backgroundImage: 'linear-gradient( 109.6deg,  rgba(15,2,2,1) 11.2%, rgba(36,163,190,1) 91.1% )' }}>
                    <Modal.Title style={{ color: 'white' }}>Update Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section>
                        <Form>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" onChange={(e) => setProfileUpdate({ ...profileUpdate, firstName: e.target.value })} value={profileUpdate.firstName} />
                                {errors.firstName && <Form.Text className="text-danger">{errors.firstName}</Form.Text>}
                            </Form.Group>
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" onChange={(e) => setProfileUpdate({ ...profileUpdate, lastName: e.target.value })} value={profileUpdate.lastName} />
                                {errors.lastName && <Form.Text className="text-danger">{errors.lastName}</Form.Text>}
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email ID</Form.Label>
                                <Form.Control type="text" onChange={(e) => setProfileUpdate({ ...profileUpdate, email: e.target.value })} value={profileUpdate.email} />
                                {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
                            </Form.Group>
                        </Form>
                    </section>
                </Modal.Body>

                <Modal.Footer className="d-flex flex-start" style={{ backgroundImage: 'linear-gradient( 109.6deg,  rgba(15,2,2,1) 11.2%, rgba(36,163,190,1) 91.1% )' }}>
                    <section className="w-100 d-flex justify-content-center">
                        {' '}
                        <div>
                            <Button onClick={handleUpdateProfile} className="me-2" variant="success">
                                Save
                            </Button>
                            <Button onClick={handleClose} variant="danger">
                                Close
                            </Button>
                        </div>
                    </section>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;
