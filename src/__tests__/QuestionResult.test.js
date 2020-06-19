import React from "react";
import { render, getByTestId } from "@testing-library/react";
import QuestionResult from "../components/quiz/QuestionResult";

const mockQuestionTrueTrue = {
  category: "category test 1",
  question: "question test 2",
  correct_answer: true,
  user_answer: true,
};
const mockQuestionTrueFalse = {
  category: "category test 3",
  question: "question test 2",
  correct_answer: true,
  user_answer: false,
};
const mockQuestionFalseFalse = {
  category: "category test 3",
  question: "question test 3",
  correct_answer: false,
  user_answer: false,
};
const mockQuestionFalseTrue = {
  category: "category test 4",
  question: "question test 4",
  correct_answer: false,
  user_answer: true,
};

test("Test QuestionResult True / True Component", () => {
  const { container } = render(
    <QuestionResult question={mockQuestionTrueTrue} />
  );

  expect(getByTestId(container, "question").textContent).toEqual(
    mockQuestionTrueTrue.question
  );
  expect(getByTestId(container, "correct")).toBeTruthy();
});

test("Test QuestionResult  True / False Component", () => {
  const { container } = render(
    <QuestionResult question={mockQuestionTrueFalse} />
  );

  expect(getByTestId(container, "question").textContent).toEqual(
    mockQuestionTrueFalse.question
  );
  expect(getByTestId(container, "incorrect")).toBeTruthy();
});

test("Test QuestionResult  False / False Component", () => {
  const { container } = render(
    <QuestionResult question={mockQuestionFalseFalse} />
  );

  expect(getByTestId(container, "question").textContent).toEqual(
    mockQuestionFalseFalse.question
  );
  expect(getByTestId(container, "correct")).toBeTruthy();
});

test("Test QuestionResult  False / True Component", () => {
  const { container } = render(
    <QuestionResult question={mockQuestionFalseTrue} />
  );

  expect(getByTestId(container, "question").textContent).toEqual(
    mockQuestionFalseTrue.question
  );
  expect(getByTestId(container, "incorrect")).toBeTruthy();
});
