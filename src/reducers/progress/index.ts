import {
  PROGRESS_LOAD, COMPLETE_PAGE, COMPLETE_TUTORIAL
} from '../../actions/_types';
import {loadProgressFromLocalStorage, saveToLocalStorage} from './local-storage';
import store from '../../store';

const _progress: CR.Progress = {
  completed: false,
  pages: []
};

export default function progressReducer(
  progress = _progress, action: Action
): CR.Progress {
  switch (action.type) {

    case PROGRESS_LOAD:
      // load saved progress
      const saved = loadProgressFromLocalStorage();
      if (saved) { return saved; }
      // set progress defaults
      return {
        completed: false,
        pages: store.getState().tutorial.pages.map(() => false)
      };

    case COMPLETE_PAGE:
      const pagePosition = action.payload.pagePosition;
      progress.pages[pagePosition] = true;
      saveToLocalStorage(progress);
      return progress;

    case COMPLETE_TUTORIAL:
      progress.completed = true;
      saveToLocalStorage(progress);
      return progress;

    default:
      return progress;
  }
}
