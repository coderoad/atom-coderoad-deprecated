import {store} from '../../_base';
import * as Action from '../../actions/actions';

export function handleResult(result: CR.TestResult) {

  store.dispatch(Action.testComplete());

  if (result.completed) {
    // all complete
    store.dispatch(Action.testResult(result));
    store.dispatch(Action.pageComplete());
  } else if (!result.pass) {
    // failure, on same task
    store.dispatch(Action.testResult(result));
  } else if (result.pass) {
    // success
    result.msg = `Task ${result.taskPosition} Complete`;
    // check if page is completed
    store.dispatch(Action.testResult(result));
  }
};

export function handleLog(message: string): void {
  console.log(message);
  store.dispatch(Action.logMessage(message));
}
