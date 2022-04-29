import React from "react";
import { Button } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  const { name, img, description, price, quantity, supplierName } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <p>Quantity: {quantity}</p>
      <p>Supplier Name: {supplierName}</p>
      <Button variant="primary">UPDATE</Button>
    </div>
  );
};

export default Product;
