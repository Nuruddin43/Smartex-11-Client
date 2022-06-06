import axios from "axios";
import React, { useEffect, useState } from "react";

const MyItem = () => {
  const [myitems, setMyitems] = useState([]);
  useEffect(() => {
    const getMyitems = async () => {
      const url = "https://young-taiga-28195.herokuapp.com/myitem";
      const { data } = await axios.get(url);
      setMyitems(data);
    };
    getMyitems();
  }, []);
  return (
    <div
      className="shadow p-3 mb-5 bg-white rounded"
      style={{ fontFamily: "sans-serif" }}
    >
      <img src={myitems.img} alt="" />
      <h2>{myitems.name}</h2>
      <p>Price: ${myitems.price}</p>
      <p>
        <small>{myitems.description}</small>
      </p>

      <p>Supplier Name: {myitems.SupplierName}</p>
    </div>
  );
};

export default MyItem;
