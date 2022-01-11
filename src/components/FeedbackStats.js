import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  let RatingResult;
  if (feedback.length > 0) {
    const AverageRating = feedback.reduce((item, data) => {
      return item + data.rating;
    }, 0);
    RatingResult = (AverageRating / feedback.length).toFixed(1);
  }

  return (
    <div className="feedbackstats__wrapper container">
      <div className="reviews__count"> {feedback.length} Reviews</div>
      <div className="average__rating">
        Average Rating : {RatingResult > 0 ? RatingResult : "Nil"}
      </div>
    </div>
  );
};

export default FeedbackStats;
