import {
  SET_PROGRESS, PAGE_COMPLETE, CHAPTER_COMPLETE, PROJECT_COMPLETE
} from '../../actions/actionTypes';
import Package from '../../services/package';

const defaultProgress: CR.Progress = {
  completed: false,
  chapters: [{
    title: '',
    description: '',
    completed: false,
    pages: [{
      title: '',
      description: '',
      completed: false
    }]
  }]
};

export default function progressReducer(progress = defaultProgress,
  action: CR.Action): CR.Progress {
  switch (action.type) {
    case SET_PROGRESS:
      return Package.getProgress();
    case PAGE_COMPLETE:
      const position = action.payload.position;
      progress.chapters[position.chapter].pages[position.page].completed = true;
      return progress;
    case CHAPTER_COMPLETE:
      progress.chapters[action.payload.chapter].completed = true;
      return progress;
    case PROJECT_COMPLETE:
      progress.completed = true;
      return progress;
    default:
      return progress;
  }
}
