import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const questions = await axios(
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
      );
      setQuestions(questions.data.results);
    }
    fetchQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={questions}>
      {children}
    </QuestionsContext.Provider>
  );
};
