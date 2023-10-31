import { useState } from 'react';
import Board from './Board';
import History from './History';
import Status from './Status';
import { INITIAL_SQUARES, PLAYER_1, PLAYER_2, checkWinner } from './constants';
import useStorage from './useStorage';

function Game() {
  // const [squares, setSquares] = useState([INITIAL_SQUARES]); // [[null x 9], [null x 8, PLAYER_1]]
  const [squares, setSquares] = useStorage('tic-tac-toe', [INITIAL_SQUARES]);
  const [gameIndex, setGameIndex] = useState(squares.length - 1);

  const currentSquares = squares[gameIndex];
  const nextPlayer = gameIndex % 2 === 0 ? PLAYER_1 : PLAYER_2;
  const winner = checkWinner(squares);
  const isDraw = !winner && currentSquares.every(Boolean);

  const handlePlay = (index) => () => {
    if (winner) return alert('GAME OVER');
    const nextSquares = [...currentSquares];
    nextSquares[index] = nextPlayer;

    const nextGameIndex = gameIndex + 1;
    setSquares([...squares.slice(0, nextGameIndex), nextSquares]);
    setGameIndex(nextGameIndex);
  };

  const onTimeTravel = (index) => () => {
    setGameIndex(index);
  };

  return (
    <section className="grid grid-rows-[24px_1fr] grid-cols-2 gap-2">
      <Status nextPlayer={nextPlayer} winner={winner} isDraw={isDraw} />
      <Board {...{ squares: currentSquares, winner, handlePlay }} />
      <History
        squares={squares}
        gameIndex={gameIndex}
        onTimeTravel={onTimeTravel}
      />
    </section>
  );
}

export default Game;
