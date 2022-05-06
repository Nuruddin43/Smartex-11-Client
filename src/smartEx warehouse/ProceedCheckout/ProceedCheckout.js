import React from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ProceedCheckout = () => {
  const { productId } = useParams();
  const [product] = useProductDetail(productId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      product: product.name,
      productId: productId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    axios.post("http://localhost:5000/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Your Order is booked!!!");
        event.target.reset();
      }
    });
  };
  return (
    <div>
      <h2
        className="w-75 mx-auto bg-light text-center mt-5 rounded p-3"
        style={{ fontFamily: "sans-serif" }}
      >
        Please Checkout: {product.name}
        <form
          onSubmit={handlePlaceOrder}
          className="w-100 text-center p-3"
          style={{}}
        >
          <input
            className="w-50 mb-2"
            value={user.displayName}
            type="text"
            name="name"
            placeholder="Name"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-50 mb-2"
            value={user.email}
            type="email"
            name="email"
            placeholder="Email"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-50 mb-2"
            type="text"
            name="product"
            value={product.name}
            placeholder="Product"
            required
            readOnly
          />
          <br />
          <input
            className="w-50 mb-2"
            type="text"
            name="address"
            placeholder="Address"
            required
          />
          <br />
          <input
            className="w-50 mb-2"
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <br />
          <input
            className="rounded"
            style={{
              backgroundVColor: " #ff4e00",
              backgroundImage:
                "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
              border: "none",
            }}
            type="submit"
            value="Place Order"
          />
        </form>
        <ToastContainer />
      </h2>
    </div>
  );
};

export default ProceedCheckout;
