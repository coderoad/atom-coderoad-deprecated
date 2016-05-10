import {
  PROGRESS_PAGE_POSITION_LOAD, PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from './_types';
import {alertToggle} from './alert';

export function progressPagePositionLoad(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {progress} = getState();
    dispatch({ type: PROGRESS_PAGE_POSITION_LOAD, payload: { progress } });
  };
}

export function progressLoad(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {tutorial} = getState();
    dispatch({ type: PROGRESS_LOAD, payload: { tutorial } });
    // call pagePositionLoad after progress loads
    dispatch(progressPagePositionLoad());
  };
}

export function completePage(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {pagePosition, progress, tutorial} = getState();
    // all pages are true, tutorial complete
    dispatch({ type: COMPLETE_PAGE, payload: { pagePosition, tutorial } });
    if (progress.pages.every(x => x.completed)) {
      dispatch(completeTutorial());
    } else {
      dispatch(alertToggle({
        message: `Page ${pagePosition + 1} Complete`,
        action: 'pass',
      }));
    }
  };
}

export function completeTutorial(): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {tutorial} = getState();
    dispatch({ type: COMPLETE_TUTORIAL, payload: { tutorial } });
    dispatch(alertToggle({
      message: 'Tutorial Complete',
      action: 'pass',
    }));
  };
}
