import * as Type from '../../actions/actionTypes';

export default function hintReducer(hint = [], action: CR.Action): string[] {
  switch (action.type) {
    // case Type.SET_PAGE:
    // case Type.SET_TASK_POSITION:
    default:
      return hint;
  }
}
