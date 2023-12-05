import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../hooks/DataProvider";
import LoadingScreen from "../../components/LoadingScreen";

function FilteredCollection() {
  const { refetch, fetchedData, loading } = useDataContext();
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    refetch();
  });
  return (
    <ul className="flex flex-wrap child:grow h-screen overflow-y-scroll w-full items-center justify-center gap-4">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {filteredData ? (
            <li>
              {filteredData.map((book) => {
                return (
                  <BookCard
                    key={book._id}
                    book={book}
                    title={book.title}
                    desc={book.desc}
                    price={book.price}
                    imgSrc={book.imgSrc}
                    author={book.author}
                    className="h-40"
                  />
                );
              })}
            </li>
          ) : (
            ""
          )}
        </>
      )}
    </ul>
  );
}

export default FilteredCollection;
