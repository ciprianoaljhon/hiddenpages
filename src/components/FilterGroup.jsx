import React, { useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
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
export default FilterGroup;
const prices = ["0 - 299", "300 - 499", "500 - 799", "800 - 999", "1000+"];
function FilterGroup() {
  const [filters, setFilter] = useState({});
  const categoryFilter = [];
  const priceFilter = [];

  prices.map((filter, i) => {
    priceFilter.push(
      <li key={filter + i} className="filter-group">
        <input type="checkbox" name={filter} />
        <label htmlFor={filter}>{"  " + filter}</label>
      </li>
    );
  });
  bookCategories.map((filter, i) => {
    categoryFilter.push(
      <li key={filter + i} className="filter-group">
        <input type="checkbox" name={filter} />
        <label htmlFor={filter}>{"  " + filter}</label>
      </li>
    );
  });
  return (
    <div className=" shrink-0 relative h-full  w-max ">
      <div className="wrapper h-full overflow-y-scroll">
        <Filter groupName="Categories">{categoryFilter}</Filter>
        <Filter groupName="Price">
          <div className="price-input child:w-20 child:px-2">
            <input type="number" placeholder="Min" className="mr-1" />
            <input type="number" placeholder="Max " />
          </div>
          <div>{priceFilter}</div>
        </Filter>
        <div className="w-full sticky bottom-0 left-0">
          <button className="primary-btn px-4 py-2 bg-main-clr text-white">
            Apply Filter
          </button>
          <button className="primary-btn-2 px-4 py-2 ">Clear Filter</button>
        </div>
      </div>
    </div>
  );
}
