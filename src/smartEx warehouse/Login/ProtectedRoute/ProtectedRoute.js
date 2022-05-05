import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const ProtectedRoute = ({ children }) => {
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div className="text-center">
        <h3 className="text-danger">Your Email is not Verified</h3>
        <h5 className="text-success">Please!! Verify your Email</h5>
        <button
          style={{
            backgroundVColor: " #ff4e00",
            backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
          }}
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Send Verification email
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default ProtectedRoute;
