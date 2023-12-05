import React from "react";
import ReviewForm from "../../components/ReviewForm";
import { Buttons } from "./BookInfo";
function Review({ rate }) {
  const { ratings, ratingsCount } = rate;
  console.log(ratings);
  return (
    <div className="reviews">
      <h3 className="font-bold mb-3">Customer Reviews</h3>
      <div className="flex items-start">
        <h3 className="text-5xl font-extrabold pr-2">{ratings}</h3>
        <div className="flex flex-col">
          <p>{ratingsCount} reviews</p>
          <p>⭐</p>
        </div>
      </div>
      <Buttons text1={"See All Reviews"} text2={"Write a Review"} />
      <hr className="py-4" />
      <div className="review-list">No Reviews</div>
      <ReviewForm></ReviewForm>
    </div>
  );
}

export default Review;
