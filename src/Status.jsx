import { bool } from 'prop-types';
import { PlayerType, WinnerType } from './types';

function Status({ nextPlayer, winner, isDraw }) {
  let statusMessage = '';

  if (winner) {
    statusMessage = `위너! ${winner.player}`;
  } else if (isDraw) {
    statusMessage = '무승부... 🎴 다시 한 게임?';
  } else {
    statusMessage = `다음 플레이어 : ${nextPlayer}`;
  }

  return <h2 className="col-span-2 text-sm">{statusMessage}</h2>;
}

Status.propTypes = {
  nextPlayer: PlayerType,
  winner: WinnerType,
  isDraw: bool,
};

export default Status;
