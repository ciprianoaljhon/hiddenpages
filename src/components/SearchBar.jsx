import React from "react";
import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div id="search-bar" className=" flex items-center relative">
      <input
        placeholder="Search..."
        className="bg-color-2 px-2 py-1 bg-gray-300"
      />
      <IoIosSearch
        className="absolute right-1 cursor-pointer"
        size={24}
      ></IoIosSearch>
    </div>
  );
}

export default SearchBar;
