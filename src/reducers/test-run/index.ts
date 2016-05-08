import {
  TEST_RUN, TEST_COMPLETE, PAGE_SET, TEST_SAVE
} from '../../actions/_types';
import runTaskTests from './run';
import {save} from '../../atom/editor';

const pageTimeout = 800;

let previous: number = new Date().getTime();

export default function runTestReducer(
  testRun = false, action: Action
): boolean {
  switch (action.type) {

    // case TESTS_LOAD:
    //  TODO: More performant test loading

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

    case PAGE_SET:
      previous = new Date().getTime();
      return false;

    case TEST_SAVE:
      save();
      /* falls through */

    default:
      return testRun;
  }
}
