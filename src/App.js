import "./App.css";
import React, { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

function App() {
  const [feedData, setFeedData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete")) {
      console.log("Feedback List id:", id);
      const deleteResult = feedData.filter((item) => item.id !== id);
      setFeedData(deleteResult);
    }
  };

  return (
    <div className="feedback__app">
      <Header />
      <FeedbackStats feedData={feedData} />
      <FeedbackList feedData={feedData} handleDelete={deleteFeedback} />
    </div>
  );
}

export default App;
