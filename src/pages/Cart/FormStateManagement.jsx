import { useState } from "react";

export const useOrderForm = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const setOrderFormState = ({
    name,
    contactNumber,
    address,
    paymentMethod,
  }) => {
    setName(name);
    setContactNumber(contactNumber);
    setAddress(address);
    setPaymentMethod(paymentMethod);
  };

  const getOrderFormState = () => {
    return { name, contactNumber, address, paymentMethod };
  };

  return { setOrderFormState, getOrderFormState };
};
