import React, { useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
const bookCategories = [
  "Fiction",
  "Non-fiction",
  "Mystery/Thriller",
  "Science Fiction (Sci-Fi)",
  "Fantasy",
  "Romance",
  "Biography",
  "Philosophy",
  "Science",
  "History",
  "Travel",
  "Horror",
  "Comedy",
  "Drama",
  "Mystery",
  "Graphic Novels/Comics",
  "Adventure",
  "Crime",
];
export const Filter = ({ children, groupName }) => {
  const [expanded, setExpanded] = useState(true);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={
        "wrapper border-gray-400 border-solid border-[1px] expand-transition px-4 overflow-hidden hover:cursor-pointer " +
        (expanded ? "max-h-screen" : "max-h-16")
      }
    >
      <div
        className="flex justify-between items-center px-2 py-4 "
        onClick={handleClick}
      >
        <h4>{groupName}</h4>
        {expanded ? <FiMinus size={24} /> : <FiPlus size={24} />}
      </div>
      <ul>{children}</ul>
    </div>
  );
};
const prices = ["0 - 299", "300 - 499", "500 - 799", "800 - 999", "1000+"];

function FilterGroup() {
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    prices: [],
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleCheckboxChange = (filter, group) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[group].includes(filter)) {
        updatedFilters[group] = updatedFilters[group].filter(
          (prevFilter) => prevFilter !== filter
        );
      } else {
        updatedFilters[group] = [...updatedFilters[group], filter];
      }
      return updatedFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      categories: [],
      prices: [],
    });

    // Clear filters from the URL
    navigate("/collections");
  };

  const applyFilters = () => {
    // Construct the query parameters
    const queryParams = new URLSearchParams();

    // Add categories to query parameters
    if (selectedFilters.categories.length > 0) {
      queryParams.append("categories", selectedFilters.categories.join(","));
    }

    // Add prices to query parameters
    if (selectedFilters.prices.length > 0) {
      queryParams.append("prices", selectedFilters.prices.join(","));
    }

    // Update the URL with the constructed query parameters
    navigate(`/collections?${queryParams.toString()}`);
  };

  const categoryFilter = bookCategories.map((filter, i) => (
    <li key={filter + i} className="filter-group">
      <input
        type="checkbox"
        name={filter}
        checked={selectedFilters.categories.includes(filter)}
        onChange={() => handleCheckboxChange(filter, "categories")}
      />
      <label htmlFor={filter}>{"  " + filter}</label>
    </li>
  ));

  const prices = ["0 - 299", "300 - 499", "500 - 799", "800 - 999", "1000+"];
  const priceFilter = prices.map((filter, i) => (
    <li key={filter + i} className="filter-group">
      <input
        type="checkbox"
        name={filter}
        checked={selectedFilters.prices.includes(filter)}
        onChange={() => handleCheckboxChange(filter, "prices")}
      />
      <label htmlFor={filter}>{"  " + filter}</label>
    </li>
  ));

  return (
    <div className="shrink-0 relative h-full w-max">
      <div className="wrapper h-full overflow-y-scroll">
        <Filter
          groupName="Categories"
          onCheckboxChange={(filter) =>
            handleCheckboxChange(filter, "categories")
          }
          selectedFilters={selectedFilters.categories}
        >
          {categoryFilter}
        </Filter>
        <Filter
          groupName="Price"
          onCheckboxChange={(filter) => handleCheckboxChange(filter, "prices")}
        >
          <div className="price-input child:w-20 child:px-2">
            <input type="number" placeholder="Min" className="mr-1" />
            <input type="number" placeholder="Max " />
          </div>
          <div>{priceFilter}</div>
        </Filter>
        <div className="w-full sticky bottom-0 left-0">
          <button
            onClick={applyFilters}
            className="primary-btn px-4 py-2 bg-main-clr text-white"
          >
            Apply Filter
          </button>
          <button onClick={clearFilters} className="primary-btn-2 px-4 py-2 ">
            Clear Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterGroup;
