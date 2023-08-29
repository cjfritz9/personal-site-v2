import React, { useContext, useEffect, useState } from "react";

import { CodleContext } from "../../../../context/Codle.context";
import { GameBoard } from "../../../../models/Codle";
import { updatePlayerData } from "../../../../hooks/requests";

import { CodleInterface } from "../../../../@types/context";
import { Stack } from "@chakra-ui/react";
import CodleInputRow from "./Row";

const CodleBoard: React.FC = () => {
  const { startingBoard, playerId, setGameWon, setGameLost } = useContext(
    CodleContext
  ) as CodleInterface;
  const [activeRow, setActiveRow] = useState(0);
  const [currentBoard, setCurrentBoard] =
    React.useState<GameBoard>(startingBoard);

  const updateBoard = (gameBoard: GameBoard) => {
    setCurrentBoard(gameBoard);
    setActiveRow(gameBoard.currentRow);
    setGameWon(gameBoard.isWon);
    setGameLost(gameBoard.isLost);
    (async () => {
      await updatePlayerData(playerId, {
        didWin: gameBoard.isWon,
        guesses: gameBoard.guesses,
        guessMap: JSON.stringify(gameBoard.boardStyle)
      });
    })();
  };

  useEffect(() => {
    if (startingBoard) {
      setCurrentBoard(startingBoard);
      setActiveRow(startingBoard.currentRow);
      setGameWon(startingBoard.isWon);
      setGameLost(startingBoard.isLost);
    }
  }, [startingBoard.currentRow]);

  return (
    <Stack
      w='100%'
      h='100%'
      py='1rem'
      justifyContent='center'
      alignItems='center'
    >
      {Array.from(new Array(6)).map((_, i) => {
        return (
          <CodleInputRow
            key={i}
            isActive={activeRow === i}
            currentBoard={currentBoard}
            onUpdateBoard={updateBoard}
            index={i}
          />
        );
      })}
    </Stack>
  );
};

export default CodleBoard;
