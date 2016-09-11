import {TEST_RESULT} from '../types';

/**
 * task position reducer
 * @param  {} taskPosition=0
 * @param  {Action} action
 * @returns number
 */
export default function taskPosition(
  taskPosition = 0, action: Action
): number {
  switch (action.type) {

    case 'PAGE_SET':
      return 0;

    case TEST_RESULT:
      return action.payload.result.taskPosition;

    default:
      return taskPosition;
  }
}
