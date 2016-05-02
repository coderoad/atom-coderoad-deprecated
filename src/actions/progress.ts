import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from './_types';
import {positionLoad} from './position';
import store from '../store';

export function progressLoad(): Action {
  setTimeout(function() {
    store.dispatch(positionLoad());
  });
  return { type: PROGRESS_LOAD };
}

function isTrue(x) {
  return x === true;
}

export function completePage(): Action {
  const position: CR.Position = store.getState().position;
  const progress = store.getState().progress;
  // all pages are true, tutorial complete
  if (progress.pages.every(x => x.completed)) {
    store.dispatch(completeTutorial());
  }
  return {
    payload: { position },
    type: COMPLETE_PAGE,
  };
}

export function completeTutorial(): Action {
  return { type: COMPLETE_TUTORIAL };
}
