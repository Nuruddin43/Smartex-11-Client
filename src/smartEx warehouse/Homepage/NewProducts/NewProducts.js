import React from "react";
import NewProduct1 from "../../../images/new product/Amazefit-3jpg.jpg";
import NewProduct2 from "../../../images/new product/Apple-watch.jpg";
import NewProduct3 from "../../../images/new product/ddx-metal.jpg";
import NewProduct4 from "../../../images/new product/Haelou-LS04.jpg";
import NewProduct5 from "../../../images/new product/Smart-watch-2.jpg";
import NewProduct6 from "../../../images/new product/w-32.webp";
import NewProduct from "../NewProduct/NewProduct";

const NewProducts = () => {
  const newProducts = [
    { id: 1, price: 200, name: "AMAZEFIT 3", img: NewProduct1 },
    { id: 2, price: 140, name: "APPLE WATCH 2", img: NewProduct2 },
    { id: 3, price: 110, name: "DDX METAL", img: NewProduct3 },
    { id: 4, price: 200, name: "HAELOU LS04", img: NewProduct4 },
    { id: 5, price: 350, name: "SMARTWATCH W46", img: NewProduct5 },
    { id: 6, price: 150, name: "SMARTWATCH W32", img: NewProduct6 },
  ];
  return (
    <div id="new" className="container" style={{ fontFamily: "sans-serif" }}>
      <h2 className="text-center text-white w-25 mx-auto">NEW PRODUCTS</h2>
      <div className="row">
        {newProducts.map((newProduct) => (
          <NewProduct key={newProduct.id} newProduct={newProduct}></NewProduct>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
