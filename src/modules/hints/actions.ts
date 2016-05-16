import {HINT_POSITION_SET} from './types';

export function hintPositionSet(hintPosition: number): Action {
  return {type: HINT_POSITION_SET, payload: { hintPosition } };
}
