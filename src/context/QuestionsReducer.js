import {
  SET_QUESTIONS,
  ANSWER_QUESTION,
  RESET_QUESTIONS,
  SET_ERROR,
} from "../constants";

/**
 * The reducer used with the store to manipulate de app state
 */
const QuestionsReducer = (state, action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };

    case ANSWER_QUESTION:
      const { question, answer } = action.payload;
      const findQuestion = state.questions.find((q) => q === question);
      findQuestion.user_answer = findQuestion.correct_answer === answer;
      const updatedQuestions = state.questions.map((q) =>
        q === question ? findQuestion : q
      );
      return { ...state, questions: updatedQuestions };

    case RESET_QUESTIONS:
      return { ...state, questions: action.payload };

    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default QuestionsReducer;
