import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://young-taiga-28195.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useProducts;
