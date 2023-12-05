import React, { useEffect } from "react";
import FilterGroup from "../../components/FilterGroup";
import BookContainer from "../../components/BookContainer";
import BookCard from "../../components/BookCard";
import { useDataContext } from "../../hooks/DataProvider";
import { useLoggedInContext } from "../../hooks/LoggedInContext";
import LoadingScreen from "../../components/LoadingScreen";
import { useState } from "react";
function Collections() {
  const { fetchedData, refetch, loading, setLoading } = useDataContext();
  const { setLogIn } = useLoggedInContext();
  const [recentFetch, setRecentFetch] = useState();
  useEffect(() => {
    setLogIn(true);
    scrollTo(0, 0);
    setRecentFetch(fetchedData);
    refetch;
  }, []);
  console.log(fetchedData);
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
            <div className="flex flex-col h-full py-6 px-10 bg-neutral-1 rounded-r-xl">
              <div className="mb-4 flex items-center justify-center ">
                <h4 className="mr-auto">All Collections</h4>
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
              <ul className="flex flex-wrap child:grow h-screen overflow-y-scroll w-full items-center justify-center gap-4">
                {fetchedData.map((book) => {
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
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Collections;
