import {PAGE_SET, TEST_RESULT} from '../../actions/_types';

export default function taskPositionReducer(taskPosition = 0, action: Action): number {
  switch (action.type) {
    case PAGE_SET:
      return 0;
    case TEST_RESULT:
      return action.payload.result.taskPosition;
    default:
      return taskPosition;
  }
}
