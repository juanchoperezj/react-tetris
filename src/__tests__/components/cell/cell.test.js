import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Cell from "../../../components/cell/cell";

it("renders Cell without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Cell type={"I"} />, div);
});

it("renders Cell and match snapshot", () => {
  const cell = render(<Cell type={"S"} />);
  expect(cell).toMatchSnapshot();
});
