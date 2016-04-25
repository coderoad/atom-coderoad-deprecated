import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_CHAPTER, COMPLETE_TUTORIAL
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
  const chapter = store.getState().progress.chapters[position.chapter];
  // all pages are true, chapter complete
  if (chapter.pages.every(x => x)) {
    store.dispatch(completeChapter());
  }
  return {
    payload: { position },
    type: COMPLETE_PAGE,
  };
}

export function completeChapter(): Action {
  const chapter: number = store.getState().position.chapter;
  const progress = store.getState().progress;
  // all chapters complete, tutorial complete
  if (progress.chapters.every(x => x.completed)) {
    store.dispatch(completeTutorial());
  }
  return {
    payload: { chapter },
    type: COMPLETE_CHAPTER,
  };
}

export function completeTutorial(): Action {
  return { type: COMPLETE_TUTORIAL };
}
