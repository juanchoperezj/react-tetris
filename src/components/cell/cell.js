import React from "react";
import PropTypes from "prop-types";
import { StyledCell } from "./styled-cell";
import { TETROMINOS } from "../../helpers/tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

Cell.propTypes = {
  type: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

export default React.memo(Cell);
