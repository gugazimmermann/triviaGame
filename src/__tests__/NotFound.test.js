import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import NotFound from "../pages/notfound/NotFound";

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

it("renders NotFound with Page Not Found text, link to home and button to back", () => {
  act(() => {
    render(<BrowserRouter><NotFound /></BrowserRouter>, container);
  });
  expect(container.querySelector("h2").textContent).toBe("Sorry, Page Not Found");
  expect(container.querySelector("[data-testid='link']").getAttribute("href")).toEqual("/");
  expect(container.querySelector("button").textContent).toBe("Back to Home");
});
