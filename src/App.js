import "./App.css";
import React, { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedData, setFeedData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete")) {
      console.log("Feedback List id:", id);
      const deleteResult = feedData.filter((item) => item.id !== id);
      setFeedData(deleteResult);
    }
  };

  const addFeedback = (feedbackFormData) => {
    console.log("new feedback:", feedbackFormData);
    feedbackFormData.id = Math.floor(Math.random() * 100);
    setFeedData([feedbackFormData, ...feedData]);
  };

  return (
    <FeedbackProvider>
      <div className="feedback__app">
        <Header />
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedData={feedData} />
        <FeedbackList handleDelete={deleteFeedback} />
      </div>
    </FeedbackProvider>
  );
}

export default App;
