import React, { createContext, useContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPaymentPopup = () => {
    setIsOpen(true);
  };

  const closePaymentPopup = () => {
    setIsOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{ isOpen, openPaymentPopup, closePaymentPopup }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
