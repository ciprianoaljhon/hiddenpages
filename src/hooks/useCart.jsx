import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "../config/data";
import { useNavigate } from "react-router-dom";
import { success, failed } from "../config/statusNotif";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderSummary, setOrderSummary] = useState([]);
  const [placeOrder, setPlaceOrder] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(orderSummary);
  const [localOrderSummary, setLocalOrderSummary] = useState([]);
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem("sessionData"));
    setUserId(sessionData ? sessionData.userId : null);
    console.log(sessionData);
  });
  async function addToCart(_id, qty = 1) {
    console.log(_id);
    try {
      setLocalCart((prevCart) => ({
        ...prevCart,
        [_id]: (prevCart[_id] || 0) + qty,
      }));
      const res = await axios.post(`${baseURL}/cart/add`, {
        data: {
          userId: userId,
          bookID: _id,
        },
      });
      success("Added to cart");
    } catch (error) {
      failed("Failed Adding to Cart");
    }
  }

  const getCart = async () => {
    try {
      setLoading(true);
      const url = `${baseURL}/cart/get/:${userId}`;
      const res = await axios.post(url, {
        data: {
          userId: userId,
        },
      });
      setCart(res.data);
    } catch (error) {
      setCart(localCart);
      console.log("Fetching Error:", error);
    } finally {
      setLoading(false);
    }
  };

  async function clearCart() {
    setCart([]);
    setOrderSummary([]);
    try {
      const res = await axios.patch(`${baseURL}/cart/clear`, {
        data: {
          userId: userId,
        },
      });
      setCart(res.data);
    } catch (error) {
      console.log(error);
      alert("Error @clearCart");
    }
  }

  const removeItem = async (bookId) => {
    handleCheckboxChange(bookId, false);
    const updatedCart = cart.filter(({ book }) => book._id !== bookId);
    setCart(updatedCart);
    try {
      const res = await axios.patch(`${baseURL}/cart/remove/${bookId}`, {
        data: {
          userId: userId,
        },
      });
      setCart(updatedCart);
    } catch (error) {
      console.log(error);
      alert("Error Removing Item");
    }
  };

  const handleSelectAll = (e) => {
    setOrderSummary(e.target.checked ? cart : []);
  };
  const handleCheckboxChange = (bookId, isChecked) => {
    if (isChecked) {
      const book = cart.find((item) => item.book._id === bookId);
      if (book) {
        setOrderSummary([...orderSummary, book]);
      }
    } else {
      setOrderSummary(orderSummary.filter((book) => book.book._id !== bookId));
    }
  };

  const handlePlaceOrder = async (bookId) => {
    try {
      const res = await axios.get(`${baseURL}/books/${bookId}`);
      console.log(res.data);
      setOrderSummary([{ book: res.data, quantity: 1 }]);
    } catch (error) {
      console.log("Error @useCart.jsx - handlePlaceOrder " + error);
    }
  };

  const handleQtyChange = (e, _id) => {
    const tagName = e.target.name;
    const updatedCart = cart.map((item) => {
      if (item.book._id === _id) {
        let updatedQuantity;
        if (tagName === "increment") {
          updatedQuantity = item.quantity + 1;
        } else if (tagName === "decrement") {
          updatedQuantity = item.quantity - 1;
        } else {
          updatedQuantity = parseInt(e.target.value);
        }

        if (updatedQuantity <= 0) {
          removeItem(_id);
          return null; // Remove the item from cart by returning null
        }

        return { ...item, quantity: updatedQuantity };
      }
      return item;
    });

    // Filter out null values (removed items) from cart
    const filteredCart = updatedCart.filter((item) => item !== null);

    setCart(filteredCart);
  };
  return (
    <CartContext.Provider
      value={{
        orderSummary,
        setOrderSummary,
        placeOrder,
        handlePlaceOrder,
        cart,
        setCart,
        addToCart,
        clearCart,
        removeItem,
        getCart,
        handleCheckboxChange,
        handleSelectAll,
        handleQtyChange,
        loading,
        setLoading,
        userId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
