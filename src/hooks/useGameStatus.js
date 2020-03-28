import { useState, useEffect, useCallback } from "react";

export const useGameStatus = ({ rowsCleared }) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoints = [40, 100, 300, 1200]; // game const config

  const calculateScore = useCallback(() => {
    if (rowsCleared > 0) {
      setScore(
        prevScore => prevScore + linePoints[rowsCleared - 1] * (level + 1)
      );
      setRows(prevRows => prevRows + rowsCleared);
    }
  }, [level, rowsCleared, linePoints]);

  useEffect(calculateScore, [calculateScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
