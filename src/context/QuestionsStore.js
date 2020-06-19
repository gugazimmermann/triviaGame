import React, { createContext, useReducer } from "react";
import QuestionsReducer from "./QuestionsReducer";

/**
 * The store to keep the user state.
 */

const initialState = {
  questions: [],
  error: null,
};

export const QuestionsContext = createContext();

const QuestionsStore = ({ children }) => {
  const [state, dispatch] = useReducer(QuestionsReducer, initialState);

  return (
    <QuestionsContext.Provider value={[state, dispatch]}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsStore;
