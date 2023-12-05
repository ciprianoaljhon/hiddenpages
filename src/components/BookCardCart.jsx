import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
function BookCardCart({ book, className, removeItem, checked, quantity }) {
  const { _id, title, author, prices } = book;
  const { price } = prices[0];
  const [qty, setQty] = useState(quantity);
  const { handleCheckboxChange, handleQtyChange } = useCart();

  return (
    <li
      className={
        "flex items-center py-4 border-solid border-[1px] px-4 " + className
      }
    >
      <input
        type="checkbox"
        checked={checked}
        name={_id}
        className="mr-3"
        onChange={(e) => {
          handleCheckboxChange(_id, e.target.checked);
        }}
      />
      <label
        htmlFor={_id}
        name="cart-item-label"
        className="w-full flex items-center justify-between"
      >
        <div className="cart-title-container w-1/2">
          <NavLink to={`/collections/${_id}`}>
            <h5>{title}</h5>
          </NavLink>
          <p>by {author}</p>
        </div>
        <p>₱{price}</p>
        <div className="w-max bg-white flex items-center justify-center">
          <button
            className="bg-gray-100 h-max px-2"
            name="decrement"
            onClick={(e) => {
              handleQtyChange(e, _id);
            }}
          >
            -
          </button>
          <input
            className="w-10 text-center"
            type="number"
            value={quantity}
            name="change"
            onChange={(e) => {
              handleQtyChange(e, _id);
            }}
          />
          <button
            className="bg-gray-100 h-max px-2"
            name="increment"
            onClick={(e) => {
              handleQtyChange(e, _id);
            }}
          >
            +
          </button>
        </div>
        <button
          className="px-4 py-2 bg-red-400"
          onClick={(e) => removeItem(_id)}
        >
          X
        </button>
      </label>
    </li>
  );
}

export default BookCardCart;
