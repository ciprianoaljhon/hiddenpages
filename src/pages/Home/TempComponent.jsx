import React from "react";
import BookCard from "../../components/BookCard";
import LoadingScreen from "../../components/LoadingScreen";
import { useDataContext } from "../../hooks/DataProvider";
import { NavLink } from "react-router-dom";
import { images } from "../../config/images";
import defaultImage from "../../assets/defaultImage.jpg";
function TempComponent() {
  const { fetchedData, refetch, loading } = useDataContext();
  const books = [...fetchedData];
  const shuffledArray = books.sort(() => 0.5 - Math.random());
  const randomItems = shuffledArray.slice(0, 6);
  return (
    <div className="w-full h-max py-14  flex items-center">
      {loading ? (
        <div className="h-full w-full flex items-center justify-center">
          <LoadingScreen />
        </div>
      ) : (
        <>
          <NavLink
            className="w-1/3  border-main-clr border-2 border-solid mr-2 h-[670px] flex flex-col p-6"
            to="/collections"
          >
            <img
              src={images["pride_and_prejudice"]}
              alt=""
              className="h-[360px] max-w-[240px] w-full self-center"
            />
            <div className="mt-2">
              <h3>Pride and Prejudice</h3>
              <p className="text-base">by Jane Austen</p>
              <div className="flex">
                <p className="text-xl">₱699</p>
                <p className="line-through self-end text-gray-400">₱1100</p>
              </div>
            </div>
            <div className="my-auto">
              <p className="text-lg mb-1">
                <strong className="font-medium">Hurry up! </strong>Before Offers
                End in:{" "}
              </p>
              <div className=" w-full flex justify-between">
                <p className="text-lg">??? Days</p>
                <p className="text-lg">??? Hours</p>
                <p className="text-lg">??? Mins</p>
              </div>
            </div>
            <button className="primary-btn py-2">Buy Now</button>
          </NavLink>
          <div className="grid grid-cols-3 grid-rows-2 h-full w-2/3 gap-2">
            {randomItems.map((book) => {
              return (
                <BookCard
                  book={book}
                  className="h-52"
                  classRestrict=" rounded-none"
                ></BookCard>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default TempComponent;
