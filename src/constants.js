export const PLAYER_1 = '⚫️';
export const PLAYER_2 = '🟨';

export const INITIAL_SQUARES = Array(9).fill(null);

export const WINNER_CONDTITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (squares) => {
  for (const [x, y, z] of WINNER_CONDTITIONS) {
    const winnerPlayer = squares[x];
    if (
      winnerPlayer &&
      winnerPlayer === squares[y] &&
      winnerPlayer === squares[z]
    ) {
      return {
        player: winnerPlayer,
        condition: [x, y, z],
      };
    }
  }

  return null;
};
