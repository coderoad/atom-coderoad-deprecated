import {PAGE_SET} from '../../actions/_types';
// import {clearConsole} from '../../atom/editor';

const _page: CR.Page = {
  title: '',
  description: '',
};

export default function pageReducer(
  p = _page, action: Action
): CR.Page {
  switch (action.type) {

    case PAGE_SET:
      const {pagePosition, tutorial} = action.payload;
      const {title, description, onPageComplete} = tutorial.pages[pagePosition];
      // clear dev console
      // clearConsole();
      return {
        title,
        description,
        onPageComplete,
      };

    default:
      return p;
  }
}
