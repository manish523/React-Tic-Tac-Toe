import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      // State that depends on arrays or objects,
      // we should update them in an immutable way.
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];

      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
      // We should not do state update like belo, can cause side effects

      //   prevGameBoard[rowIndex][colIndex] = "X";
      //   return prevGameBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playersSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    >
                      {playersSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
