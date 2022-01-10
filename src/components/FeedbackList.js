import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext);
  console.log("feedback:", feedback);

  if (feedback === "") {
    return <h2 className="text-center">No Data Available</h2>;
  }

  return (
    <div className="feedbacklist__Wrapper feedback-list">
      {feedback.map((item) => (
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
