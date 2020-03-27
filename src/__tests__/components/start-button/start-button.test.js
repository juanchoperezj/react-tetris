import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import StartButton from "../../../components/start-button/start-button";

it("renders StartButton without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StartButton callback={() => {}} />, div);
});

it("renders StartButton and match snapshot", () => {
  const cell = render(<StartButton callback={() => {}} />);
  expect(cell).toMatchSnapshot();
});
