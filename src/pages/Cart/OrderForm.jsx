// OrderForm.js
import React from "react";
import { useOrderForm } from "./FormStateManagement";

function OrderForm() {
  const { getOrderFormState, setOrderFormState } = useOrderForm();
  const { name, contactNumber, address, paymentMethod } = getOrderFormState();

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

  return (
    <>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-1">
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
        <label htmlFor="number" className="block text-sm font-medium mb-1">
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
        <label htmlFor="address" className="block text-sm font-medium mb-1">
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
      </div>

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
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          {/* Add more payment methods as needed */}
        </select>
      </div>

      <button className="primary-btn">Place Order</button>
    </>
  );
}

export default OrderForm;
