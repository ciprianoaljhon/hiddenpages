import React, { useEffect } from "react";
import FilterGroup from "../../components/FilterGroup";
import BookContainer from "../../components/BookContainer";
import BookCard from "../../components/BookCard";
import { useDataContext } from "../../hooks/DataProvider";
import { useLoggedInContext } from "../../hooks/LoggedInContext";
import LoadingScreen from "../../components/LoadingScreen";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function Collections() {
  const { fetchedData, refetch, loading, setLoading } = useDataContext();
  const { setLogIn } = useLoggedInContext();
  const [recentFetch, setRecentFetch] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setLogIn(true);
    scrollTo(0, 0);
    setRecentFetch(fetchedData);
    refetch();
  }, []);

  // Filter data based on URL query parameters
  const categoriesParam = new URLSearchParams(location.search).get(
    "categories"
  );
  const searchQuery = new URLSearchParams(location.search).get("search") || "";
  const filteredCategories = categoriesParam ? categoriesParam.split(",") : [];
  console.log(filteredCategories);
  const filteredData = fetchedData.filter((book) => {
    const matchesCategory =
      filteredCategories.length === 0 ||
      book.genre.some((genre) => filteredCategories.includes(genre));

    const matchesSearch =
      searchQuery === "" ||
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="flex h-max w-full justify-center">
      <div className="sub-container flex pt-28 h-screen w-full ">
        {loading ? (
          <div className="flex h-full w-full justify-center items-center">
            <LoadingScreen></LoadingScreen>
          </div>
        ) : (
          <>
            <FilterGroup></FilterGroup>
            <div className="flex flex-col h-full py-6 px-10 bg-neutral-1 rounded-r-xl min-w-[80%]">
              <div className="mb-4 flex items-center justify-center ">
                <h4 className="mr-auto">Collections</h4>
                <div>
                  <select
                    name="sorting"
                    id="sorting"
                    className="cursor-pointer shadow-small px-4 py-2"
                  >
                    <option value="default">Default Sorting</option>
                    <option value="newness">Sort by Newness</option>
                    <option value="popularity">Sort by Popularity</option>
                    <option value="low">Sort by Price: Low to High</option>
                    <option value="high">Sort by Price: High to Low</option>
                  </select>
                </div>
              </div>
              {filteredData.length > 0 ? (
                <ul className="flex flex-wrap child:grow h-screen overflow-y-scroll w-full items-center justify-center gap-4">
                  {filteredData.map((book) => (
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
                  ))}
                </ul>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <h1>Can't find books {":<"} </h1>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Collections;
