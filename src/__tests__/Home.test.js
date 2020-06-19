import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import Home from "../pages/home/Home";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders Home with Welcome text, link to quiz and button to begin", () => {
  act(() => {
    render(<BrowserRouter><Home /></BrowserRouter>, container);
  });
  expect(container.querySelector("h1").textContent).toBe("Welcome to the Trivia Challenge");
  expect(container.querySelector("[data-testid='link']").getAttribute("href")).toEqual("/quiz");
  expect(container.querySelector("button").textContent).toBe("BEGIN");
});
