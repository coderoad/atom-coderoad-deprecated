import {
  PAGE_SET, POSITION_SET, POSITION_LOAD
} from '../../actions/_types';
import store from '../../store';

const _position: CR.Position = {
  chapter: 0,
  page: 0,
};

export default function positionReducer(
  position = _position, action: Action
): CR.Position {
  switch (action.type) {
    case POSITION_LOAD:
      const chapters = store.getState().progress.chapters;
      let chapter = chapters.indexOf(x => !x.completed);
      if (chapter < 0) {
        chapter = chapters.length - 1;
      }
      const progressPage = chapters[chapter].pages;
      let page = progressPage.indexOf(x => !x);
      if (page < 0) {
        page = progressPage.length - 1;
      }
      return { chapter, page };
    case PAGE_SET:
    case POSITION_SET:
      return action.payload.position;
    default:
      return position;
  }
}
