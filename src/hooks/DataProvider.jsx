import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { baseURL, offline } from "../config/data";
import { sampleData } from "../config/sampleData.js";
const DataContext = createContext(null);

export const useDataContext = () => useContext(DataContext);
function DataProvider({ children }) {
  const [fetchedData, setFetchedData] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      if (offline) {
        setFetchedData(sampleData);
        return;
      }
      setLoading(true);
      const response = await axios(`${baseURL}/books`);
      const { books, booksByCategory } = response.data;
      setFetchedData(books);
      setFilteredBooks(booksByCategory);
    } catch (error) {
      setFetchedData(sampleData);
      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };
  const handleLoading = (val) => {
    setLoading(val);
  };
  return (
    <DataContext.Provider
      value={{
        fetchedData,
        refetch: fetchData,
        loading,
        handleLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
