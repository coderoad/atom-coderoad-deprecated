import {
  PROGRESS_LOAD, PROGRESS_COMPLETE_PAGE, PROGRESS_COMPLETE_TUTORIAL
} from './types';
import {alertOpen, testRun} from '../../actions';


export function progressLoad(): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {tutorial} = getState();
    dispatch({ type: PROGRESS_LOAD, payload: { tutorial } });
    dispatch(testRun());
  };
}

export function progressCompletePage(completed = true): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {pagePosition, progress, tutorial} = getState();
    // all pages are true, tutorial complete
    dispatch({ type: PROGRESS_COMPLETE_PAGE, payload: { pagePosition, tutorial, completed } });
    if (progress.completed || progress.pages.every(x => x.completed)) {
      dispatch(progressCompleteTutorial());
    } else {
      dispatch(alertOpen({
        message: `Page ${pagePosition + 1} Complete`,
        action: 'PASS',
      }));
    }
  };
}

export function progressCompleteTutorial(completed = true): ReduxThunk.ThunkInterface {
  return (dispatch, getState) => {
    const {tutorial} = getState();
    dispatch({ type: PROGRESS_COMPLETE_TUTORIAL, payload: { tutorial, completed } });
    dispatch(alertOpen({
      message: 'Tutorial Complete',
      action: 'PASS',
    }));
  };
}
