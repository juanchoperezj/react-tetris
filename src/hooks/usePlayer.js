import { useState, useCallback } from "react";
import { randomTetromino, TETROMINOS } from "../helpers/tetrominos";
import { STAGE_WIDTH, checkCollision } from "../helpers/game-helpers";

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  });
  const [rotateDir, setRotateDir] = useState(false);

  const rotate = tetromino => {
    const rotatedTetro = tetromino.map((_, index) =>
      tetromino.map(col => col[index])
    );
    if (!rotateDir) {
      return rotatedTetro.map(row => row.reverse());
    }
    return rotatedTetro.reverse();
  };

  const changeRotateDir = () => setRotateDir(!rotateDir);

  const playerRotate = (stage, dir) => {
    const clonedPlayer = { ...player };
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const posX = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = posX;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => {
      return {
        ...prev,
        pos: { x: prev.pos.x + x, y: prev.pos.y + y },
        collided
      };
    });
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false
    });
  }, []);

  return [player, updatePlayerPos, resetPlayer, playerRotate, changeRotateDir];
};
