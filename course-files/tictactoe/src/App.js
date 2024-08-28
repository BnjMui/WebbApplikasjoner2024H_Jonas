import { useState } from "react";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (board) => {
  for (const combination of winningCombinations) {
    const [first, second, third] = combination;
    if (
      board[first] &&
      board[first] == board[second] &&
      board[first] == board[third]
    ) {
      return {
        winner: board[first],
        winningSquares: [first, second, third],
      };
    }
  }
  return {
    winner: null,
    winningSquares: [],
  };
};

const initialBoard = Array(9).fill(null);

const App = () => {
  const [player, setPlayer] = useState(null);
  const [players, setPlayers] = useState({ playerOne: "", playerTwo: "" });
  const [board, setBoard] = useState(initialBoard);
  const { winner, winningSquares } = calculateWinner(board);
  const [started, setStarted] = useState(false);

  const nextPlayer =
    player == players.playerOne ? players.playerTwo : players.playerOne;

  const addPlayer = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setPlayers((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const isDisabled = () => !players.playerOne || !players.playerTwo;

  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }
    const boardStatus = [...board];
    boardStatus[index] = player;
    setBoard(boardStatus);
    setPlayer(nextPlayer);
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setStarted(true);
    setPlayer(Object.values(players)[Math.floor(Math.random(0, 1) * 2)]);
  };

  const initGame = (event) => {
    event.preventDefault();
    resetGame();
  };
  return (
    <>
      {!started ? (
        <form onSubmit={initGame}>
          <label htmlFor="playerOne">Add player one</label>
          <input
            name="playerOne"
            id="playerOne"
            type="text"
            value={players.playerOne}
            onChange={addPlayer}
          />
          <label htmlFor="playerTwo">Add player two</label>
          <input
            name="playerTwo"
            id="playerTwo"
            type="text"
            value={players.playerTwo}
            onChange={addPlayer}
          />
          <button type="submit" disabled={isDisabled()}>
            Start game!
          </button>
        </form>
      ) : null}

      <section>
        <p>Current player {player}</p>
        {board?.length > 0 ? (
          <ul id="board">
            {board.map((item, index) => (
              <li className="square" key={index}>
                <button
                  className=""
                  type="button"
                  onClick={() => handleClick(index)}
                >
                  {item || index}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </section>
      {winner ? (
        <section>
          <p>
            Congratulations {winner} with the {winningSquares} combination
          </p>
          <button type="button" onClick={resetGame}>
            New game
          </button>
        </section>
      ) : null}
    </>
  );
};

export default App;
