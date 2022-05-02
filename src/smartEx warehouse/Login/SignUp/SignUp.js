import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const userName = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const username = userName.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
  };

  const navigateLogin = (event) => {
    navigate("/login");
  };
  return (
    <div className="container w-50 mx-auto mt-4 row">
      <div className="">
        <Form
          onSubmit={handleSignUp}
          className="rounded p-5"
          style={{ backgroundColor: "#e7eedc" }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              ref={userName}
              type="text"
              placeholder="User Name"
              required
            />
          </Form.Group>
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
          <Button
            onClick={navigateLogin}
            style={{ backgroundColor: "#F08B04" }}
            variant="primary"
            type="submit"
          >
            Already have an account
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
