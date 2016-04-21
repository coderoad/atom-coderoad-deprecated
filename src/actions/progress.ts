import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_CHAPTER, COMPLETE_TUTORIAL
} from './_types';
import {store} from '../store';

export function progressLoad(): Action {
  return { type: PROGRESS_LOAD };
}

export function completePage(): Action {
  const position: CR.Position = store.getState().position;
  const pageLength: number = store.getState().progress.chapters[position.chapter].pages.length;
  if (position.page >= pageLength - 1) {
    store.dispatch(completeChapter());
  }
  return {
    payload: { position },
    type: COMPLETE_PAGE,
  };
}

export function completeChapter(): Action {
  const chapter: number = store.getState().position.chapter;
  const chapterLength: number = store.getState().progress.chapters.length;
  if (chapter >= chapterLength - 1) {
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
