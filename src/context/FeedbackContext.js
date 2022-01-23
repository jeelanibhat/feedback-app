import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, SetFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [audioPlay, setAudioPlay] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch Feedback
  const fetchFeedback = async () => {
    const fetchData = await fetch(`http://localhost:5000/feedback`);
    const response = await fetchData.json();
    SetFeedback(response);
  };

  //   Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to Delete")) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });
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
  const updateFeedback = async (id, updatedFeedback) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFeedback),
    });
    const data = await response.json();

    SetFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    setAudioPlay(true);
  };

  //   Add Feedback
  const addFeedback = async (feedbackFormData) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackFormData),
    });
    const data = await response.json();
    SetFeedback([data, ...feedback]);
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
