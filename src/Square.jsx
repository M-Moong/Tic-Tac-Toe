import { func, node } from 'prop-types';

function Square({ children, onPlay }) {
  return (
    <button
      type="button"
      className="w-16 h-16 border-l border-t border-solid border-slate-700"
      onClick={onPlay}
    >
      {children}
    </button>
  );
}

Square.propTypes = {
  children: node,
  onPlay: func,
};

export default Square;
