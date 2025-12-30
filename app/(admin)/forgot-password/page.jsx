"use client";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgotPassword } from "../../../api/UserAuthentication";
import Swal from "sweetalert2";
import "./forgotpassword.scss";
import { FaFacebookSquare } from "react-icons/fa";

const LoginPage = () => {
  const paramsData = "Forgot Password";
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true); // Start loading
      try {
        const res = await forgotPassword(values);
        // console.log("Logged in user:", res);

        if (res.isError) {
          console.log("Error logging in user:", res);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Admin Not Found",
          });
        } 
        // else {
        //   console.log("res----------", res);
        //   Swal.fire({
        //     icon: "success",
        //     title: "Success!",
        //     text: res.message,
        //   });
        //   resetForm();
        // }
        else {
          console.log("res----------", res);
          Swal.fire({
            icon: "success",
            title: "Success!",
            // html: `Password reset successful! <br>
            //        <a href="/login">Click here to login</a> with your registered email ID.`,
            text:"Password reset link sent to your email."
          });
          resetForm();
        }
        
      } catch (error) {
        console.error("Failed to log in user:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Admin Not Found",
        });
      } finally {
        setLoading(false); // End loading
      }
    },
  });

  return (
   
     <div style={{ height:"100vh" }} className="login-sec">
                <div className="row " style={{marginRight:"10px" }}>
                    <div className="col-md=4 col-lg-5 login-image-container login-cont">
                        
                        <img src="https://res.cloudinary.com/dpflidsbg/image/upload/v1735189920/arcmen/Icons/arcmen-logo.svg" alt="Arcmen Logo" ></img>
                        <h2 style={{fontSize:"60px !important", color:"#75A313 !important"}}>Architecture Studio</h2>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-7 pt-4">
                        <div className="container login-main-div-container login-frm" style={{ justifyContent: 'center' }}>
                            <h1 className=" text-black" style={{fontSize:"30px !important", fontWeight:" 800"}}>Reset Your Password</h1>
                            <h6 className=" text-black">Please enter your login credentials to access your account.</h6>
                            <section className="d-flex justify-content-center" style={{ backgroundColor: 'white' }}>
                            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...formik.getFieldProps("email")}
                    isInvalid={!!formik.errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <div
                  className="d-flex justify-content-center mt-3"
                  style={{ flexDirection: "column" }}
                >
                  <div>
                    <Button
                      variant="primary"
                      style={{ background: "#501ac8", marginRight: "10px" }}
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Please wait" : "Submit"}
                    </Button>
                    <Button variant="info" style={{ marginLeft: "10px" }} href="/forgot-password">
                      Cancel
                    </Button>
                  </div>
                  {/* <div
                    className="mt-3"
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span className="text-black">
                      {" "}
                      Don’t have an account?&nbsp;
                      <a
                        href="/registration"
                        className="login-page-registration"
                        style={{ color: "blue" }}
                      >
                        Create one now!
                      </a>{" "}
                      &nbsp;
                    </span>
                  </div> */}
                   <div className="mt-3" style={{ color: "black" }}>
                    Already have an account?{" "}
                    <a href="/login" style={{ color: "blue" }}>
                      Login
                    </a>
                  </div>
                  {/* <div className="login-page-option">Or</div> */}
                  {/* <div className="login-page-option-oauth-container"> */}
                    {/* <div className="login-page-option-oauth-google text-black">
                      <a
                        href="#"
                        className="login-page-option-oauth-google-connect"
                      >
                        <img
                          src="/images/google.png"
                          alt="Google logo"
                          width={20}
                          height={20}
                        />{" "}
                        Google
                      </a>
                    </div> */}
                    {/* <div className="login-page-option-oauth-facebook">
                      <a
                        href=""
                        className="login-page-option-oauth-facebook-connect"
                      >
                        <FaFacebookSquare style={{ color: "blue" }} /> Facebook
                      </a>
                    </div> */}
                  {/* </div> */}
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
