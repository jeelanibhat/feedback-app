import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback, deleteFeedback, editFeedback } =
    useContext(FeedbackContext);

  if (feedback.length === 0) {
    return <h2 className="text-center">No Data Available</h2>;
  }

  return (
    <div className="feedbacklist__Wrapper feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={deleteFeedback}
          handleEdit={editFeedback}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
