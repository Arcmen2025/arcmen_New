"use client";
import React, { useState } from "react";
import { otpVerification } from "../../../api/UserAuthentication";
import { resentOtp } from "../../../api/UserAuthentication";
import Swal from "sweetalert2";
import "./otpverification.scss";
// import { useMyContext } from "../../../components/ContectAPIProvide";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Import js-cookie
import { Container, Button, Form } from "react-bootstrap";

function OTP({
  separator,
  length,
  value,
  onChange,
}) {
  const inputRefs = React.useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case " ":
        event.preventDefault();
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case "ArrowRight":
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case "Delete":
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });

        break;
      case "Backspace":
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (
        inputRefs.current[indexToEnter].value &&
        indexToEnter < currentIndex
      ) {
        indexToEnter += 1;
      } else {
        break;
      }
    }
    onChange((prev) => {
      const otpArray = prev.split("");
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join("");
    });
    if (currentValue !== "") {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes("text/plain")) {
      let pastedText = clipboardData.getData("text/plain");
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (
          inputRefs.current[indexToEnter].value &&
          indexToEnter < currentIndex
        ) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split("");

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? " ";
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(""));
    }
  };

  return (
    <div style={{ display: "flex", gap: 1, alignItems: "center" }}>
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <Form.Control
            type="text"
            aria-label={`Digit ${index + 1} of OTP`}
            ref={(ele) => {
              inputRefs.current[index] = ele;
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onChange={(event) => handleChange(event, index)}
            onClick={(event) => handleClick(event, index)}
            onPaste={(event) => handlePaste(event, index)}
            value={value[index] ?? ""}
            style={{ width: "40px", textAlign: "center" }}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function OTPInput() {
  const [otp, setOtp] = useState("");
  const paramsData = "OTP Verification";
  const [loading, setLoading] = useState(false);
  // const { value } = useMyContext();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setLoading(true);
    // try {
      // const res = await otpVerification({ email: value, otp: otp.trim() }); // Adjust based on how your API expects data
      // console.log("Logged in user:", res);

    //   if (res.isError) {
    //     console.log("Error logging in user:", res);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: `${res.data.message}, please login again`,
    //     });
    //   } else {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Success!",
    //       text: res.message,
    //     });
    //     setOtp(""); // Reset OTP after successful verification
    //     Cookies.set("token", res.token, { expires: 7 });
    //     setTimeout(() => {
    //       window.location.assign("/user");
    //     }, 3000);
    //   }
    // } catch (error) {
    //   console.error("Failed to log in user:", error);
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "An error occurred: " + error,
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleResendOTP = async () => {
    // setLoading(true);
    // const data = { email: value };
    // try {
    //   const res = await resentOtp(data);
    //   console.log("Resent OTP:", res);

    //   if (res.isError) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: res.data.message,
    //     });
    //   } else {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Success!",
    //       text: res.message,
    //     });
    //   }
    // } catch (error) {
    //   console.error("Failed to resend OTP:", error);
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "An error occurred: " + error,
    //   });
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div>
      
      <Container className="login-main-container">
        <div className="container login-main-div-container" style={{ justifyContent: "center" ,backgroundImage: `linear-gradient( 90.1deg,  rgba(8,81,98,1) 14.5%, rgba(198,231,249,1) 135.4% )` }}>
          <div className="col-sm-12 col-lg-12 text-center">
            <h1 className="text-center text-black">Enter OTP Received</h1>
            <section className="d-flex justify-content-center" >
              <Form onSubmit={handleSubmit} className="w-100">
                <div className="w-100" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <OTP
                    separator={<span>-</span>}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                    length={4}
                  />
                </div>
                <div className="w-100 m-4"  style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                  <Button
                    variant="primary"
                    className="mt-2"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Verify OTP"}
                  </Button>
                  <Button
                    variant="info"
                    className="mt-2"
                    onClick={handleResendOTP}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Resend OTP"}
                  </Button>
                </div>
              </Form>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
