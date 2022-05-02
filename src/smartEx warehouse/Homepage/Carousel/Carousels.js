import React from "react";
import { Button, Carousel } from "react-bootstrap";
import carouselpic1 from "../../../images/carousel/mobile4.jpg";
import carouselpic2 from "../../../images/carousel/tablet2.jpg";
import carouselpic3 from "../../../images/carousel/laptop.jpg";

const Carousels = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselpic3} alt="First slide" />
        <Carousel.Caption>
          <h3>
            <Button
              className="rounded-pill"
              style={{
                // backgroundColor: "#a4508b",
                // backgroundImage:
                //   "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)",
                backgroundVColor: " #ff4e00",
                backgroundImage:
                  "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
                border: "none",
              }}
            >
              Buy Now
            </Button>
            $1999
          </h3>
          <h1>MacBook Pro</h1>
          <p>The most powerful MacBook Pro ever is here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselpic2} alt="Second slide" />

        <Carousel.Caption>
          <h3>
            <Button
              className="rounded-pill"
              style={{
                backgroundVColor: " #ff4e00",
                backgroundImage:
                  "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
                border: "none",
              }}
            >
              Buy Now
            </Button>
            $1199
          </h3>
          <h1>Galaxy Tab S8 Ultra, 512GB, Graphite (Wi-Fi)</h1>
          <p>Find your perfect fit with different tablet models.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carouselpic1} alt="Third slide" />

        <Carousel.Caption>
          <h3>
            <Button
              className="rounded-pill"
              style={{
                backgroundVColor: " #ff4e00",
                backgroundImage:
                  "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
                border: "none",
              }}
            >
              Buy Now
            </Button>
            $1099
          </h3>
          <h1>iPhone 13 Pro Max</h1>
          <p>Bring on the night.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
