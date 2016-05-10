import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from '../../actions/_types';
import {loadProgressFromLocalStorage, saveToLocalStorage} from './local-storage';

const _progress: CR.Progress = {
  completed: false,
  pages: []
};

export default function progressReducer(
  progress = _progress, action: Action
): CR.Progress {
  switch (action.type) {

    case PROGRESS_LOAD:
      const {tutorial} = action.payload;
      // load saved progress
      const saved = loadProgressFromLocalStorage(tutorial);
      if (saved) { return saved; }
      // set progress defaults
      return {
        completed: false,
        pages: tutorial.pages.map(() => false)
      };

    case COMPLETE_PAGE:
      const {tutorial, pagePosition, completed} = action.payload;
      progress.pages[pagePosition] = completed;
      saveToLocalStorage(tutorial, progress);
      return progress;

    case COMPLETE_TUTORIAL:
      const {tutorial, completed} = action.payload.tutorial;
      progress.completed = completed;
      saveToLocalStorage(tutorial, progress);
      return progress;

    default:
      return progress;
  }
}
