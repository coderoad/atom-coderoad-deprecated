import * as Type from '../../actions/actionTypes';
import {runTaskTests} from './run';

const pageTimeout = 2000;
/**
 * Test is running, return true, else false
 */
let previous: number = new Date().getTime();

export default function runTestReducer(runTests = false, action: CR.Action): boolean {
  switch (action.type) {
    case Type.RUN_TESTS:
      let current = new Date().getTime();
      if (current - previous > pageTimeout) {
        previous = current;
        return runTaskTests();
      }
      return false;
    case Type.TEST_COMPLETE:
      return false;
    case Type.SET_PAGE:
      previous = new Date().getTime();
      return false;
    default:
      return runTests;
  }
}
