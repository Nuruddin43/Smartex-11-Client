import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productName } = useParams();

  return (
    <div className="product shadow p-3 mb-5 bg-white rounded ">
      <h2>{productName}</h2>

      <Button
        style={{
          backgroundVColor: " #ff4e00",
          backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
          border: "none",
          marginRight: "10px",
        }}
      >
        Delivery
      </Button>
      <Button
        style={{
          backgroundVColor: " #ff4e00",
          backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
          border: "none",
        }}
      >
        Proceed Checkout
      </Button>
    </div>
  );
};

export default ProductDetail;
