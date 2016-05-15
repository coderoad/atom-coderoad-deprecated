import {
  ROUTE_SET, PAGE_SET
} from './_types';
import {hintPositionSet} from './hint';
import {routeSet} from './route';

export function pageNext(): ReduxThunk.ThunkInterface | Action {
  return (dispatch, getState): void => {
    let {pagePosition, tutorial} = getState();
    const pages = tutorial.pages;
    if (pagePosition >= pages.length - 1) {
      dispatch({ type: ROUTE_SET, payload: { route: 'final' } });
    } else {
      pagePosition += 1;
      dispatch(pageSet(pagePosition));
    }
  };
}

export function pageSet(pagePosition = 0): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir, progress, tutorial, route} = getState();

    // routes
    if (pagePosition >= progress.pages.length) {
      dispatch({ type: ROUTE_SET, payload: { route: 'final' } });
    }
    dispatch(hintPositionSet(0));
    // create absolute paths for 'task-tests'
    const tasks = tutorial.pages[pagePosition].tasks || [];
    dispatch({
      type: PAGE_SET, payload: { dir, pagePosition, tutorial, progress, tasks }
    });
  };
}
