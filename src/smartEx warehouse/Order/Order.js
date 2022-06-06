import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `https://young-taiga-28195.herokuapp.com/order?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      setOrders(data);
    };
    getOrders();
  }, [user]);
  return (
    <div className="w-50 bg-light mx-auto mt-4 rounded">
      <h2 className="text-dark text-center">Your Orders: {orders.length}</h2>
    </div>
  );
};

export default Order;
