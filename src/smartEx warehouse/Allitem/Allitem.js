import React, { useEffect, useState } from "react";
// import useProducts from "../../hooks/useProducts";
import Product from "../Homepage/Product/Product";

const Allitem = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id="products" className="mt-5">
      <div className="products-container mx-5">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Allitem;
