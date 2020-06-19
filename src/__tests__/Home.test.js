import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import Home from "../pages/home/Home";

const mockFalseButton = jest.fn();

test("Test Render Home Page", () => {
  const { container } = render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(container.querySelector("h1").textContent).toEqual("Welcome to the Trivia Challenge");
  expect(getByTestId(container, "h2-1").textContent).toEqual("You will be presented with 10 True or False questions");
  expect(getByTestId(container, "h2-2").textContent).toEqual("Can you score 100%?");
});
