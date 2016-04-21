import {POSITION_SET} from './_types';

export function positionSet(position: CR.Position): Action {
  return {
    payload: { position },
    type: POSITION_SET,
  };
}
