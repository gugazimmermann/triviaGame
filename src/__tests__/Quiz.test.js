import React from "react";
import { render, getByText } from "@testing-library/react";
import Question from "../components/quiz/Question";

const mockQuestion = {
  category: "General Knowledge",
  question:
    'This is the correct spelling of "Supercalifragilisticexpialidocious".',
  correct_answer: true,
  user_answer: null,
};

const mockCurrent = 2;

const mockFalseButton = jest.fn();

test("Test Render Quiz Component", () => {
  const { container } = render(
    <Question
      question={mockQuestion}
      current={mockCurrent}
      handleAnswer={mockFalseButton}
    />
  );

  expect(container.querySelector("h1").textContent).toEqual(
    mockQuestion.category
  );
  expect(container.querySelector("h2").textContent).toEqual(
    mockQuestion.question
  );
  expect(container.querySelector("h3").textContent).toEqual(
    mockCurrent + 1 + " of 10"
  );
});

test("Test Click Button Quiz Component", () => {
  const { container } = render(
    <Question
      question={mockQuestion}
      current={mockCurrent}
      handleAnswer={mockFalseButton}
    />
  );

  getByText(container, "False").click();
  expect(mockFalseButton).toBeCalledWith(mockQuestion, false);

  getByText(container, "True").click();
  expect(mockFalseButton).toBeCalledWith(mockQuestion, false);
});
