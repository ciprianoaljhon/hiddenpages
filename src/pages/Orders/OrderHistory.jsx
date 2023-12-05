import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/data";
import { useLoggedInContext } from "../../hooks/LoggedInContext";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const formatDateString = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);
  const dayOfWeek = daysOfWeek[date.getDay()];
  return `${formattedDate} ${dayOfWeek}`;
};

const OrderHistory = () => {
  const { setLogIn } = useLoggedInContext();
  const [orders, setOrders] = useState([]);
  const { userId } = JSON.parse(sessionStorage.getItem("sessionData"));
  const [date, setDate] = useState({ orderDate: {}, receiveDate: {} });

  useEffect(() => {
    setLogIn(true);
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(
        `${baseURL}/orders/get-orders/${userId}`
      );
      setOrders(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(orders);

  return (
    <div className="w-full h-max px-4 min-h-screen">
      {orders.length > 0 ? (
        <div className="container  w-full pt-24 items-center justify-center  ">
          <ul className=" flex flex-col gap-4">
            {orders.map((order) => {
              return (
                <li
                  key={order._id}
                  className="border-2 border-solid transition-all duration-300 border-neutral-3 hover:border-main-clr px-4 py-2 flex flex-col"
                >
                  <div className="flex border-main-clr border-b-2 border-solid">
                    <div className="mr-auto">
                      <p>Recipient: {order.recipient}</p>
                      <p>Contact Number: {order.contactNumber}</p>
                      <p>Address: {order.deliveryAddress}</p>
                    </div>
                    <div>
                      <p>Order Place: {formatDateString(order.orderDate)}</p>
                      <p>
                        Estimated Arrival:{" "}
                        {formatDateString(order.estimatedArrival)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h6>Items:</h6>
                    {order.books.map((book, i) => {
                      return (
                        <div>
                          <div className="flex">
                            <p className="mr-auto">
                              {" "}
                              {book.book.title} x {book.quantity}
                            </p>
                            <p>₱{order.prices[i]}</p>
                          </div>
                          <div className=""></div>
                        </div>
                      );
                    })}
                  </div>
                  <h6 className="ml-auto">Sub Total: ₱{order.orderSubTotal}</h6>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className="h-screen w-full flex items-center justify-center">
          <h1>No Orders</h1>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
