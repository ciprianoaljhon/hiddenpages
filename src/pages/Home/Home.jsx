import BookContainer from "../../components/BookContainer";
import FeaturedBooksv2 from "../../components/FeaturedBooksv2";
import CategoryContainer from "../../components/CategoryContainer";
import CategoryButton from "../../components/CategoryButton";
import BookCard from "../../components/BookCard";
import FeaturedBooksContainer from "./FeaturedBooksContainer";
import { IconContext } from "react-icons/lib";
import { useScrollFeat } from "../../hooks/useScrollView";
import DotIndicator from "../../components/DotIndicator";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { baseURL } from "../../config/data";
import { useLoggedInContext } from "../../hooks/LoggedInContext";
import { useDataContext } from "../../hooks/DataProvider";
import img1 from "../../assets/display/img1.png";
import img2 from "../../assets/display/img2.png";
import img3 from "../../assets/display/img3.png";
import img4 from "../../assets/display/img4.png";
import img5 from "../../assets/display/img5.png";
import img6 from "../../assets/display/img6.png";
import paleWave from "../../assets/card-bg/bg-img.jpg";
import pinkSplash from "../../assets/card-bg/pngtree-pink-splash-ink-rose-gold-abstract-style-background-picture-image_1328743.png";
import { NavLink } from "react-router-dom";
import ImageGroup from "../../components/ImageGroup";
import Recommendations from "./Recommendations";
import LoadingScreen from "../../components/LoadingScreen";
import { bookCategories, getRandomCategories } from "../../config/filter.js";
import TempComponent from "./TempComponent.jsx";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const featuredCategories = getRandomCategories(4);

function Home() {
  const { setLogIn, userAuth } = useLoggedInContext();
  const [index, ref, scroll] = useScrollFeat();
  const [bookList, setBookList] = useState([]);
  const [month, setMonth] = useState("");
  const { fetchedData, refetch, loading } = useDataContext();
  const session = JSON.parse(sessionStorage.getItem("sessionData"));
  console.log(session);
  useEffect(() => {
    scroll(1);
    setLogIn(true);
    refetch();
    const date = new Date();
    setMonth(months[date.getMonth()]);
  }, []);
  // console.log(fetchedData);
  return (
    <main className="h-max">
      {/* h-max in sub container */}
      <div className="sub-container h-max">
        <div className="flex h-screen pt-28 w-full border-solid justify-center items-center px-20   ">
          <button
            onClick={() => scroll(-1)}
            className="arrow-btn mb-12 border-gray-200 border-solid border-2 text-black"
          >
            <IoIosArrowBack size={48}></IoIosArrowBack>
          </button>
          {/* change w-screen to w-full */}
          <div
            className="flex items-center h-full w-full flex-col bg-main border-solid bg-color-2 rounded-xl"
            // onClick={() => scroll(1)}
          >
            <FeaturedBooksContainer topPadding="">
              <TempContainer className="justify-center" forwardRef={ref[0]}>
                <FeaturedBooksv2
                  img={img1}
                  imgW={"w-3/4"}
                  subHeader="HIDDEN PAGES"
                  header="A Handpicked Selection of the Finest Books Awaits You"
                  fSize="text-4xl"
                  btnTxt="Explore Books"
                ></FeaturedBooksv2>
              </TempContainer>

              <TempContainer
                forwardRef={ref[1]}
                className=" justify-center px-4"
              >
                <FeaturedBooksv2
                  img={img2}
                  imgClass={"w-1/3"}
                  subHeader="Hurry Up Before the Offer will End"
                  emphasize="Limited Deal"
                  header=""
                  fSize="text-4xl"
                  btnTxt="Shop Now"
                  className="flex items-center img-res "
                >
                  <TempHolder />
                </FeaturedBooksv2>
              </TempContainer>
              <TempContainer
                forwardRef={ref[2]}
                className=" justify-center px-4 "
              >
                <FeaturedBooksv2
                  img={img2}
                  imgClass={"w-1/3"}
                  subHeader="Hurry Up Before the Offer will End"
                  emphasize="Limited Deal"
                  header=""
                  fSize="text-4xl"
                  btnTxt="Shop Now"
                  className="flex items-center img-res "
                >
                  <TempHolder />
                </FeaturedBooksv2>
              </TempContainer>
              <TempContainer
                forwardRef={ref[3]}
                className=" justify-center px-4"
              >
                <FeaturedBooksv2
                  img={img2}
                  imgClass={"w-1/3"}
                  subHeader="Hurry Up Before the Offer will End"
                  emphasize="Limited Deal"
                  header=""
                  fSize="text-4xl"
                  btnTxt="Shop Now"
                  className="flex items-center "
                >
                  <TempHolder />
                </FeaturedBooksv2>
              </TempContainer>
            </FeaturedBooksContainer>
            <DotIndicator pageCount={4} currPage={index}></DotIndicator>
          </div>
          <button
            onClick={() => scroll(1)}
            className="arrow-btn mb-12 border-gray-200 border-solid border-2 text-black"
          >
            <IoIosArrowForward size={48}></IoIosArrowForward>
          </button>
        </div>
        <section className="h-max flex flex-col gap-y-10">
          <TempComponent book={fetchedData}></TempComponent>
          <CategoryContainer>
            <IconContext.Provider value={{ size: "48px" }}>
              <CategoryButton category={featuredCategories[0]}></CategoryButton>
              <CategoryButton category={featuredCategories[1]}></CategoryButton>
              <CategoryButton category={featuredCategories[2]}></CategoryButton>
              <CategoryButton category={featuredCategories[3]}></CategoryButton>
            </IconContext.Provider>
          </CategoryContainer>
          {loading ? (
            <div className="w-full flex items-center justify-center">
              <LoadingScreen></LoadingScreen>
            </div>
          ) : (
            <BookContainer className="book-container-1 flex justify-center overflow-auto w-full items-center ">
              <div className="poster h-full relative  px-8 py-5 flex flex-col flex-wrap">
                <div className="header-wrapper">
                  <h1 className="text-4xl">New Arrivals</h1>
                  <p className="text-xl my-2">Discount 30%</p>
                  <NavLink
                    to={"/collections?romance"}
                    className="text-md mb-5 hover:underline"
                  >
                    Shop Now
                  </NavLink>
                </div>
                <img className="w-full" src={img5}></img>
              </div>
              <ul
                className="book-card-list flex flex-wrap justify-center  h-full w-3/4
               "
              >
                {fetchedData.slice(0, 4).map((book, i) => (
                  <BookCard
                    book={book}
                    key={book._id}
                    className="h-40"
                    discountedPrice={0.3}
                    classRestrict="w-1/4 rounded-none"
                  />
                ))}
              </ul>
            </BookContainer>
          )}
          <Recommendations
            className="flex flex-col items-center justify-center w-full mt-10 "
            books={fetchedData}
          ></Recommendations>

          {/* <div className="h-max  ">
            <div className=" relative flex items-center justify-center">
              <h1 className="relative z-10">Batch Sale</h1>
              <img
                src={pinkSplash}
                alt=""
                id="pink-splash"
                className="h-full absolute top-0 left-0"
              />
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
}

export default Home;

export const TempContainer = ({ forwardRef, className, children }) => {
  return (
    <div
      ref={forwardRef}
      className={
        "h-full w-full flex items-center pl-10 shrink-0 overflow-hidden" +
        (children ? className : "")
      }
    >
      {children}
    </div>
  );
};

export function TempHolder() {
  return (
    <div className="temp-holder sub-container mr-auto">
      <div className="flex mb-4">
        <h1 className="text-2xl">₱799</h1>
        <p className="pl-2 line-through text-gray-500 self-end">₱1499</p>
      </div>
      <p className="mb-4">Offer Ends In: </p>
      <div id="timer" className="flex gap-x-3">
        <p>
          <b className="text-xl">???</b> Days
        </p>
        <p>
          <b className="text-xl">???</b> Hours
        </p>
        <p>
          <b className="text-xl">???</b> Minutes
        </p>
        <p>
          <b className="text-xl">???</b> Seconds
        </p>
      </div>
    </div>
  );
}

{
  /* <FeaturedBooks
                  forwardRef={ref[0]}
                  group="Featured"
                ></FeaturedBooks>
                <FeaturedBooks
                  forwardRef={ref[1]}
                  group="Random1"
                ></FeaturedBooks>
                <FeaturedBooks
                  forwardRef={ref[2]}
                  group="Random2"
                ></FeaturedBooks>
                <FeaturedBooks
                  forwardRef={ref[3]}
                  group="Random3"
                ></FeaturedBooks> */
}
