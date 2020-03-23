import React from "react";
import PropTypes from "prop-types";
import { StyledDisplay } from "./styled-display";

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

Display.propTypes = {
  text: PropTypes.string,
  gameOver: PropTypes.bool
};

export default Display;
