import React, { useState } from "react";

export function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ rating, comment });
    setRating(5);
    setComment("");
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        {/* <div>
              <label htmlFor="rating">Rating:</label>
              <select id="rating" value={rating} onChange={handleRatingChange}>
                <option value={5}>5 stars</option>
                <option value={4}>4 stars</option>
                <option value={3}>3 stars</option>
                <option value={2}>2 stars</option>
                <option value={1}>1 star</option>
              </select>
            </div> */}
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            rows={4}
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}
