import React from "react";
import { Button, Card } from "react-bootstrap";

const NewProduct = ({ newProduct }) => {
  const { name, img, price, discountPrice } = newProduct;
  return (
    <div className=" g-4 col-sm-12 col-md-6 col-lg-4 p-2 text-center ">
      <Card
        className="card shadow-sm p-3 mx-auto bg-white rounded"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" className="card-img-top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Price: <s>${price}</s> ${discountPrice}
          </Card.Text>
          <Button
            style={{
              backgroundVColor: " #ff4e00",
              backgroundImage:
                "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
              border: "none",
            }}
          >
            Pre-Order
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewProduct;
