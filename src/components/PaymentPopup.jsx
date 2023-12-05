import React, { useContext, useState } from "react";
import { usePopup } from "../hooks/PopupContext";

const PaymentPopup = () => {
  const { isOpen, closePaymentPopup } = usePopup();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your payment processing logic here
    alert("Payment Successful!");
    closePaymentPopup();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed  z-50 top-0  left-0 w-full h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="expiryDate"
              className="block text-gray-700 font-bold mb-2"
            >
              Expiry Date:
            </label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              placeholder="Enter CVV"
              value={cvv}
              onChange={handleCvvChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Pay Now
            </button>
          </div>
        </form>
        <button
          onClick={closePaymentPopup}
          className="mt-4 text-blue-500 hover:text-blue-700 font-bold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PaymentPopup;
