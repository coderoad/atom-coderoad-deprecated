import {
  PAGE_SET, TEST_RESULT, HINT_POSITION_SET
} from '../../actions/_types';

export default function hintPositionReducer(hintPosition = 0,
  action: CR.Action): number {
  switch (action.type) {
    case PAGE_SET:
      return 0;
    case TEST_RESULT:
      if (action.payload.result.change !== 0) {
        return 0;
      }
      return hintPosition;
    case HINT_POSITION_SET:
      return action.payload.hintPosition;
    default:
      return hintPosition;
  }
}
