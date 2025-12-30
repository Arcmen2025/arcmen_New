// 'use client';
// import React, { useContext, useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { login } from '../../../api/UserAuthentication';
// import Swal from 'sweetalert2';
// import './login.scss';

// import { useRouter } from 'next/navigation';
// import Cookies from 'js-cookie';

// const LoginPage = () => {
//     const [loading, setLoading] = useState(false);
//     const [rememberMe, setRememberMe] = useState(false); // State for "Remember me"
//     const router = useRouter();
//     const [loginStatus,setLoginStatus]=useState(false)

//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         validationSchema: Yup.object({
//             email: Yup.string().email('Invalid email format').required('Email is required'),
//             password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
//         }),
//         validate: (values) => {
//             const errors = {};
//             if (!values.email) {
//                 errors.email = 'Email is required';
//             } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//                 errors.email = 'Invalid email format';
//             }
//             if (!values.password) {
//                 errors.password = 'Password is required';
//             } else if (values.password.length < 8) {
//                 errors.password = 'Password must be at least 8 characters';
//             }
//             return errors;
//         },
//         onSubmit: async (values, { resetForm }) => {
//             setLoading(true); // Start loading
//             try {
//                 const res = await login(values);
//                 console.log('Logged in user:', res);

//                 if (res.isError) {
//                     console.log('Error logging in user:', res);
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: res.data.message
//                     });
//                 } else {
//                     setLoginStatus(true);
//                     // setValue(values.email);
//                     Cookies.set("token", res.data.accessToken, { expires: 7 });
//                     Cookies.set("refreshToken", res.data.refreshToken, { expires: 7 });
//                     // setTimeout(() => {
//                         window.location.assign("/admin-panel");
//                     // }, 3000);
//                     resetForm();
//                 }
//             } catch (error) {
//                 console.error('Failed to log in user:', error);
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Oops...',
//                     text: 'An error occurred: ' + error.message
//                 });
//             } finally {
//                 setLoading(false); // End loading
//             }
//         }
//     }); 

//     const handleRememberMeChange = (event) => {
//         setRememberMe(event.target.checked);
//     };

//     return (
//         <div style={{ height:"100vh" }} className="login-sec">
//             <div className="row " style={{marginRight:"10px" }}>
//                 <div className="col-md=4 col-lg-5 login-image-container login-cont">
                    
//                     <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" ></img>
//                     <h2 style={{fontSize:"60px !important", color:"#75A313 !important"}}>Architecture Studio</h2>
//                 </div>
//                 <div className="col-sm-12 col-md-12 col-lg-7 pt-4">
//                     <div className="container login-main-div-container login-frm" style={{ justifyContent: 'center' }}>
//                         <h1 className=" text-black" style={{fontSize:"30px !important", fontWeight:" 800"}}>Welcome to <span style={{ color:"#75A313 !important"}}>Arcmen Interior</span></h1>
//                         <h6 className=" text-black">Please enter your login credentials to access your account.</h6>
//                         {loginStatus && <div style={{color:"green",textAlign:"center"}}>Login Successfull!!!</div>}
//                         <section className="d-flex justify-content-center" style={{ backgroundColor: 'white' }}>
//                             <Form onSubmit={formik.handleSubmit}>
//                                 <Form.Group controlId="formEmail">
//                                     <Form.Label>Email</Form.Label>
//                                     <Form.Control
//                                         type="email"
//                                         placeholder="Enter email"
//                                         {...formik.getFieldProps('email')}
//                                         isInvalid={formik.touched.email && !!formik.errors.email}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {formik.errors.email}
//                                     </Form.Control.Feedback>
//                                 </Form.Group>

//                                 <Form.Group controlId="formPassword">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control
//                                         type="password"
//                                         placeholder="Enter password"
//                                         {...formik.getFieldProps('password')}
//                                         isInvalid={formik.touched.password && !!formik.errors.password}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {formik.errors.password}
//                                     </Form.Control.Feedback>
//                                 </Form.Group>


//                                 <div className="d-flex justify-content-center mt-3" style={{ flexDirection: 'column' }}>
//                                     <div>
//                                         <Button variant="primary" style={{ background: '#501ac8', margin: '0 10px' }} type="submit" disabled={loading}>
//                                             {loading ? 'Logging in...' : 'Login'}
//                                         </Button>
//                                         {/* <Button variant="info" href="/">
//                                             Cancel
//                                         </Button> */}
//                                     </div>
//                                     <div className="mt-3" style={{ color: 'black'}}>
//                                         {/* <span className="text-black col-sm-6 col-lg-8">
//                                             Don’t have an account?&nbsp;
//                                             <a href="/registration" className="login-page-registration" style={{ color: 'blue' }}>
//                                                 Create one now!
//                                             </a>{' '}
//                                             &nbsp;
//                                         </span> */}
//                                         <a href="/forgot-password" className="col-sm-6 col-lg-4 login-page-forgotpassword">
//                                             Forget Password
//                                         </a>
//                                     </div>

//                                 </div>
//                             </Form>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;



// =======================================================================================================================================================
// =======================================================================================================================================================
// =======================================================================================================================================================
// =======================================================================================================================================================
// =======================================================================================================================================================
// =======================================================================================================================================================
// =======================================================================================================================================================
// =======================================================================================================================================================
// =======================================================================================================================================================


'use client';
import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { login } from '../../../api/UserAuthentication';
import Swal from 'sweetalert2';
import './login.scss';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); // State for "Remember me"
    const router = useRouter();
    const [loginStatus, setLoginStatus] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Email is required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
        }),
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email format';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters';
            }
            return errors;
        },
        onSubmit: async (values, { resetForm }) => {
            setLoading(true); // Start loading
            try {
                const res = await login(values);
                // console.log('Logged in user:', res);

                if (res.isError) {
                    console.log('Error logging in user:', res);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.error.errors
                    });
                } else {
                    setLoginStatus(true);
                    // setValue(values.email);
                    Cookies.set("token", res.data.accessToken, { expires: 7 });
                    Cookies.set("refreshToken", res.data.refreshToken, { expires: 7 });
                    // setTimeout(() => {
                        window.location.assign("/admin-panel");
                    // }, 3000);
                    resetForm();
                }
            } catch (error) {
                console.error('Failed to log in user:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text:  error
                });
            } finally {
                setLoading(false); // End loading
            }
        }
    });

    const handleRememberMeChange = (event) => {
        setRememberMe(event.target.checked);
    };

    return (
        <div style={{ height: "100vh" }} className="login-sec">
            <div className="row " style={{ marginRight: "10px" }}>
                <div className="col-md-4 col-lg-5 login-image-container login-cont d">
                    <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo"></img>
                    <h2 style={{ fontSize: "60px !important", color: "#75A313 !important" }}>Architecture Studio</h2>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-7 pt-4">
                    <div className="container login-main-div-container login-frm" style={{ justifyContent: 'center' }}>
                        <h1 className=" text-black" style={{ fontSize: "30px !important", fontWeight: " 800" }}>Welcome to <span style={{ color: "#75A313 !important" }}>Arcmen Interior</span></h1>
                        <h6 className=" text-black">Please enter your login credentials to access your account.</h6>
                        {loginStatus && <div style={{ color: "green", textAlign: "center" }}>Login Successful!!!</div>}
                        <section className="d-flex justify-content-center" style={{ backgroundColor: 'white' }}>
                            <Form onSubmit={formik.handleSubmit} className='w-100'>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        {...formik.getFieldProps('email')}
                                        isInvalid={formik.touched.email && !!formik.errors.email}
                                        disabled={loginStatus}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        {...formik.getFieldProps('password')}
                                        isInvalid={formik.touched.password && !!formik.errors.password}
                                        disabled={loginStatus}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="d-flex justify-content-center mt-3" style={{ flexDirection: 'column' }}>
                                    <div>
                                        <Button variant="primary" style={{ background: '#501ac8', margin: '0 10px' }} type="submit" disabled={loading || loginStatus}>
                                            {loading ? 'Logging in...' : 'Login'}
                                        </Button>
                                    </div>
                                    <div className="mt-3" style={{ color: 'black' }}>
                                        <a href="/forgot-password" className="col-sm-6 col-lg-4 login-page-forgotpassword" style={{ pointerEvents: loginStatus ? 'none' : 'auto' }}>
                                            Forget Password
                                        </a>
                                    </div>
                                </div>
                            </Form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


// =============================================================================================================================
// =============================================================================================================================
// =============================================================================================================================
// =============================================================================================================================
// =============================================================================================================================
// =============================================================================================================================
// =============================================================================================================================
// =============================================================================================================================
