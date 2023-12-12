import { useState, useEffect } from "react";
import Board from "./Board";
import GameState from "./GameState";
import GameOver from "./GameOver";
import Reset from "./Reset";
import Wins from "./Wins";
import move from "./sounds/mixkit-atm-cash-machine-key-press-2841.wav";
import gameover from "./sounds/mixkit-failure-arcade-alert-notification-240.wav";

const gameOverSound = new Audio(gameover);
gameOverSound.volume = 0.2;
const clickSound = new Audio(move);
clickSound.volume = 0.5;

const playerA = "X";
const playerB = "O";

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(block, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winningCombinations) {
    const blockValue1 = block[combo[0]];
    const blockValue2 = block[combo[1]];
    const blockValue3 = block[combo[2]];

    if (
      blockValue1 !== null &&
      blockValue1 === blockValue2 &&
      blockValue1 === blockValue3
    ) {
      setStrikeClass(strikeClass);
      if (blockValue1 === playerA) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllTilesFilledIn = block.every((tile) => tile !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
}
const Main = () => {
  const [block, setBlock] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(playerA);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  useEffect(() => {
    checkWinner(block, setStrikeClass, setGameState);
  }, [block]);

  useEffect(() => {
    if (block.some((tile) => tile !== null)) {
      clickSound.play();
    }
  }, [block]);

  useEffect(() => {
    if (gameState !== GameState.inProgress) {
      gameOverSound.play();
    }
  }, [gameState]);

  const handleBlockClick = (index) => {
    // console.log(ind)

    if (gameState !== GameState.inProgress) {
      return;
    }

    if (block[index] !== null) {
      return;
    }

    const newBlocks = [...block];
    newBlocks[index] = turn;
    setBlock(newBlocks);
    if (turn === playerA) {
      setTurn(playerB);
    } else {
      setTurn(playerA);
    }
  };

  const handleReset = () => {
    setGameState(GameState.inProgress);
    setBlock(Array(9).fill(null));
    setTurn(playerA);
    setStrikeClass(null);
  };

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Board
        block={block}
        onBlockClick={handleBlockClick}
        turn={turn}
        strikeClass={strikeClass}
      ></Board>
      <GameOver gameState={GameState} />
      <Wins gameState={gameState}></Wins>
      <Reset gameState={gameState} onReset={handleReset}></Reset>
    </div>
  );
};

export default Main;
