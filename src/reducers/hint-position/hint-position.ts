import * as Type from '../../actions/actionTypes';

export default function hintPositionReducer(hintPosition = -1, action: CR.Action): number {
  switch (action.type) {
    case Type.SET_PAGE:
      return -1;
    case Type.TEST_RESULT:
      if (action.payload.result.change !== 0) {
        return -1;
      }
      return hintPosition;
    case Type.SET_HINT_POSITION:
      return action.payload.hintPosition;
    default:
      return hintPosition;
  }
}
