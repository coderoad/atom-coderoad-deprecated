import {TEST_COMPLETE, TEST_RUN} from '../types';
import runTaskTests from './run';

export default function runTest(
  testRun = false, action: Action
): boolean {
  switch (action.type) {

    case TEST_RUN:
      const {taskTests, dir, tutorial, taskPosition} = action.payload;
      return runTaskTests(taskTests, dir, tutorial, taskPosition);

    case TEST_COMPLETE:
      return false;

    case 'PAGE_SET':
      return false;

    default:
      return testRun;
  }
}
