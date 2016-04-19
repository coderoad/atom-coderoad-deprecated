import {
PAGE_SET, PAGE_NEXT, COMPLETE_PAGE
} from '../../actions/_types';
import {store} from '../../store';

const _page: CR.Page = {
  title: '',
  description: '',
  completed: false
};

export default function pageReducer(p = _page, action: CR.Action): CR.Page {
  switch (action.type) {
    case PAGE_NEXT:
    let next = null;
      const pos = action.payload.position;
      const {chapters} = store.getState().tutorials.chapters;
      if (pos.page < chapters[pos.chapter].pages.length - 1) {
        next = {
          chapter: pos.chapter,
          page: pos.page + 1
        };
      } else if (pos.chapter < chapters.length - 1) {
        next = {
          chapter: pos.chapter + 1,
          page: 0
        };
      } else {
        // store.dispatch(completeTutorial());
        next = {
          chapter: pos.chapter,
          page: pos.page,
          completed: true
        };
      }
      /* falls through */
    case PAGE_SET:
      let {chapter, page, completed} = next || action.payload.selectedPosition;
      const tp = store.getState().tutorials.chapters[chapter].pages[page];
      return Object.assign(
        {},
        { completed: completed || false},
        {
          title: tp.title,
          description: tp.description,
          onPageComplete: tp.onPageComplete,
          completed: tp.completed
        }
      );
    case COMPLETE_PAGE:
      const {title, description, onPageComplete} = p;
      return {
        title,
        description,
        onPageComplete,
        completed: true
      };
    default:
      return p;
  }
}
