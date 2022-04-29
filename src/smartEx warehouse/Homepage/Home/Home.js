import React from "react";
import NewProducts from "../NewProducts/NewProducts";
import Products from "../Products/Products";
import Section2 from "../Section2/Section2";

const Home = () => {
  return (
    <div>
      <Products></Products>
      <NewProducts></NewProducts>
      <Section2></Section2>
    </div>
  );
};

export default Home;
