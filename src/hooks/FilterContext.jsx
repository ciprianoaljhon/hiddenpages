import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  // Fetch data from the backend and set both filtered and original data
  const fetchData = async () => {
    try {
      const response = await axios.get("YOUR_BACKEND_API_ENDPOINT");
      setOriginalData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Apply filters based on selected filters
  const applyFilters = (selectedFilters) => {
    // Implement your logic to filter data based on selected filters
    // You may need to modify this part based on your backend API structure and filtering requirements
    const filteredResult = originalData.filter((item) => {
      // Implement your filtering logic here
      return true; // Placeholder, modify as needed
    });

    setFilteredData(filteredResult);
  };

  // Clear filters and reset to the original data
  const clearFilters = () => {
    setFilteredData(originalData);
  };

  return (
    <FilterContext.Provider
      value={{ filteredData, fetchData, applyFilters, clearFilters }}
    >
      {children}
    </FilterContext.Provider>
  );
};
