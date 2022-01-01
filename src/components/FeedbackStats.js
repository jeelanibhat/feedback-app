import React from "react";
import PropTypes from "prop-types";

const FeedbackStats = ({ feedData }) => {
  let RatingResult;
  if (feedData.length > 0) {
    const AverageRating = feedData.reduce((item, data) => {
      return item + data.rating;
    }, 0);
    RatingResult = (AverageRating / feedData.length).toFixed(1);
  }

  return (
    <div className="feedbackstats__wrapper container">
      <div className="reviews__count"> {feedData.length} Reviews</div>
      <div className="average__rating">
        Average Rating : {RatingResult > 0 ? RatingResult : "Nil"}
      </div>
    </div>
  );
};

FeedbackStats.propTypes = {
  feedData: PropTypes.array.isRequired,
};

export default FeedbackStats;
