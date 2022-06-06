import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateDelivered = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://young-taiga-28195.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <div>
        <h2>Updating Product: {product.name}</h2>
      </div>
    </div>
  );
};

export default UpdateDelivered;
