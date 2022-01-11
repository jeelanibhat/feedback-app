import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item, handleDelete }) => {
  const { editFeedback } = useContext(FeedbackContext);
  return (
    <div className="feedbackitem__wrapper">
      <ul>
        <li className="card">
          <p className="num-display">{item.rating}</p>
          <button className="close" onClick={() => handleDelete(item.id)}>
            <FaTimes color="purple" />
          </button>
          <button className="edit" onClick={() => editFeedback(item)}>
            <FaEdit color="purple" />
          </button>
          <p>{item.text}</p>
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
