import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Display from "../../../components/display/display";

it("renders Display without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Display text="Game Over" />, div);
});

it("renders Display and match snapshot", () => {
  const tree = render(<Display text="Game Over" />);
  expect(tree).toMatchSnapshot();
});

it("renders Display with Game Over", () => {
  const tree = render(<Display gameOver={true} text="Game Over" />);
  expect(tree).toMatchSnapshot();
});
