import * as Type from './actionTypes';
import {store} from '../store/store';
import Package from '../services/package';

/* Project */
export function setProject(): CR.Action {
  return { type: Type.SET_PROJECT };
}

export function setGlobals(packageJson: PackageJson): CR.Action {
  return { type: Type.SET_GLOBALS, payload: { packageJson } };
}

export function verifySetup(): CR.Action {
  return { type: Type.VERIFY_SETUP };
}

export function setProgress(): CR.Action {
  return { type: Type.SET_PROGRESS };
}

/* Position */
export function setPosition(position: CR.Position): CR.Action {
  return { type: Type.SET_POSITION, payload: { position } };
}

export function loadTutorial(tutorial: CR.Tutorial): void {
  Package.selectPackage(tutorial.name);
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

export {setRoute} from './routes';
