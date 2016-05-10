import {
  TEST_RESULT, HINT_POSITION_SET
} from '../../actions/_types';

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
