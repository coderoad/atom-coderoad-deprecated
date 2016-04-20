import {HINT_SHOW, HINT_POSITION_SET} from './_types';

export function hintPositionSet(hintPosition: number): Action {
  return {
    payload: { hintPosition },
    type: HINT_POSITION_SET,
  };
}

export function hintShow(): Action {
  return { type: HINT_SHOW };
}
