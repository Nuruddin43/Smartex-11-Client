import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://young-taiga-28195.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id="products" className="mt-5">
      <div className="products-container mx-5">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate("/allitem")}
          className="rounded-pill p-2"
        >
          see all items ➜
        </button>
      </div>
    </div>
  );
};

export default Products;
