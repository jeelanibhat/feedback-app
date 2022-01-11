import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, SetFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [audioPlay, setAudioPlay] = useState(false);

  //   Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete")) {
      console.log("Feedback List id:", id);
      const deleteResult = feedback.filter((item) => item.id !== id);
      SetFeedback(deleteResult);
      setAudioPlay(true);
    }
  };

  //   Edit Feedback
  const editFeedback = (item) => {
    setAudioPlay(true);
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  //   Update Feedback
  const updateFeedback = (id, updatedFeedback) => {
    SetFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedFeedback } : item
      )
    );
    setAudioPlay(true);
  };

  //   Add Feedback
  const addFeedback = (feedbackFormData) => {
    console.log("new feedback:", feedbackFormData);
    feedbackFormData.id = Math.floor(Math.random() * 100);
    SetFeedback([feedbackFormData, ...feedback]);
    setAudioPlay(true);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        audioPlay,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
