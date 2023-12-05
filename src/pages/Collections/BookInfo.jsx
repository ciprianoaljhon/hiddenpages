import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../config/data";
import axios from "axios";
import { useDataContext } from "../../hooks/DataProvider";
import { useLoggedInContext } from "../../hooks/LoggedInContext";
import { useCart } from "../../hooks/useCart";
import ProductDescription from "./ProductDescription";
import Review from "./Review";
import BookType from "./BookType";
import LoadingScreen from "../../components/LoadingScreen";
import { BsCartPlus } from "react-icons/bs";
import { usePopup } from "../../hooks/PopupContext";
import defaultImage from "../../assets/defaultImage.jpg";
import { images } from "../../config/images";
import { useImage } from "../../hooks/useImage";
function BookInfo() {
  const [book, setBook] = useState({});
  const {
    _id,
    title,
    author,
    genre,
    bookTypes,
    description,
    image,
    prices,
    rentalAvailability,
    publicationDate,
    ratings,
    ratingsCount,
  } = book;
  const price = prices && prices.length > 0 ? prices[0].price : 0;
  const { bookID } = useParams();
  const { fetchedData, loading, handleLoading } = useDataContext();
  const { setLogIn } = useLoggedInContext();
  const { addToCart, handlePlaceOrder } = useCart();
  const [selectedOption, setSelectedOption] = useState("new");
  const imgSrc = useImage(image ? image : "");
  const navigate = useNavigate();
  const handleDivClick = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    setLogIn(true);
    scrollTo(0, 0);
    fetchData();
  }, []);
  // repeated logic !! update to se the fetch function in useCart()
  const fetchData = async () => {
    console.log(fetchedData);
    try {
      const res = fetchedData.find((item) => item._id === bookID);
      if (!res) {
        console.log("Stored");
        throw new Error({ error: "not in the stored data" });
      } else {
        setBook(res);
      }
    } catch (error) {
      console.log("Data from database");
      handleLoading(true);
      try {
        const { data } = await axios(`${baseURL}/books/${bookID}`);
        setBook(data);
      } catch (error) {
        console.error("Error fetching data from the database:", error);
      } finally {
        handleLoading(false);
      }
    }
  };
  const handleBuyNow = async (rent) => {
    await handlePlaceOrder(_id);
    navigate(`/checkout/${selectedOption}`);
  };
  // move below logic to custom hook

  return (
    <article className="w-full h-max">
      {loading ? (
        <div className="h-screen flex item-center justify-center">
          <LoadingScreen />
        </div>
      ) : (
        <>
          <div className="lg:h-screen flex items-center justify-center w-full px-10 pt-24 mb-6">
            {title ? (
              <div className="flex flex-col h-max w-full">
                <div
                  style={{
                    gridTemplateColumns: "1fr 2fr 1.2fr",
                  }}
                  className=" h-max w-full p-6 mb-4 bg-color grid grid-rows-3 gap-4"
                >
                  <img
                    className="col-start-1 col-end-1 row-start-1 row-end-4 max-w-[340px] min-w-[340px] w-full pr-6"
                    src={imgSrc}
                    alt="Book Cover"
                  />
                  <div className="wrapper col-start-2 col-end-3 row-start-1 row-end-4 h-[485px] overflow-scroll relative">
                    <div className="sticky right-0 top-0 bg-color">
                      <h1 className="mb-2">{title}</h1>
                      <div className="flex gap-x-4 items-center justify-center w-max">
                        <p>by {author}</p>
                        <p className="">
                          {ratings} ⭐ ({ratingsCount})
                        </p>
                      </div>
                      <ul className="text-sm flex mt-1 gap-1">
                        {genre.map((genre) => {
                          return (
                            <li
                              key={genre}
                              className="bg-neutral-3 px-4 py2 rounded-sm"
                            >
                              {genre}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <p className="text-justify ">
                      {description} Lorem ipsum dolor sit amet consectetur Lorem
                      ipsum dolor, sit amet consectetur adipisicing elit. Fugit
                      dolores cumque quod voluptatem quis, saepe atque,
                      laboriosam illo dicta distinctio eius vel Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Autem dolorem
                      adipisci consequatur id delectus? Nisi aliquid natus vel
                      iure numquam aspernatur dicta, tenetur rerum dolorem autem
                      officia perferendis voluptatum saepe! repellat rem enim.
                      Quasi voluptatum tempora laboriosam atque. adipisicing
                      elit. Voluptas eum quam fugit deserunt blanditiis nemo
                      veritatis doloribus! Sunt fugiat ea obcaecati autem.
                      Laborum sed temporibus necessitatibus commodi impedit
                      veritatis magni.
                    </p>
                  </div>
                  <div className="wrapper col-start-3 col-end-4 row-start-1 row-end-4 flex items-center justify-center w-full ">
                    <div className="wrapper self-start flex flex-col  rounded-lg  w-full gap-4 bg-neutral-3 border-main-clr border-solid border-2 overflow-hidden">
                      <div
                        id="options-wrapper"
                        className="child:w-full child:px-4 child:py-4 border-neutral-3 child:border-solid child:border-2 child:flex child:items-center child:cursor-pointer"
                      >
                        <div onClick={() => handleDivClick("new")}>
                          <label className="mr-auto" htmlFor="new">
                            <p className="text-sm font-bold">Buy New: </p>
                          </label>
                          <p className="text-accent text-base">₱{price}</p>

                          <input
                            className="ml-4"
                            type="radio"
                            name="availability"
                            id="new"
                            checked={selectedOption === "new"}
                            onChange={() => {}}
                          />
                        </div>
                        <div onClick={() => handleDivClick("used")}>
                          <label className="mr-auto" htmlFor="used">
                            <p className="text-sm font-bold">Buy Used: </p>
                          </label>
                          <p className="text-accent text-base">
                            ₱{price - price * 0.3}
                          </p>
                          <input
                            className="ml-4"
                            type="radio"
                            name="availability"
                            id="used"
                            checked={selectedOption === "used"}
                            onChange={() => {}}
                          />
                        </div>
                        <div onClick={() => handleDivClick("rent")}>
                          <label className="mr-auto" htmlFor="rent">
                            <p className="text-sm font-bold">
                              Rent (15 days):{" "}
                            </p>
                          </label>
                          <p className="text-accent text-base">
                            ₱{price - price * 0.5}
                          </p>
                          <input
                            className="ml-4"
                            type="radio"
                            name="availability"
                            id="rent"
                            checked={selectedOption === "rent"}
                            onChange={() => {}}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 child:cursor-pointer child:text-lg w-full p-5">
                        <div className="flex gap-1 child:cursor-pointer child:px-6  child:text-base flex-col child:grow w-full child:py-1">
                          <button
                            onClick={() => handleBuyNow(selectedOption)}
                            className="primary-btn-2"
                          >
                            {selectedOption === "rent" ? "Rent" : "Buy Now"}
                          </button>
                          <button
                            className="primary-btn"
                            onClick={() => addToCart(_id)}
                          >
                            Add to Cart
                          </button>
                        </div>
                        {/* {rentalAvailability ? (
                          <button className="primary-btn grow">Rent</button>
                        ) : (
                          ""
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <LoadingScreen />
            )}
          </div>
          {title && (
            <div className="px-20">
              {/* <ProductDescription
                genres={genres}
                title={title}
                className="flex flex-col gap-3"
              />{" "} */}
              <Review rate={{ ratings, ratingsCount }}></Review>
            </div>
          )}
        </>
      )}
    </article>
  );
}

export default BookInfo;

export function Buttons({ onclick1, onclick2, text1, text2, className }) {
  return (
    <div className={"flex gap-x-2  " + className}>
      <button onClick={onclick1} className="px-6 py-2 primary-btn-2">
        {text1}
      </button>
      <button onClick={onclick2} className="px-6 py-2 bg-main-clr primary-btn">
        {text2}
      </button>
    </div>
  );
}
