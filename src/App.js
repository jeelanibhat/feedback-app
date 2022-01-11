import "./App.css";
import React from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <div className="feedback__app">
        <Header />
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default App;
