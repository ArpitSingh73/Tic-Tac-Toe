import { useState } from "react";
import Board from "./Board";
import GameState from "./GameState";
import GameOver from "./GameOver";

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
      blockValue1 === tileValue2 &&
      blockValue1 === tileValue3
    ) {
      setStrikeClass(strikeClass);
      if (tileValue1 === playerA) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
}
const Main = () => {
  const [block, setBlock] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(playerA);
  const [strikeClass, setStrikeClass] = useState("strike-row-1");
  const [gameState, setGameState] = useState(GameState.inProgress);

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [block]);

  const handleBlockClick = (index) => {
    // console.log(ind)

    if (gameState !== GameState.inProgress) {
      return;
    }

    if (tiles[index] !== null) {
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
      setTiles(Array(9).fill(null));
      setPlayerTurn(playerA);
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
    </div>
  );
};

export default Main;
