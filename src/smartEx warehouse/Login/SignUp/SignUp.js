import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialSiteLogin from "../SocialSiteLogin/SocialSiteLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(name, email, password);

    createUserWithEmailAndPassword(name, email, password);
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  if (user) {
    navigate("/home");
  }
  return (
    <div className="container w-50 mx-auto mt-4 row">
      <div className="">
        <Form
          onSubmit={handleSignUp}
          className="rounded p-5"
          style={{ backgroundColor: "#e7eedc" }}
        >
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="User Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
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
            Sign Up
          </Button>
          <Button
            onClick={navigateLogin}
            style={{ backgroundColor: "#F08B04" }}
            variant="primary"
            type="submit"
          >
            Already have an account
          </Button>
          <SocialSiteLogin></SocialSiteLogin>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
