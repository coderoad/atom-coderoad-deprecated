import {HINT_SHOW, HINT_POSITION_SET} from './_types';

export function hintPositionSet(hintPosition: number): Action {
  return {type: HINT_POSITION_SET, payload: { hintPosition } };
}

export function hintShow(): Action {
  return { type: HINT_SHOW };
}
