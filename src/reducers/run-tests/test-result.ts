import {store} from '../../store/store';
import {testResult, pageComplete, testComplete} from '../../actions/actions';

export function handleResult(result: CR.TestResult): void {

  store.dispatch(testComplete());

  if (result.completed) {
    // all complete
    store.dispatch(testResult(result));
    store.dispatch(pageComplete());
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
