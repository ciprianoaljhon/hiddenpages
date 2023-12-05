import React from "react";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";
function OrderSummary() {
  const { orderSummary } = useCart();

  const calculateSubtotal = () => {
    const prices = orderSummary.map(({ book, quantity }) => {
      return book.prices[0].price * quantity;
    });
    console.log(prices);
    return prices.reduce((acc, currVal) => acc + currVal);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shippingFee = 10;
    return subtotal + shippingFee;
  };

  return (
    <div className="border-2 border-solid w-1/3 border-neutral h-max max-h-full p-4 bg-neutral-1 flex flex-col rounded-xl">
      <h4 className="mb-4">Your Orders</h4>
      {orderSummary.length > 0 && (
        <div className="grid grid-cols-6 w-full child:font-bold">
          <p className="col-span-3 break-words">Title</p>
          <p className="col-span-1 text-center">Price</p>
          <p className="col-span-1 text-center">Qty.</p>
          <p className="col-span-1 text-center">Total</p>
        </div>
      )}
      <div className="overflow-y-scroll">
        <ul className="">
          {orderSummary.map(({ book, quantity }) => {
            return (
              <li key={book._id} className="grid grid-cols-6 w-full">
                <p className="col-span-3 break-words">{book.title}</p>
                <p className="col-span-1 text-center">
                  ₱{book.prices[0].price}
                </p>
                <p className="col-span-1 text-center">{quantity}</p>
                <p className="col-span-1 text-center">
                  ₱{book.prices[0].price * quantity}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-4 pr-3 w-full">
        <div className="flex justify-between">
          <p>Item Total:</p>
          <p>₱{calculateSubtotal()}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping Fee:</p>
          <p>₱10</p>
        </div>
        <div className="flex justify-between font-bold">
          <p>Subtotal:</p>
          <p>₱{calculateTotal()}</p>
        </div>
      </div>

      <NavLink
        className="w-full text-center mt-4 px-4 py-2 bg-main-clr text-white font-bold"
        to={"/checkout"}
      >
        Checkout
      </NavLink>
    </div>
  );
}

export default OrderSummary;
