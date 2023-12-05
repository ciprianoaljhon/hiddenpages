// import { createContext, useContext, useState } from "react";
// import { useLoggedInContext } from "./LoggedInContext";
// import { useDataContext } from "./DataProvider";
// import axios from "axios";
// import { baseURL } from "../config/data";
// import { useEffect } from "react";
// const CartContext = createContext();
// export const useCartContext = () => useContext(CartContext);

// export const CartItemProvider = ({ children }) => {

//   const { userAuth } = useLoggedInContext();

//   async function updateCart(cart) {
//     setBooks(cart);
//   }
//   return (
//     <CartContext.Provider
//       value={{ books, updateCart, getCart, orderSummary, setOrderSummary }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
