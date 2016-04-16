import {HINT_SHOW, HINT_POSITION_SET} from './_types';

export function hintPositionSet(hintPosition: number): CR.Action {
  return { type: HINT_POSITION_SET, payload: { hintPosition } };
}

export function hintShow(): CR.Action {
  return { type: HINT_SHOW };
}
