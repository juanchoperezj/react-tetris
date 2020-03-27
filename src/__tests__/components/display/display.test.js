import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Display from "../../../components/display/display";

it("renders Display without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Display text="Game Over" />, div);
});

it("renders Display and match snapshot", () => {
  const cell = render(<Display text="Game Over" />);
  expect(cell).toMatchSnapshot();
});

it("renders Display with Game Over", () => {
  const cell = render(<Display gameOver={true} text="Game Over" />);
  expect(cell).toMatchSnapshot();
});
