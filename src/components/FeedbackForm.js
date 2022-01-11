import React, { useState, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setbtnDisable] = useState(true);
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  // Edit Form
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisable(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  //   on submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackFormData = {
      text,
      rating,
    };

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, feedbackFormData);
    } else {
      addFeedback(feedbackFormData);
    }
    setText("");
    setbtnDisable(true);
  };

  //   on change handler
  const handleTextChange = (e) => {
    if (text === "") {
      setbtnDisable(true);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setbtnDisable(true);
    } else {
      setbtnDisable(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  return (
    <div className="feedback__form card">
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={btnDisabled}
          >
            Send
          </button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default FeedbackForm;
