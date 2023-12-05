import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";
import BookCardCart from "../../components/BookCardCart";
import OrderSummary from "./OrderSummary";
import { useCart } from "../../hooks/useCart";
import { useLoggedInContext } from "../../hooks/LoggedInContext";

function Cart() {
  const {
    orderSummary,
    setOrderSummary,
    placeOrder,
    handlePlaceOrder,
    cart,
    localCart,
    setCart,
    addToCart,
    clearCart,
    removeItem,
    getCart,
    handleCheckboxChange,
    handleSelectAll,
    loading,
    setLoading,
    userId,
  } = useCart();

  console.log(userId);
  useEffect(() => {
    setOrderSummary([]);
    scrollTo(0, 0);
    getCart();
  }, []);
  console.log(cart);

  return (
    <section id="cart-sect" className="h-screen">
      <div id="sub-container" className="h-full pt-28 w-full flex">
        {!loading ? (
          <>
            <div
              className={
                "wrapper flex flex-col h-full overflow-scroll " +
                (orderSummary.length > 0 ? "w-2/3" : "w-full")
              }
            >
              <h3 className="">My Cart</h3>

              <div className="h-max flex w-full my-4 px-4">
                <input
                  type="checkbox"
                  name="selectAll"
                  className="mr-3"
                  onChange={handleSelectAll}
                />
                <label
                  htmlFor="selectAll"
                  className="flex w-full justify-between items-center"
                >
                  <h5 className="w-1/2 font-bold">Select All</h5>
                  <h5 className="font-bold">Price</h5>
                  <h5 className="font-bold">Quantity</h5>
                  <button
                    className="font-bold text-red-500"
                    onClick={clearCart}
                  >
                    Clear All
                  </button>
                </label>
              </div>
              {userId ? (
                <div className="cart-container h-full w-full overflow-y-scroll">
                  {console.log(cart)}
                  {cart.length > 0 ? (
                    <ul className="cart-container h-full w-full">
                      {cart.map(({ book, quantity }) => {
                        const isChecked = orderSummary.some(
                          (order) => order.book._id === book._id
                        );
                        return (
                          <BookCardCart
                            key={book._id}
                            checked={isChecked}
                            book={book}
                            quantity={quantity}
                            className="w-full"
                            removeItem={removeItem}
                          />
                        );
                      })}
                    </ul>
                  ) : (
                    <h3 className="text-center">No Items</h3>
                  )}
                </div>
              ) : (
                <h4 className="w-full text-center">
                  Access Blocked
                  <p>
                    <NavLink to="/auth" className="underline">
                      Log in here
                    </NavLink>
                  </p>
                </h4>
              )}
            </div>
            {orderSummary.length > 0 ? (
              <OrderSummary orderSummary={orderSummary} />
            ) : (
              ""
            )}
          </>
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <LoadingScreen />
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
