'use strict';
import * as Type from './actionTypes';
import {store} from '../_base';
import Package from '../services/package';
const _ = require('lodash');

/* Project */
export function setProject(): Action {
  return { type: Type.SET_PROJECT };
}

export function setProgress(): Action {
  return { type: Type.SET_PROGRESS };
}

/* Navigation */
export function setRoute(route: string): Action {
  return { type: Type.SET_ROUTE, payload: { route } };
}

/* Position */
export function setPosition(position: cr.Position): Action {
  return { type: Type.SET_POSITION, payload: { position } };
}

export function loadTutorial(name) {
  Package.selectPackage(name);
  store.dispatch(setProject());
  store.dispatch(setPosition({chapter: 0, page: 0}));
  store.dispatch(setProgress());
}

export function toggleLog(): Action {
  let open = !store.getState().log.open;
  return { type: Type.TOGGLE_LOG, payload: { open } };
}

export function logMessage(message: string): Action {
  return { type: Type.LOG_MESSAGE, payload: { message }};
}

/* Page */
export {setPage, nextPage} from './page-actions';

/* Progress */
export {pageComplete, chapterComplete, projectComplete} from './progress-actions';

/* Tasks */
export {setTaskPosition, showHint, runTests, testComplete, testResult} from './task-actions';

/* Tutorials */
export {loadTutorials} from './tutorials';

/* Alert */
export {toggleAlert, replayAlert} from './alert';
