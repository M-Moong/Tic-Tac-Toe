import Board from './Board';
import History from './History';
import Status from './Status';

function Game() {
  return (
    <section className="grid grid-rows-[24px_1fr] grid-cols-2 gap-2">
      <Status />
      <Board />
      <History />
    </section>
  );
}

export default Game;
