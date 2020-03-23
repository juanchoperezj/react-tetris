import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

// components
import Stage from "../stage/stage";
import Display from "../display/display";
import StartButton from "../start-button/start-button";

// styles
import { StyledTetrisWrapper, StyledTetris } from "./styled-tetris";

// helpers
import { createStage, checkCollision } from "../../helpers/game-helpers";

// custom hooks
import { usePlayer } from "../../hooks/usePlayer";
import { useStage } from "../../hooks/useStage";
import { useInterval } from "../../hooks/useInterval";
import { useGameStatus } from "../../hooks/useGameStatus";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(1000);
  const [gameOver, setGameOver] = useState(false);

  const [
    player,
    updatePlayerPos,
    resetPlayer,
    playerRotate,
    changeRotateDir
  ] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
    setDropTime(1000);
    setScore(0);
    setLevel(0);
    setRows(0);
  };

  const drop = () => {
    console.log({ rows });
    if (rows > (level + 1) * 10) {
      setLevel(prevLevel => prevLevel + 1);
      setDropTime(1000 / level + 1 + 300);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game Over
      if (player.pos.y < 1) {
        console.log("GAME OVER!!!");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000);
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      switch (keyCode) {
        case 37:
          return movePlayer(-1);
        case 38:
          changeRotateDir();
          return playerRotate(stage);
        case 39:
          return movePlayer(1);
        case 40:
          return dropPlayer();
      }
    }
  };

  useInterval(drop, dropTime);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={move}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Fragment>
              <Display gameOver={gameOver} text="Game Over" />
              <StartButton callback={startGame} />
            </Fragment>
          ) : (
            <div>
              <Display text={`Score ${score}`} />
              <Display text={`Rows ${rows}`} />
              <Display text={`Level ${level}`} />
              <StartButton callback={startGame} text="Start Game" />
            </div>
          )}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

Tetris.propTypes = {
  type: PropTypes.string
};

export default Tetris;
