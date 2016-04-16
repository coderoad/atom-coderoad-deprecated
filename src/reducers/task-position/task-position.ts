import {PAGE_SET, TEST_RESULT} from '../../actions/_types';

const defaultTaskPosition: number = 0;

export default function taskPositionReducer(taskPosition = defaultTaskPosition, action: CR.Action): number {
  switch (action.type) {
    case PAGE_SET:
      return 0;
    case TEST_RESULT:
      return action.payload.result.taskPosition;
    default:
      return taskPosition;
  }
}
