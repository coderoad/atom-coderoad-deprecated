'use strict';
import * as Type from './actionTypes';
import {store} from '../_base';
import Package from '../services/package';

/* Project */
export function setProject(): CR.Action {
  return { type: Type.SET_PROJECT };
}

export function setupWarning(warning: CR.SetupWarning): CR.Action {
  return { type: Type.SETUP_WARNING, payload: { warning } };
}

export function setProgress(): CR.Action {
  return { type: Type.SET_PROGRESS };
}

/* Navigation */
export function setRoute(route: string): CR.Action {
  return { type: Type.SET_ROUTE, payload: { route } };
}

/* Position */
export function setPosition(position: CR.Position): CR.Action {
  return { type: Type.SET_POSITION, payload: { position } };
}

export function loadTutorial(name: string): void {
  Package.selectPackage(name);
  store.dispatch(setProject());
  store.dispatch(setPosition({chapter: 0, page: 0}));
  store.dispatch(setProgress());
}

export function toggleLog(): CR.Action {
  let open = !store.getState().log.open;
  return { type: Type.TOGGLE_LOG, payload: { open } };
}

export function logMessage(message: string): CR.Action {
  return { type: Type.LOG_MESSAGE, payload: { message }};
}


/* Page */
export {setPage, nextPage} from './page-actions';

/* Progress */
export {pageComplete, chapterComplete, projectComplete} from './progress-actions';

/* Tasks */
export {showHint, runTests, testComplete, testResult, setHintPosition} from './task-actions';

/* Tutorials */
export {loadTutorials} from './tutorials';

/* Alert */
export {toggleAlert, replayAlert} from './alert';
