import React from "react";
import defaultImage from "../assets/defaultImage.jpg";
import { NavLink } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useImage } from "../hooks/useImage";
function BookCardLandscape({ className, book }) {
  const { addToCart } = useCart();
  const { _id, title, author, prices, genre, image } = book;
  const { price } = prices[0];
  const imgSrc = useImage(image ? image : "");
  return (
    <div
      id="book-card-landscape"
      className={"flex px-4 py-2 gap-x-4 " + className}
    >
      <NavLink to={`/collections/${_id}`}>
        <img src={imgSrc} alt="" className="min-w-[120px] max-w-[120px]" />
      </NavLink>
      <div className=" card-landscape  w-2/3 flex flex-col grow ">
        <div className="wrapper overflow-scroll mb-auto ">
          <NavLink to={`/collections/${_id}`}>
            <p className="font-bold text-lg">{title}</p>
            <p className="text-neutral">{author}</p>
            <p className="font-bold mb-2 text-base">₱{price}</p>
          </NavLink>
          <ul className="flex gap-x-1">
            {genre.map((genre) => {
              return (
                <p
                  key={genre}
                  className="bg-neutral-3 px-2 py-1 rounded-sm text-xs"
                >
                  {genre}
                </p>
              );
            })}
          </ul>
        </div>
        <button
          className="w-full py-2 bg-main-clr text-white hover:bg-main-clr-opacity justify-self-stretch "
          onClick={() => addToCart(_id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BookCardLandscape;
