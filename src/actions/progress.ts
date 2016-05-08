import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from './_types';
import {pagePositionLoad} from './page';
import store from '../store';

export function progressLoad(): Action {
  // call pagePositionLoad after progress loads
  setTimeout(() => store.dispatch(pagePositionLoad()));
  const {tutorial} = store.getState();
  return { type: PROGRESS_LOAD, payload: { tutorial } };
}

export function completePage(): Action {
  const {pagePosition, progress, tutorial} = store.getState();
  // all pages are true, tutorial complete
  if (progress.pages.every(x => x.completed)) {
    store.dispatch(completeTutorial());
  }
  return { type: COMPLETE_PAGE, payload: { pagePosition, tutorial } };
}

export function completeTutorial(): Action {
  const {tutorial} = store.getState();
  return { type: COMPLETE_TUTORIAL, payload: { tutorial } };
}
