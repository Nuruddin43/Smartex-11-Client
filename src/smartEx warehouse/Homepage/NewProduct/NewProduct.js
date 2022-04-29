import React from "react";
import { Button, Card } from "react-bootstrap";

const NewProduct = ({ newProduct }) => {
  const { name, img, price } = newProduct;
  return (
    <div className=" g-4 col-sm-12 col-md-6 col-lg-4 p-2 text-center">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" className="card-img-top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Price: {price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewProduct;
