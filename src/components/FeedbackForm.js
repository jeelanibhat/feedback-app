import React, { useState } from "react";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setbtnDisable] = useState(true);
  const [rating, setRating] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e :", e.target.value);
    const feedbackFormData = {
      text,
      rating,
    };
    handleAdd(feedbackFormData);
    setText("");
    setbtnDisable(true);
  };
  const handleTextChange = (e) => {
    if (text == "") {
      setbtnDisable(true);
    } else if (text != 0 && text.trim().length <= 10) {
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
