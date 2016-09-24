import {alertOpen, hintPositionSet, progressCompletePage} from '../../actions';
import getTestName from './test-run/testName';
import {TEST_COMPLETE, TEST_LOAD, TEST_RESULT, TEST_RUN} from './types';

export function testLoad(): Redux.ThunkAction<any, any, {}> {
  return (dispatch, getState): void => {
    const { dir, pagePosition, tutorial } = getState();
    const tasks = tutorial.pages[pagePosition].tasks || [];
    const testFile = getTestName({tutorial, pagePosition});
    dispatch({
      type: TEST_LOAD, payload: {
        dir,
        tasks,
        tutorial,
        testFile,
      }
    });
  };
}

export function testRun(): Redux.ThunkAction<any, any, {}> {
  return (dispatch, getState): void => {
    
    // less than a second since the last test run, skip
    const timeSinceLastTestRun = performance.now() - getState().testRun.time;
    if (timeSinceLastTestRun < 1000) {
      return;
    }

    const {dir, tutorial, taskPosition, pagePosition} = getState();
    const tasks = tutorial.pages[pagePosition].tasks;
    const hasTasks = tasks && tasks.length > 0;
    const testFile = getTestName({tutorial, pagePosition});

    dispatch({
      type: TEST_RUN,
      payload: { hasTasks, dir, tutorial, taskPosition, testFile }
    });
  };
}

export function testResult(result: Test.Result):
  Redux.ThunkAction<any, any, {}> {
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
        // adjust duration based on length of message
        duration: result.msg && result.msg.length ?
          (result.msg.length * 50) + 1000 : 2000
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

export function testComplete(result: Test.Result):
  Redux.ThunkAction<any, any, {}> {
  return (dispatch): void => {
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
      default:
        return;
    }
    dispatch({ type: TEST_COMPLETE, payload: { error: result.error } });
  };
}
