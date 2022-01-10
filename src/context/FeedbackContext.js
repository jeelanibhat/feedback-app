import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, SetFeedback] = useState([
    {
      id: 1,
      text: "welcome to react js context api",
      rating: 9,
    },
    {
      id: 2,
      text: "welcome to react js context api 2",
      rating: 9,
    },
  ]);
  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
