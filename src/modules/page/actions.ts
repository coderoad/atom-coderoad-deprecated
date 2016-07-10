import {hintPositionSet, routeSet} from '../../actions';
import {PAGE_SET} from './types';

export function pageNext(): ReduxThunk.ThunkInterface | Action {
  return (dispatch, getState): void => {
    let {pagePosition} = getState();
    dispatch(pageSet(pagePosition + 1));
  };
}

export function pageSet(pagePosition = 0): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const state = getState();
    const {progress, tutorial, route} = state;
    // routes
    if (pagePosition >= progress.pages.length) {
      return dispatch(routeSet('final'));
    }
    dispatch(hintPositionSet(0));

    // sets tasks to new pagePosition
    const tasks = tutorial.pages[pagePosition].tasks || [];

    dispatch({
      type: PAGE_SET, payload: { pagePosition, tutorial, progress, tasks }
    });
  };
}
