import {HINT_POSITION_SET} from './types';
/**
 * sets hint index
 * @param  {} hintPosition=0
 * @param  {Action} action
 * @returns number
 */
export default function hintPositionReducer(
  hintPosition = 0, action: Action
): number {
  switch (action.type) {

    case HINT_POSITION_SET:
      return action.payload.hintPosition;

    default:
      return hintPosition;
  }
}
