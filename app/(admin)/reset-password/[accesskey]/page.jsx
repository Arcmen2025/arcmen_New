'use client';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { resetPassword } from '../../../../api/UserAuthentication';
import Swal from 'sweetalert2';
import './resetPassword.scss';
import { use } from 'react';
import { useRouter } from 'next/navigation';

const ResetPasswordPage = ({ params }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // Unwrap the params object
    const unwrappedParams = use(params);

    const formik = useFormik({
        initialValues: {
            new_password: '',
            confirm_password: ''
        },
        validationSchema: Yup.object({
            new_password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            confirm_password: Yup.string()
                .oneOf([Yup.ref('new_password'), ''], 'Passwords must match')
                .required('Confirm password is required')
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true); // Start loading
            try {
                // Create a new object with only the new_password field, renamed to newPassword
                const requestData = {
                    newPassword: values.new_password
                };

                // Pass only necessary values to resetPassword
                const res = await resetPassword(requestData, unwrappedParams.accesskey);

                if (res.isError) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.data.message || 'Something went wrong.'
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Password has been successfully reset.'
                    });
                    resetForm();
                    // Navigate to the login page
                    router.push('/login');
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred: ' + (error.message || 'Unknown error')
                });
            } finally {
                setLoading(false); // End loading
            }
        }
    });

    return (
        <div>
            <Container className="login-main-container">
                <div className="container login-main-div-container" style={{ backgroundImage: `linear-gradient( 90.1deg,  rgba(8,81,98,1) 14.5%, rgba(198,231,249,1) 135.4% )` }}>
                    <div className="col-sm-12 col-lg-12 ">
                        <h1 className="text-center" style={{ color: 'black' }}>
                            Reset Password
                        </h1>
                        <section>
                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group controlId="formNewPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter new password" {...formik.getFieldProps('new_password')} isInvalid={!!formik.errors.new_password} />
                                    <Form.Control.Feedback type="invalid">{formik.errors.new_password}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm new password" {...formik.getFieldProps('confirm_password')} isInvalid={!!formik.errors.confirm_password} />
                                    <Form.Control.Feedback type="invalid">{formik.errors.confirm_password}</Form.Control.Feedback>
                                </Form.Group>

                                <div className="w-100 d-flex  mt-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div className='w-75'  style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                                        <Button variant="primary" style={{ background: '#501ac8', margin: '0 10px' }} type="submit" disabled={loading}>
                                            {loading ? 'Resetting...' : 'Reset'}
                                        </Button>
                                        <Button variant="info" href="/">
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                                <div className="mt-3" style={{ color: 'black' }}>
                                    Already have an account?{' '}
                                    <a href="/login" style={{ color: 'blue' }}>
                                        Login
                                    </a>
                                </div>
                            </Form>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ResetPasswordPage;
