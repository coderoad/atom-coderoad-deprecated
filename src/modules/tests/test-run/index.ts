import {TEST_RUN, TEST_COMPLETE} from '../types';
import runTaskTests from './run';

const pageTimeout = 800;

let previous: number = new Date().getTime();

export default function runTest(
  testRun = false, action: Action
): boolean {
  switch (action.type) {

    case TEST_RUN:
      let current = new Date().getTime();
      if (current - previous > pageTimeout) {
        previous = current;
        const {taskTests, dir, tutorial, taskPosition} = action.payload;
        return runTaskTests(taskTests, dir, tutorial, taskPosition);
      }
      return false;

    case TEST_COMPLETE:
      return false;

    case 'PAGE_SET':
      previous = new Date().getTime();
      return false;

    default:
      return testRun;
  }
}