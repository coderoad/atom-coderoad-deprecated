import * as Type from '../../actions/actionTypes';
import Package from '../../services/package';

const defaultProgress: cr.Progress = {
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

export default function progressReducer(progress = defaultProgress, action): cr.Progress {
  switch (action.type) {
    case Type.SET_PROGRESS:
      return Package.getProgress();
    case Type.PAGE_COMPLETE:
      const position = action.payload.position;
      progress.chapters[position.chapter].pages[position.page].completed = true;
      return progress;
    case Type.CHAPTER_COMPLETE:
      progress.chapters[action.payload.chapter].completed = true;
      return progress;
    case Type.PROJECT_COMPLETE:
      progress.completed = true;
      return progress;
    default:
      return progress;
  }
}
