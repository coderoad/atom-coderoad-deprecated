import {
  TEST_RUN, TEST_COMPLETE, PAGE_SET
} from '../../actions/_types';
import {runTaskTests} from './run';

const pageTimeout = 2000;

let previous: number = new Date().getTime();

export default function runTestReducer(testRun = false, action: CR.Action): boolean {
  switch (action.type) {
    case TEST_RUN:
      let current = new Date().getTime();
      if (current - previous > pageTimeout) {
        previous = current;
        return runTaskTests();
      }
      return false;
    case TEST_COMPLETE:
      return false;
    case PAGE_SET:
      previous = new Date().getTime();
      return false;
    default:
      return testRun;
  }
}
