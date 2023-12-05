import React from "react";
import BookCardLandscape from "../../components/BookCardLandscape";
import LoadingScreen from "../../components/LoadingScreen";
function Recommendations({ className, books, loading }) {
  const selectRandomBooks = (books, count) => {
    const shuffledBooks = [...books].sort(() => Math.random() - 0.5);
    return shuffledBooks.slice(0, count);
  };

  const randomBooks = selectRandomBooks(books, 6);

  return (
    <div className={" " + className}>
      <h3 className="mb-2">Recommendations</h3>
      {loading ? (
        <div>
          <LoadingScreen></LoadingScreen>
        </div>
      ) : (
        <ul className="flex child:grow flex-wrap w-full ">
          {randomBooks.map((book, index) => {
            const isLastElement = index === books.length - 1;
            const hideOnBreakpoint = isLastElement ? "sm:hidden" : "";
            return (
              <BookCardLandscape
                key={book._id}
                className={"w-1/3  min-w-[300px] " + hideOnBreakpoint}
                book={book}
              ></BookCardLandscape>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Recommendations;
