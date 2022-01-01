import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedData, handleDelete }) => {
  if (feedData.length === 0) {
    return <h2 className="text-center">No Data Available</h2>;
  }

  return (
    <div className="feedbacklist__Wrapper feedback-list">
      {feedData.map((item) => (
        <FeedbackItem
          key={item.id}
          id={item.id}
          rating={item.rating}
          text={item.text}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
