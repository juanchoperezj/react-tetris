import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Stage from "../../../components/stage/stage";
import { createStage } from "../../../helpers/game-helpers";

const stage = createStage();

it("renders Stage without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Stage stage={stage} />, div);
});

it("renders Stage and match snapshot", () => {
  const tree = render(<Stage stage={stage} />);
  expect(tree).toMatchSnapshot();
});
