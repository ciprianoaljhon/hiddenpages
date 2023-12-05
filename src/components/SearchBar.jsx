import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/collections?search=${encodeURIComponent(searchQuery)}`);
  };
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    // navigate(`/collections?search=${encodeURIComponent(query)}`);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div id="search-bar" className=" flex items-center relative">
        <input
          placeholder="Search..."
          className="bg-color-2 px-2 py-1 bg-gray-300"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <IoIosSearch
          className="absolute right-1 cursor-pointer"
          size={24}
        ></IoIosSearch>
      </div>
    </form>
  );
}

export default SearchBar;
