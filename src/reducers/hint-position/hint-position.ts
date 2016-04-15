import {
  SET_PAGE, TEST_RESULT, SET_HINT_POSITION
} from '../../actions/actionTypes';

export default function hintPositionReducer(hintPosition = 0,
  action: CR.Action): number {
  switch (action.type) {
    case SET_PAGE:
      return 0;
    case TEST_RESULT:
      if (action.payload.result.change !== 0) {
        return 0;
      }
      return hintPosition;
    case SET_HINT_POSITION:
      return action.payload.hintPosition;
    default:
      return hintPosition;
  }
}
