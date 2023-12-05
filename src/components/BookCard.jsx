import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { BsCartPlus } from "react-icons/bs";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { baseURL } from "../config/data";
import { useCart } from "../hooks/useCart";
import axios from "axios";
import defaultImage from "../assets/defaultImage.jpg";
import { images } from "../config/images";
import { usePopup } from "../hooks/PopupContext";

function BookCard({
  book,
  className,
  classRestrict = "max-w-[250px] w-[200px]",
}) {
  const { _id, title, author, prices, bookTypes, image, discountedPrice } =
    book;
  const { price } = prices[0];
  const { bookType } = bookTypes[0];
  const { addToCart, handlePlaceOrder } = useCart();
  const src = images[image.replace(".jpg", "")] || defaultImage;
  const navigate = useNavigate();
  const handleBuyNow = async (_id) => {
    await handlePlaceOrder(_id);
    navigate("/checkout");
  };
  return (
    <li
      id="book-card"
      title={title}
      className={
        " relative cursor-pointer overflow-hidden rounded-lg h-max " +
        classRestrict
      }
    >
      <picture className="flex flex-col px-4 pt-2 items-center">
        <NavLink to={`/collections/${_id}`}>
          <img src={src} alt="" className={" " + className} />
        </NavLink>
      </picture>

      <div className="relative h-1/3">
        <div
          id="card-title"
          className=" flex flex-col px-4 h-[100px] relative z-10 bg-color pb-2"
        >
          <NavLink
            id=""
            to={`/collections/${_id}`}
            className="flex flex-col h-full "
          >
            <h6 className="w-full overflow-hidden text-ellipsis whitespace-nowrap ">
              {title}
            </h6>

            <p className="mb-auto">by {author}</p>
            <h6>₱ {price}</h6>
            <p>{bookType}</p>
          </NavLink>
        </div>
        <div
          id="card-actions"
          className="z-[0] absolute bottom-3 flex justify-center w-full px-4"
        >
          <button
            // to={`/checkout?id=${_id}&buy=${true}`}
            onClick={() => handleBuyNow(_id)}
            className="px-4 mr-auto rounded-sm bg-main-clr hover:bg-main-clr-opacity text-white"
          >
            Buy
          </button>
          <div className="btn-group flex gap-x-2 ">
            {/* <button className="">
              <BsBookmark size={22} />
            </button> */}
            <button className="" onClick={() => addToCart(_id)}>
              <BsCartPlus size={24} />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BookCard;
