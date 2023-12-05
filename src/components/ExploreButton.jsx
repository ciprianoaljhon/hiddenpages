import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useAuthContext } from "../hooks/AuthTypeContext";
import { NavLink } from "react-router-dom";
function ExploreButton() {
  const { toggleAuthType } = useAuthContext();

  return (
    <NavLink className="mr-2" auth="Sign In" to="/auth">
      <button
        className="relative z-10 flex items-center  mr-auto mt-4 pl-4 pr-2 py-2 primary-btn explore-btn"
        onClick={toggleAuthType}
      >
        EXPLORE <IoIosArrowRoundForward className="right-[-30px] " size={30} />
      </button>
    </NavLink>
  );
}

export default ExploreButton;
