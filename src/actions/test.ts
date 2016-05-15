import {
  TEST_RUN, TEST_RESULT, TEST_COMPLETE, TEST_SAVE
} from './_types';
import {hintPositionSet} from './hint';
import {completePage} from './progress';
import {alertOpen} from './alert';

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
    let alert: CR.Alert = {
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
      dispatch(completePage(false));
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

export function testComplete(): Action {
  return { type: TEST_COMPLETE };
}

export function testSave(): Action {
  return { type: TEST_SAVE };
}
