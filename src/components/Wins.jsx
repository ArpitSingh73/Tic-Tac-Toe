import GameState from "./GameState";

const Wins = ({gameState}) => {
    if (gameState === GameState.draw) {
      return <div className="wins">Draw</div>;
    } else if (gameState === GameState.playerOWins) {
        return <div className="wins">O-wins</div>;
    } else if (gameState === GameState.playerXWins) {
        return <div className="wins">X-Wins</div>;
    } else {
        return;
  }
};

export default Wins;
