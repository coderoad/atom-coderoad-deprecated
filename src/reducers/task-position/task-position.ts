import * as Type from '../../actions/actionTypes';

const defaultTaskPosition: number = 0;

export default function taskPositionReducer(taskPosition = defaultTaskPosition, action: CR.Action): number {
  switch (action.type) {
    case Type.SET_PAGE:
      return 0;
    case Type.SET_TASK_POSITION:
      return action.payload.taskPosition;
    case Type.TEST_RESULT:
      return action.payload.result.taskPosition;
    default:
      return taskPosition;
  }
}
