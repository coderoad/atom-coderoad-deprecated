import {alertOpen, hintPositionSet, progressCompletePage} from '../../actions';
import {TEST_COMPLETE, TEST_RESULT, TEST_RUN} from './types';

export function testRun(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {taskTests, dir, tutorial, taskPosition} = getState();
    dispatch({
      type: TEST_RUN, payload: { taskTests, dir, tutorial, taskPosition }
    });
  };
}

export function testResult(result: Test.Result): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {taskActions, progress, pagePosition} = getState();
    const filter: string = getTestFilter(result);
    let alert: Object = {
      message: result.msg,
      action: 'NOTE',
    };
    // passes or fails
    if (filter === 'PASS' || filter === 'FAIL') {
      dispatch(hintPositionSet(0));
      alert = Object.assign({}, alert, {
        action: filter,
        duration: 1200,
      });
    }
    // previously passed, but now fails
    if (filter === 'FAIL' && progress.pages[pagePosition]) {
      dispatch(progressCompletePage(false));
      alert = Object.assign({}, alert, {
        action: filter,
        duration: 2200,
      });
    }
    dispatch({ type: TEST_RESULT, payload: { result, taskActions } });
    dispatch(alertOpen(alert));
  };
}

function getTestFilter(result: Test.Result): string {
  switch (true) {
    case result.pass && result.change > 0:
      return 'PASS';
    case result.pass === false && result.change <= 0:
      return 'FAIL';
    default:
      return 'NOTE';
  }
}

export function testComplete(result: Test.Result) {
  return (dispatch, getState): void => {
    switch (true) {
      // all complete
      case result.completed:
        dispatch(testResult(result));
        dispatch(progressCompletePage());
        break;

      // a task failed
      case !result.pass:
        dispatch(testResult(result));
        break;

      // a task passed
      case result.pass:
        result.msg = `Task ${result.taskPosition} Complete`;
        // check if page is completed
        dispatch(testResult(result));
        break;
    }
    dispatch({ type: TEST_COMPLETE });
  };
}
