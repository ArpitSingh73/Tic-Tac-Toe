import Block from "./Block.jsx"
import Strike from "./Strike.jsx";
const Board = () => {
    return (
      <div className="board">
        {/* <h2>Board</h2> */}
        <Block className="right-border bottom-border"></Block>
        <Block className="right-border bottom-border"></Block>
        <Block className="bottom-border"></Block>
        <Block className="right-border bottom-border"></Block>
        <Block className="right-border bottom-border"></Block>
        <Block className="bottom-border"></Block>
        <Block className="right-border "></Block>
        <Block className="right-border "></Block>
        <Block ></Block>
        <Strike></Strike>
      </div>
    );
}


export default Board