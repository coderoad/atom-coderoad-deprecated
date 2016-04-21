import {store} from '../../store';
import {testResult, completePage, testComplete} from '../../actions';

export function handleResult(result: Test.Result): void {

  console.log('handleRes', result);

  store.dispatch(testComplete());

  if (result.completed) {
    // all complete
    store.dispatch(testResult(result));
    store.dispatch(completePage());
  } else if (!result.pass) {
    // failure, on same task
    store.dispatch(testResult(result));
  } else if (result.pass) {
    // success
    result.msg = `Task ${result.taskPosition} Complete`;
    // check if page is completed
    store.dispatch(testResult(result));
  }
};
