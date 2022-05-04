import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialSiteLogin from "../SocialSiteLogin/SocialSiteLogin";
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

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateSignUP = (event) => {
    navigate("/signup");
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
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
          <Button onClick={navigateSignUP} variant="danger" type="submit">
            Create an new account
          </Button>
          <SocialSiteLogin></SocialSiteLogin>
        </Form>
      </div>
    </div>
  );
};

export default Login;
