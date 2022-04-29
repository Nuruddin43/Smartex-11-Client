import React from "react";

const Product = ({ product }) => {
  const { name, img, description, price, quantity, supplierName } = product;
  return (
    <div>
      <img src={img} alt="" />
      <h2>This is Product: {name}</h2>
      <p>Price: {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <p>Quantity: {quantity}</p>
      <p>Supplier Name: {supplierName}</p>
    </div>
  );
};

export default Product;
