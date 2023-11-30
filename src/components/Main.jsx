import { useState } from "react";
import Board from "./Board"

 const playerA = "X";
 const playerB = "O";

const Main = () => {

const [block, setBlock] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(playerA);


    const handleBlockClick = (index) => {
        // console.log(ind)
         const newBlocks = [...block];
         newBlocks[index] = turn;
         setBlock(newBlocks);
         if (turn === playerA) {
           setTurn(playerB);
         } else {
           setTurn(playerA);
         }
    }

    
    return (
        <>
            <h1>Tic-Tac-Toe</h1>
        <Board block={block} onBlockClick={handleBlockClick} turn={turn}></Board>
      </>
    );
}


export default Main