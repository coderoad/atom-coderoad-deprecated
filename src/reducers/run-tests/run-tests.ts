import * as Type from '../../actions/actionTypes';
import * as Action from '../../actions/actions';
import {runTaskTests} from './run';

const pageTimeout = 2000;
/**
 * Test is running, return true, else false
 */
let previous: Date = new Date();

export default function runTestReducer(runTests = false, action: CR.Action): boolean {
  switch (action.type) {
    case Type.RUN_TESTS:
      let current: Date = new Date();
      if (current - previous > pageTimeout) {
        previous = current;
        return runTaskTests();
      } else {
        return false;
      }
    case Type.TEST_COMPLETE:
      return false;
    case Type.SET_PAGE:
      previous = new Date();
      return false;
    default:
      return runTests;
  }
}
