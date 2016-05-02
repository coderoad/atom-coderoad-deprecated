import store from '../../store';
import {testResult, completePage, testComplete} from '../../actions';

export function handleResult(result: Test.Result): void {
  store.dispatch(testComplete());

  switch (true) {
    // all complete
    case result.completed:
      store.dispatch(testResult(result));
      store.dispatch(completePage());
      break;

    // a task failed
    case !result.pass:
      store.dispatch(testResult(result));
      break;

    // a task passed
    case result.pass:
      result.msg = `Task ${result.taskPosition} Complete`;
      // check if page is completed
      store.dispatch(testResult(result));
      break;
  }
};
