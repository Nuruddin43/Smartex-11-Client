import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    navigate("/home");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log("user", user);
  }
  return (
    <div className="container w-75 mx-auto mt-4 row">
      <div className="col-12 col-sm-12">
        <Form
          onSubmit={handleSignUp}
          className="rounded p-5"
          style={{ backgroundColor: "#e7eedc" }}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
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
          <SocialLogin></SocialLogin>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
