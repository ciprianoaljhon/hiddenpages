import React from "react";
import { NavLink } from "react-router-dom";
import useCardColors from "../hooks/useCardColors";

function CategoryButton({ category = "default" }) {
  const colors = useCardColors();
  const current = colors[category.toLowerCase()];
  return (
    <NavLink
      to={"/collections"}
      className="category-btn w-56 h-48  p-8 text-left hover:scale-110 hover:shadow-2xl  "
      style={{
        backgroundColor: current.bgColor,
        transition: "transform 0.2s ease",
      }}
    >
      <button className="flex flex-col items-center w-full">
        {current.icon}
        <h5 className="responsive-txt-800">{category}</h5>
        <p className="text-sm ">See More</p>
      </button>
    </NavLink>
  );
}

export default CategoryButton;
