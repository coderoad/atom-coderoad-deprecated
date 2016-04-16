import {POSITION_SET} from './_types';

export function positionSet(position: CR.Position): CR.Action {
  return { type: POSITION_SET, payload: { position } };
}
