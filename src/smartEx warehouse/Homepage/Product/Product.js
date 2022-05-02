import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { name, img, description, price, quantity, supplierName } = product;

  const navigate = useNavigate();
  const productDetailNavigate = (name) => {
    navigate(`/product/${name}`);
  };

  return (
    <div
      className="product shadow p-3 mb-5 bg-white rounded"
      style={{ fontFamily: "sans-serif" }}
    >
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>
        <small>{description}</small>
      </p>
      <p>Quantity: {quantity}</p>
      <p>Supplier Name: {supplierName}</p>
      <Button
        onClick={() => productDetailNavigate(name)}
        style={{
          backgroundVColor: " #ff4e00",
          backgroundImage: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
          border: "none",
        }}
      >
        UPDATE
      </Button>
    </div>
  );
};

export default Product;
