import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Tetris from "../../../components/tetris/tetris";

it("renders Tetris without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Tetris />, div);
});

it("renders Tetris and match snapshot", () => {
  const cell = render(<Tetris />);
  expect(cell).toMatchSnapshot();
});
