import React from "react";
import google from "../../../images/google-symbol.png";
import github from "../../../images/icons8-github-500.png";
import facebook from "../../../images/icons8-facebook-500.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  let errorElement;

  if (loading || loading1) {
    return <Loading></Loading>;
  }
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate("/home");
  }
  return (
    <div className="mt-4">
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-black w-50 "></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="bg-black w-50 "></div>
      </div>
      {errorElement}
      <div style={{ fontFamily: "sans-serif" }}>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-white text-black border w-50 d-block mx-auto mb-2"
          style={{ backgroundColor: "#fff" }}
        >
          <img style={{ width: "24px", height: "25px" }} src={google} alt="" />
          <span className="px-1"> Google Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-dark text-white border w-50 d-block mx-auto mb-2"
          style={{ backgroundColor: "black" }}
        >
          <img style={{ width: "24px", height: "25px" }} src={github} alt="" />
          <span className="px-1"> Github Sign In</span>
        </button>
        <button
          style={{ backgroundColor: "#384F81" }}
          className="btn btn-primary text-white border w-50 d-block mx-auto"
        >
          <img
            style={{ width: "24px", height: "25px" }}
            src={facebook}
            alt=""
          />
          <span className="px-1"> Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
