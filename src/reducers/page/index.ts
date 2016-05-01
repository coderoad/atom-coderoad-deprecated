import {PAGE_SET, COMPLETE_PAGE} from '../../actions/_types';
import store from '../../store';
import {clearConsole} from '../../atom/editor';

const _page: CR.Page = {
  title: '',
  description: '',
  completed: false,
};

export default function pageReducer(
  p = _page, action: Action
): CR.Page {
  switch (action.type) {
    case PAGE_SET:
      const {chapter, page} = action.payload.position;
      const {title, description, onPageComplete, completed} = store.getState().tutorial
        .chapters[chapter].pages[page];
      // clear dev console
      clearConsole();
      return {
        title,
        description,
        onPageComplete,
        completed: completed || false
      };
    case COMPLETE_PAGE:
      return Object.assign({}, p, { completed: true });
    default:
      return p;
  }
}
