import { useState } from 'react';
import Square from './Square';

const INITIAL_SQUARES = Array(9).fill(null);

function Board() {
  const [squares] = useState(INITIAL_SQUARES);

  const handlePlay = (index) => () => {
    console.log(index);
  };

  return (
    <div className="grid grid-rows-3 grid-cols-3 overflow-hidden rounded-md border-t-2 border-l-2 border-r-[3px] border-b-[3px] border-slate-700">
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Board;
