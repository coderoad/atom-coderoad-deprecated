import store from '../../../store';
import {testComplete} from '../actions';

// function is passed into the test runner and called on completion
export function handleResult(result: Test.Result): void {
  store.dispatch(testComplete(result));
};
