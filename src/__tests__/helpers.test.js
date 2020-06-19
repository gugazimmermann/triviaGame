import assert from "assert";
import { formatQuestions } from "../helpers/helpers";

const result = {
  response_code: 0,
  results: [
    {
      category: "General Knowledge",
      type: "boolean",
      difficulty: "hard",
      question: "In Scandinavian languages, the letter &Aring; means river.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      category: "History",
      type: "boolean",
      difficulty: "hard",
      question: "The USS Missouri (BB-63) last served in the Korean War.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ],
};

describe("Test Helper Format Question", () => {

  it("should return 2", () => {
    const res = formatQuestions(result);
    assert.equal(res.length, 2);
  });

  it("should return only category, question, correct_answer and user_answer", () => {
    const res = formatQuestions(result);
    assert.equal(Object.keys(res[0]).length, 4);
  });

  it("should decodes the HTML entities", () => {
    const res = formatQuestions(result);
    assert.equal(
      res[0].question,
      "In Scandinavian languages, the letter Å means river."
    );
  });
  
});
