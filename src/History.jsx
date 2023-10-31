import { arrayOf, func, number } from 'prop-types';
import { SquaresType } from './types';

function History({ squares, onTimeTravel, gameIndex }) {
  const defaultClassNames =
    'grid place-content-center rounded-md bg-slate-800 px-2 py-1 text-sm text-slate-50';

  return (
    <section className="pl-2">
      <h2 className="sr-only">틱택토 - 시간 여행 Go!</h2>
      <ol className="space-y-1.5">
        {squares.map((_, index) => {
          const isCurrent = gameIndex === index;
          return (
            <li key={index + index}>
              <button
                type="button"
                disabled={isCurrent}
                className={`${defaultClassNames} ${
                  isCurrent ? 'opacity-50' : ''
                }`.trim()}
                onClick={onTimeTravel(index)}
              >
                {index === 0 ? '게임 시작!' : `게임 #${index} 이동`}
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

History.propTypes = {
  squares: arrayOf(SquaresType),
  gameIndex: number,
  onTimeTravel: func,
};

export default History;
