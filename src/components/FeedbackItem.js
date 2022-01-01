import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

const FeedbackItem = ({ id, rating, text, handleDelete }) => {
  return (
    <div className="feedbackitem__wrapper">
      <ul>
        <li className="card">
          <p className="num-display">{rating}</p>
          <button className="close" onClick={() => handleDelete(id)}>
            <FaTimes color="purple" />
          </button>
          <p>{text}</p>
        </li>
      </ul>
    </div>
  );
};

FeedbackItem.propTypes = {
  rating: PropTypes.number,
  text: PropTypes.string,
};
export default FeedbackItem;
