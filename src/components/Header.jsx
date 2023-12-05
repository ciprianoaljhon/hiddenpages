import { CiShoppingCart, CiBookmark, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/AuthTypeContext";
import { FaAngleDown } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import Logo from "../assets/Logo";
import SearchBar from "./SearchBar";
import { useLoggedInContext } from "../hooks/LoggedInContext";
import { IconContext } from "react-icons/lib";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
function Header() {
  const { toggleAuthType } = useAuthContext();
  const { loggedIn, userAuth } = useLoggedInContext();
  const { userId } = JSON.parse(sessionStorage.getItem("sessionData")) || "";
  const [darkTheme, setDarkTheme] = useState(false);
  const handleChangeTheme = () => {
    const htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.classList.toggle("dark-theme");
    setDarkTheme(!darkTheme);
  };
  console.log(userId);
  useEffect(() => {
    // const sessionData =
    // if (sessionData && loggedIn) {
    //   setUserId(sessionData.userId);
    // }
  }, [loggedIn]);
  return (
    <header className="flex w-full shadow-xl bg-color-2 relative">
      <nav className="pr-6 flex items-center w-full fixed z-50 top-0 left-0 px-10 bg-neutral-3 shadow-xl ">
        {/* surround in div 
        only available after logging in */}
        <NavLink
          to="/"
          className={"font-bold pr-12 " + (loggedIn ? "" : "mr-auto")}
        >
          <Logo></Logo>
        </NavLink>
        {loggedIn ? (
          <IconContext.Provider value={{ size: "28px" }}>
            <div id="page-links" className="flex gap-x-4 mr-auto">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/collections">Collections</NavLink>
              {/* <NavLink to="/community">Community</NavLink> */}
            </div>
            <div className="user-nav-container flex h-full items-center gap-x-4">
              <SearchBar></SearchBar>
              {/* <button onClick={() => handleChangeTheme()}>
                {darkTheme ? <CiLight /> : <CiDark />}
              </button> */}
              <NavLink to={`/cart/`}>
                <CiShoppingCart />
              </NavLink>
              <NavLink to="/orders">
                <HiOutlineShoppingBag size={22} />
              </NavLink>
              <div id="drop-down-menu" className="overflow-hidden relative">
                <NavLink to={`profile/`}>
                  <button className="my-6 flex items-center justify-center bg-transparent">
                    <CiUser />
                    <SlArrowDown size={22} className="pl-2" />
                  </button>
                </NavLink>
                <ul
                  id="drop-down-content"
                  className="z-index-100 py-2 mx-4 child:pb-2 child:px-10 w-max"
                >
                  <li>
                    <NavLink to={`/profile/`}>My Account</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/profile?security">Security</NavLink>
                  </li>
                  <li>
                    <NavLink>Orders</NavLink>
                  </li>
                  <li>
                    <NavLink>Wishlist</NavLink>
                  </li> */}
                  <li>
                    <NavLink to={"/"}>Log out</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </IconContext.Provider>
        ) : (
          <>
            <div>
              <NavLink
                to="/auth"
                auth="Sign In"
                className="primary-btn-2 mr-2 px-6 py-2 "
                onClick={toggleAuthType}
              >
                SIGN IN
              </NavLink>
              <NavLink
                to="/auth"
                auth="Sign Up"
                onClick={toggleAuthType}
                className="primary-btn  px-6 py-2 "
              >
                SIGN UP
              </NavLink>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
