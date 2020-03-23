import React from "react";
import PropTypes from "prop-types";
import Cell from "../cell/cell";
import { StyledStage } from "./styled-stage";

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {console.log("re render stage")}
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </StyledStage>
);

Stage.propTypes = {
  stage: PropTypes.any
};

export default React.memo(Stage);
