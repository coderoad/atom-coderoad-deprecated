import {PAGE_SET} from './types';
import {hintPositionSet, routeSet} from '../../actions';
export {editorOpen, editorSave, editorSet, editorInsert} from '../../actions';

export function pageNext(): ReduxThunk.ThunkInterface | Action {
  return (dispatch, getState): void => {
    let {pagePosition} = getState();
    dispatch(pageSet(pagePosition + 1));
  };
}

export function pageSet(pagePosition = 0): ReduxThunk.ThunkInterface {
  return (dispatch, getState): void => {
    const {dir, progress, tutorial, route} = getState();
    // routes
    if (pagePosition >= progress.pages.length) {
      return dispatch(routeSet('final'));
    }
    dispatch(hintPositionSet(0));
    // create absolute paths for 'task-tests'
    const tasks = tutorial.pages[pagePosition].tasks || [];
    dispatch({
      type: PAGE_SET, payload: { dir, pagePosition, tutorial, progress, tasks }
    });
  };
}
