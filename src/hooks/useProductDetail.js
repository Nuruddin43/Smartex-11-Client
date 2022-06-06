import { useEffect, useState } from "react";

const useProductDetail = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://young-taiga-28195.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return [product];
};
export default useProductDetail;
