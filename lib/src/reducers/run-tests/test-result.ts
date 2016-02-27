import {store} from '../../_base';
import * as Action from '../../actions/actions';

interface Result {
  msg: string;
  taskPosition: number;
  timedOut?: boolean;
  change?: number;
  pass?: boolean;
};

export function handleResult(result: Result) {

  store.dispatch(Action.testComplete());

  if (!result.pass) {
    // failure, on same task
    store.dispatch(Action.testResult(result));
  } else if (result.pass) {
    // success
    result.msg = `Task ${result.taskPosition} Complete`;
    // check if page is completed
    store.dispatch(Action.pageComplete());
    store.dispatch(Action.testResult(result));
  }
};

export function handleLog(message: string) {
  console.log(message);
  store.dispatch(Action.logMessage(message));
}
