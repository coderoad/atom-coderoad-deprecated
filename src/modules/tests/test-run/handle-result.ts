import store from '../../../store';
import {testComplete} from '../actions';

/**
 * function is passed into the test runner and called on completion
 * @param  {Test.Result} result
 * @returns void
 */
export default function handleResult(result: Test.Result): void {
  store.dispatch(testComplete(result));
};
