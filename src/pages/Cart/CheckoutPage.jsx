import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useLoggedInContext } from "../../hooks/LoggedInContext";
import { useCart } from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useOrderForm } from "./FormStateManagement";
import { baseURL } from "../../config/data";
import { success, failed } from "../../config/statusNotif";

import axios from "axios";
const CheckoutPage = () => {
  const { setLogIn, loggedIn } = useLoggedInContext();
  const { userId } = JSON.parse(sessionStorage.getItem("sessionData"));
  const [isOrderSummaryExpanded, setOrderSummaryExpanded] = useState(false);
  const { placeOrder, orderSummary, loading, cart, setCart } = useCart();
  const location = useLocation();
  const pathname = location.pathname;
  const pathEnd = pathname.split("/").pop();
  const { getOrderFormState, setOrderFormState } = useOrderForm();
  const { name, contactNumber, address, paymentMethod } = getOrderFormState();
  const navigate = useNavigate();
  const handleNameChange = (event) =>
    setOrderFormState({ ...getOrderFormState(), name: event.target.value });
  const handleContactNumberChange = (event) =>
    setOrderFormState({
      ...getOrderFormState(),
      contactNumber: event.target.value,
    });
  const handleAddressChange = (event) =>
    setOrderFormState({ ...getOrderFormState(), address: event.target.value });
  const handlePaymentMethodChange = (event) =>
    setOrderFormState({
      ...getOrderFormState(),
      paymentMethod: event.target.value,
    });

  useEffect(() => {
    scrollTo(0, 0);
    setLogIn(true);
  }, []);

  const calculateSubtotal = () => {
    const prices = orderSummary.map(({ book, quantity }) => {
      return book.prices[0].price * quantity;
    });
    return prices.reduce((acc, currVal) => acc + currVal);
  };

  const toggleOrderSummary = () => {
    setOrderSummaryExpanded(!isOrderSummaryExpanded);
  };
  const totalPrice = calculateSubtotal();
  const subTotal =
    pathEnd == "rent"
      ? totalPrice * 0.5
      : pathEnd == "used"
      ? totalPrice - totalPrice * 0.3
      : totalPrice;
  const shippingFee = 10;

  async function handlePlaceOrder(e) {
    const prices = orderSummary.map(({ book, quantity }) => {
      return book.prices[0].price * quantity;
    });
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/orders/place-order`, {
        books: orderSummary,
        prices: prices,
        user: userId,
        recipient: name,
        deliveryAddress: address,
        contactNumber: contactNumber,
        modeOfPayment: paymentMethod,
        orderSubTotal: calculateSubtotal(),
      });

      console.log("Order placed successfully:", response.data);
      const filteredArray = cart.filter((item) => !orderSummary.includes(item));
      success("Order Placed!");
      setCart(filteredArray);
      navigate("/home");
    } catch (error) {
      failed("Can't place your order :<");
      console.error("Error placing order:", error);
    }
  }
  return (
    <div className="h-full">
      <div className="pt-20 h-max flex items-center justify-center min-h-screen">
        <div className="max-w-2xl w-full bg-color-1 p-8 shadow">
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          {orderSummary ? (
            <>
              <div className="mb-6">
                <button
                  onClick={toggleOrderSummary}
                  className="flex items-center justify-between w-full py-2 px-4 bg-color-2 rounded-md focus:outline-none"
                >
                  <div className="flex items-center w-full">
                    <h4 className="text-lg font-bold mr-auto">
                      Order Summary{" "}
                    </h4>
                    <h6 className="text-accent pr-4">₱ {subTotal}</h6>
                  </div>
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform duration-300 transform ${
                      isOrderSummaryExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`mt-4 transition-max-height duration-300 ease-in-out  ${
                    isOrderSummaryExpanded
                      ? " max-h-40 overflow-scroll"
                      : " max-h-0 overflow-hidden"
                  }`}
                >
                  <div
                    className={`mt-4 transition-max-height duration-300 ease-in-out overflow-scroll ${
                      isOrderSummaryExpanded
                        ? " max-h-40 overflow-scroll"
                        : " max-h-0 overflow-hidden"
                    }`}
                  >
                    {orderSummary && orderSummary.length > 0 ? (
                      <ul>
                        {orderSummary.map(({ book, quantity }) => {
                          return (
                            <ul
                              key={book._id}
                              className="flex justify-between items-center py-2 border-b"
                            >
                              <p>
                                <p>
                                  {book.title}&nbsp; x{quantity}
                                </p>
                              </p>
                              <p>
                                ₱{" "}
                                {pathEnd == "rent"
                                  ? totalPrice * 0.5
                                  : pathEnd == "used"
                                  ? totalPrice - totalPrice * 0.3
                                  : (book.prices[0].price * quantity).toFixed(
                                      2
                                    )}
                              </p>
                            </ul>
                          );
                        })}
                      </ul>
                    ) : (
                      <p>No Order Summary Available</p>
                    )}
                  </div>
                </div>
              </div>

              <form onSubmit={handlePlaceOrder}>
                <div className="mb-4">
                  <label
                    htmlFor="paymentMethod"
                    className="block text-sm font-medium mb-1"
                  >
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    value={paymentMethod}
                    onChange={handlePaymentMethodChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="cod">Cash On Delivery</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNameChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium mb-1"
                  >
                    Contact Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your number"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium mb-1"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your address"
                    rows={4}
                  ></textarea>
                  <button className="primary-btn px-6 py-2">Place Order</button>
                </div>
              </form>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
