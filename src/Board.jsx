import { func } from 'prop-types';
import Square from './Square';
import { SquaresType, WinnerType } from './types';

function Board({ squares, winner, handlePlay }) {
  return (
    <div className="self-start grid grid-rows-3 grid-cols-3 overflow-hidden rounded-md border-t-2 border-l-2 border-r-[3px] border-b-[3px] border-slate-700">
      {squares.map((square, index) => {
        let winnerClassName = '';
        if (winner) {
          const [x, y, z] = winner.condition;
          if (index === x || index === y || index === z) {
            winnerClassName = 'bg-yellow-100';
          }
        }
        return (
          <Square
            key={index + index}
            className={winnerClassName}
            onPlay={handlePlay(index)}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}

Board.propTypes = {
  squares: SquaresType,
  winner: WinnerType,
  handlePlay: func,
};

export default Board;
