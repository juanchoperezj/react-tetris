import React from "react";
import PropTypes from "prop-types";
import { StyledStartButton } from "./style-button";

const StartButton = ({ callback, text }) => (
  <StyledStartButton onClick={callback}>{text}</StyledStartButton>
);

StartButton.propTypes = {
  callback: PropTypes.func
};

export default StartButton;
