import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "MSI GEFORCE",
      price: "1140",
      description:
        "NVIDIA® GeForce RTX™ 30 Series Laptop GPUs power the world’s fastest l...",
      img: "https://i.ibb.co/vQ92G7X/apple-macbook.jpg",
      quantity: "12",
      supplierName: "SM TRADERS",
    },
    {
      id: 2,
      name: "MSI GEFORCE",
      price: "1140",
      description:
        "NVIDIA® GeForce RTX™ 30 Series Laptop GPUs power the world’s fastest l...",
      img: "https://i.ibb.co/vQ92G7X/apple-macbook.jpg",
      quantity: "12",
      supplierName: "SM TRADERS",
    },
    {
      id: 3,
      name: "MSI GEFORCE",
      price: "1140",
      description:
        "NVIDIA® GeForce RTX™ 30 Series Laptop GPUs power the world’s fastest l...",
      img: "https://i.ibb.co/vQ92G7X/apple-macbook.jpg",
      quantity: 12,
      supplierName: "SM TRADERS",
    },
    {
      id: 4,
      name: "MSI GEFORCE",
      price: "1140",
      description:
        "NVIDIA® GeForce RTX™ 30 Series Laptop GPUs power the world’s fastest l...",
      img: "https://i.ibb.co/vQ92G7X/apple-macbook.jpg",
      quantity: 12,
      supplierName: "SM TRADERS",
    },
    {
      id: 5,
      name: "MSI GEFORCE",
      price: "1140",
      description:
        "NVIDIA® GeForce RTX™ 30 Series Laptop GPUs power the world’s fastest l...",
      img: "https://i.ibb.co/vQ92G7X/apple-macbook.jpg",
      quantity: 12,
      supplierName: "SM TRADERS",
    },
    {
      id: 6,
      name: "MSI GEFORCE",
      price: "1140",
      description:
        "NVIDIA® GeForce RTX™ 30 Series Laptop GPUs power the world’s fastest l...",
      img: "https://i.ibb.co/vQ92G7X/apple-macbook.jpg",
      quantity: 12,
      supplierName: "SM TRADERS",
    },
  ];

  //   const [products, setProducts] = useState();

  //   useEffect(() => {
  //     fetch("products.json")
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data));
  //   }, []);
  return (
    <div>
      <h2 className="text-center">Our Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
