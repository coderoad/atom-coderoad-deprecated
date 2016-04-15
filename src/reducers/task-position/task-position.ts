import {SET_PAGE, TEST_RESULT} from '../../actions/actionTypes';

const defaultTaskPosition: number = 0;

export default function taskPositionReducer(taskPosition = defaultTaskPosition, action: CR.Action): number {
  switch (action.type) {
    case SET_PAGE:
      return 0;
    case TEST_RESULT:
      return action.payload.result.taskPosition;
    default:
      return taskPosition;
  }
}
