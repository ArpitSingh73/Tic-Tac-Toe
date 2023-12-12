import Block from "./Block.jsx";
import Strike from "./Strike.jsx";
const Board = ({ block, onBlockClick, turn, strikeClass }) => {
  return (
    <div className="board">
      <Block
        onClick={() => onBlockClick(0)}
        value={block[0]}
        className="right-border bottom-border"
        turn={turn}
      ></Block>
      <Block
        onClick={() => onBlockClick(1)}
        value={block[1]}
        className="right-border bottom-border"
        turn={turn}
      ></Block>
      <Block
        onClick={() => onBlockClick(2)}
        value={block[2]}
        className="bottom-border"
        turn={turn}
      ></Block>
      <Block
        onClick={() => onBlockClick(3)}
        value={block[3]}
        className="right-border bottom-border"
        turn={turn}
      ></Block>
      <Block
        onClick={() => onBlockClick(4)}
        value={block[4]}
        className="right-border bottom-border"
        turn={turn}
      ></Block>
      <Block
        onClick={() => onBlockClick(5)}
        value={block[5]}
        className="bottom-border"
        turn={turn}
      ></Block>
      <Block
        onClick={() => onBlockClick(6)}
        value={block[6]}
        className="right-border "
        turn={turn}
      ></Block>
      <Block
        onClick={() => onBlockClick(7)}
        value={block[7]}
        className="right-border "
        turn={turn}
      ></Block>
      <Block onClick={() => onBlockClick(8)} value={block[8]}></Block>
      <Strike strikeClass={strikeClass}></Strike>
    </div>
  );
};

export default Board;
