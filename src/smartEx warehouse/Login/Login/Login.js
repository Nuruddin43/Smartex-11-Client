// import { sendPasswordResetEmail } from "firebase/auth";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (loading || sending) {
    return <Loading></Loading>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateSignUp = (event) => {
    navigate("/signup");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="container w-50 mx-auto mt-4 row">
      <div className="">
        <Form
          onSubmit={handleLogin}
          className="rounded p-5"
          style={{ backgroundColor: "#e7eedc" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button
            style={{
              marginRight: "10px",
              backgroundImage:
                "linear-gradient(315deg, #0cbaba 0%, #380036 74%)",
            }}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
          <Button onClick={navigateSignUp} variant="danger" type="submit">
            Create an new account
          </Button>
          {errorElement}
          <p>
            Forget Password?
            <button
              className="btn btn-link text-primary pe-auto text-decoration-none"
              onClick={resetPassword}
            >
              Reset Pasword
            </button>
          </p>
          <SocialLogin></SocialLogin>
          <ToastContainer />
        </Form>
      </div>
    </div>
  );
};

export default Login;
