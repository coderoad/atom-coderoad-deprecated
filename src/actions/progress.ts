import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from './_types';
import {pagePositionLoad} from './page';
import store from '../store';

export function progressLoad(): Action {
  setTimeout(function() {
    store.dispatch(pagePositionLoad());
  });
  return { type: PROGRESS_LOAD };
}

function isTrue(x) {
  return x === true;
}

export function completePage(): Action {
  const pagePosition: CR.PagePosition = store.getState().pagePosition;
  const progress = store.getState().progress;
  // all pages are true, tutorial complete
  if (progress.pages.every(x => x.completed)) {
    store.dispatch(completeTutorial());
  }
  return {
    payload: { pagePosition },
    type: COMPLETE_PAGE,
  };
}

export function completeTutorial(): Action {
  return { type: COMPLETE_TUTORIAL };
}
