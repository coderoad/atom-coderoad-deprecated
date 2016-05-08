import {PAGE_SET, COMPLETE_PAGE} from '../../actions/_types';
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
      const pagePosition: CR.PagePosition = action.payload.pagePosition;
      const {title, description, onPageComplete, completed} = action.payload.tutorial.pages[pagePosition];
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
