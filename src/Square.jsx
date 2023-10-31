import { func, node, string } from 'prop-types';

function Square({ children, className = '', onPlay }) {
  const isPlayed = !!children; // true or false
  const defaultClassNames =
    'disabled:cursor-not-allowed w-16 h-16 border-l border-t border-solid border-slate-700';

  return (
    <button
      type="button"
      className={`${defaultClassNames} ${className}`.trim()} // trim() : String의 양끝 공백 제거
      onClick={onPlay}
      disabled={isPlayed}
    >
      {children}
    </button>
  );
}

Square.propTypes = {
  children: node,
  onPlay: func,
  className: string,
};

export default Square;
