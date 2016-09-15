import {PROGRESS_COMPLETE_PAGE, PROGRESS_COMPLETE_TUTORIAL, PROGRESS_LOAD, PROGRESS_RESET } from './types';
import {loadProgressFromLocalStorage, saveToLocalStorage} from './utils/local-storage';

export const _progress: CR.Progress = {
  completed: false,
  pages: []
};

function getReset(pages: boolean[]) {
  return {
    completed: false,
    pages: pages.map(() => false)
  };
}

/**
 * Progress reducer saves local tutorial progress
 * @param  {} progress=_progress
 * @param  {Action} action
 * @returns CR.Progress
 */
export default function progress(
  progress = _progress, action: Action
): CR.Progress {
  switch (action.type) {

    case PROGRESS_LOAD:
      // load saved progress
      const saved = loadProgressFromLocalStorage(action.payload.tutorial);
      if (saved) { return saved; }
      // set progress defaults
      return getReset(action.payload.tutorial.pages);

    case PROGRESS_COMPLETE_PAGE:
      const {tutorial, pagePosition, completed} = action.payload;
      progress.pages[pagePosition] = completed;
      saveToLocalStorage(tutorial, progress);
      return progress;

    case PROGRESS_COMPLETE_TUTORIAL:
      progress.completed = action.payload.completed;
      saveToLocalStorage(action.payload.tutorial, progress);
      return progress;

    case PROGRESS_RESET:
      const reset = getReset(action.payload.tutorial.pages);
      saveToLocalStorage(action.payload.tutorial, reset);
      return reset;

    default:
      return progress;
  }
}
