import React from "react";
import Product from "../Product/Product";

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
      <h2>Products: {products.length}</h2>
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
