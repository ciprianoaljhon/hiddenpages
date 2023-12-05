import React, { useState } from "react";

function BookType({ prices, className }) {
  const [selected, setSelected] = useState(prices[0].bookType);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <label htmlFor="book-format" className="font-semibold text-md pr-2">
        Book Format:
      </label>
      <select
        name="book-format"
        value={selected}
        onChange={handleChange}
        className="border-neutral-3 border-2 border-solid px-2 py-1 rounded-md bg-transparent cursor-pointer"
      >
        {prices.map((price, index) => (
          <option key={index} value={price.bookType}>
            {price.bookType} - ₱{price.price}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BookType;
