"use client";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../../api/UserAuthentication";
import Swal from "sweetalert2";
import "./register.css";
import { useRouter } from 'next/navigation'

const RegistrationPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); // Start loading
      try {
        // Create a new object excluding the confirm_password field
        const { confirm_password, ...userData } = values;
        const res = await registerUser(userData);
        // console.log("Registered user:", res);

        if (res.isError) {
          console.log("Error registering user:", res);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res.data.message,
          });
        } else {
          // Handle successful registration
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Registration successful!",
          });
          resetForm();
          router.push('/login')
          // Reset the form fields to empty values
        }
      } catch (error) {
        console.error("Failed to save user:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "An error occurred: " + error.message,
        });
      } finally {
        setLoading(false); // End loading
      }
    },
  });

  return (
    // <div>
    //   <Container className="registration-main-container">
    //     <div
    //       className="container registration-main-div-container"
          
    //     >
    //       <div className="col-md=4 col-lg-5 login-image-container login-cont">
                    
    //                 <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" ></img>
    //                 <h2 style={{fontSize:"60px !important", color:"#75A313 !important"}}>Architecture Studio</h2>
    //             </div>
    //       <div className="col-sm-12 col-lg-7 col-md-7">
    //         <section className="d-flex justify-content-center">
    //           <Form onSubmit={formik.handleSubmit} className="w-100">
    //             <h1 style={{ color: "white", textAlign: "center" }} className="registration-heading">Welcome to Admin creation</h1>
    //             <Form.Group controlId="formFirstName">
    //               <Form.Label>First Name</Form.Label>
    //               <Form.Control
    //                 type="text"
    //                 placeholder="Enter first name"
    //                 {...formik.getFieldProps("firstName")}
    //                 isInvalid={formik.touched.firstName && !!formik.errors.firstName}
    //               />
    //               <Form.Control.Feedback type="invalid">
    //                 {formik.touched.firstName && formik.errors.firstName}
    //               </Form.Control.Feedback>
    //             </Form.Group>

    //             <Form.Group controlId="formLastName">
    //               <Form.Label>Last Name</Form.Label>
    //               <Form.Control
    //                 type="text"
    //                 placeholder="Enter last name"
    //                 {...formik.getFieldProps("lastName")}
    //                 isInvalid={formik.touched.lastName && !!formik.errors.lastName}
    //               />
    //               <Form.Control.Feedback type="invalid">
    //                 {formik.touched.lastName && formik.errors.lastName}
    //               </Form.Control.Feedback>
    //             </Form.Group>

    //             <Form.Group controlId="formEmail">
    //               <Form.Label>Email</Form.Label>
    //               <Form.Control
    //                 type="email"
    //                 placeholder="Enter email"
    //                 {...formik.getFieldProps("email")}
    //                 isInvalid={formik.touched.email && !!formik.errors.email}
    //               />
    //               <Form.Control.Feedback type="invalid">
    //                 {formik.touched.email && formik.errors.email}
    //               </Form.Control.Feedback>
    //             </Form.Group>

    //             <Form.Group controlId="formPassword">
    //               <Form.Label>Password</Form.Label>
    //               <Form.Control
    //                 type="password"
    //                 placeholder="Enter password"
    //                 {...formik.getFieldProps("password")}
    //                 isInvalid={formik.touched.password && !!formik.errors.password}
    //               />
    //               <Form.Control.Feedback type="invalid">
    //                 {formik.touched.password && formik.errors.password}
    //               </Form.Control.Feedback>
    //             </Form.Group>

    //             <Form.Group controlId="formConfirmPassword">
    //               <Form.Label>Confirm Password</Form.Label>
    //               <Form.Control
    //                 type="password"
    //                 placeholder="Confirm password"
    //                 {...formik.getFieldProps("confirm_password")}
    //                 isInvalid={formik.touched.confirm_password && !!formik.errors.confirm_password}
    //               />
    //               <Form.Control.Feedback type="invalid">
    //                 {formik.touched.confirm_password && formik.errors.confirm_password}
    //               </Form.Control.Feedback>
    //             </Form.Group>

    //             <div className="d-flex justify-content-center mt-3" style={{ flexDirection: "column" }}>
    //               <div>
    //                 <Button
    //                   variant="primary"
    //                   style={{ background: "#501ac8", margin: "0 10px" }}
    //                   type="submit"
    //                   disabled={loading}
    //                 >
    //                   {loading ? "Registering..." : "Register"}
    //                 </Button>
    //                 <Button variant="info" href="/">
    //                   Cancel
    //                 </Button>
    //               </div>
    //               <div className="mt-3" style={{ color: "black" }}>
    //                 Already have an account?{" "}
    //                 <a href="/login" style={{ color: "blue" }}>
    //                   Login
    //                 </a>
    //               </div>
    //             </div>
    //           </Form>
    //         </section>
    //       </div>
    //     </div>
    //   </Container>
    // </div>
     <div style={{ height:"100vh" }} className="login-sec">
                <div className="row " style={{marginRight:"10px" }}>
                    <div className="col-md=4 col-lg-5 login-image-container login-cont">
                        
                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" ></img>
                        <h2 style={{fontSize:"60px !important", color:"#75A313 !important"}}>Architecture Studio</h2>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7 pt-4">
                        <div className="container login-main-div-container login-frm register-fm" style={{ justifyContent: 'center' }}>
                            
                            <section className="d-flex justify-content-center" style={{ backgroundColor: 'white' }}>
                            <Form onSubmit={formik.handleSubmit} className="w-100">
                <h1 style={{  textAlign: "left", fontSize:"30px !important", fontWeight:" 800" }} >Welcome to <span style={{ color:"#75A313 !important"}}>Admin creation</span></h1>
                <Form.Group controlId="formFirstName">
                  {/* <Form.Label>First Name</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    {...formik.getFieldProps("firstName")}
                    isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.touched.firstName && formik.errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formLastName">
                  {/* <Form.Label>Last Name</Form.Label> */}
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    {...formik.getFieldProps("lastName")}
                    isInvalid={formik.touched.lastName && !!formik.errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.touched.lastName && formik.errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail">
                  {/* <Form.Label>Email</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...formik.getFieldProps("email")}
                    isInvalid={formik.touched.email && !!formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.touched.email && formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    {...formik.getFieldProps("password")}
                    isInvalid={formik.touched.password && !!formik.errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.touched.password && formik.errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                  {/* <Form.Label>Confirm Password</Form.Label> */}
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                    {...formik.getFieldProps("confirm_password")}
                    isInvalid={formik.touched.confirm_password && !!formik.errors.confirm_password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.touched.confirm_password && formik.errors.confirm_password}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-flex justify-content-center mt-3" style={{ flexDirection: "column" }}>
                  <div>
                    <Button
                      variant="primary"
                      style={{ background: "#501ac8", margin: "0 10px" }}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Registering..." : "Register"}
                    </Button>
                    <Button variant="info" href="/">
                      Cancel
                    </Button>
                  </div>
                  <div className="mt-3" style={{ color: "black" }}>
                    Already have an account?{" "}
                    <a href="/login" style={{ color: "blue" }}>
                      Login
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

export default RegistrationPage;
