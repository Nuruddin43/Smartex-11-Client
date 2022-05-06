import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";

const ProductDetail = () => {
  const { productId } = useParams();

  const [product] = useProductDetail(productId);

  return (
    <div className="product shadow p-3 mb-5 bg-white rounded">
      <div className="mx-auto">
        <Card
          className="w-50 mx-auto"
          style={{
            position: "sticky",
            top: "0px",
          }}
        >
          <Card.Img className="w-50 mx-auto" variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>

            <h5>${product.price}</h5>
            <Card.Text>{product.description}</Card.Text>
            <p> Quantity: {product.Quantity}</p>
            <p>Supplier Name: {product.SupplierName}</p>
            <Button
              style={{
                backgroundVColor: " #ff4e00",
                backgroundImage:
                  "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
                border: "none",
                marginRight: "10px",
              }}
            >
              Delivery
            </Button>

            <Link to={`/proceedcheckout/${productId}`}>
              <Button
                style={{
                  backgroundVColor: " #ff4e00",
                  backgroundImage:
                    "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
                  border: "none",
                }}
              >
                Proceed Checkout
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
