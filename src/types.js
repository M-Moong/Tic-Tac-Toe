import { arrayOf, exact, number, oneOf } from 'prop-types';
import { PLAYER_1, PLAYER_2 } from './constants';

export const PlayerType = oneOf([null, PLAYER_1, PLAYER_2]);

export const SquaresType = arrayOf(PlayerType).isRequired;

export const WinnerType = exact({
  player: PlayerType,
  condition: arrayOf(number),
});
