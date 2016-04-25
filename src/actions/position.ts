import {POSITION_SET, POSITION_LOAD} from './_types';

export function positionLoad() {
  return { type: POSITION_LOAD };
}

export function positionSet(position: CR.Position): Action {
  return {
    payload: { position },
    type: POSITION_SET,
  };
}
