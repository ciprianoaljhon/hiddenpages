import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function FeaturedBooksContainer({ children, onClick, topPadding = "pt-0" }) {
  return (
    <div
      className={
        "w-full flex overflow-x-scroll h-[95%] snap-mandatory hide-scrollbar " +
        topPadding
      }
    >
      {children}
    </div>
  );
}

export default FeaturedBooksContainer;
