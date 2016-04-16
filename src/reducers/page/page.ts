import {
  PAGE_SET, COMPLETE_PAGE
} from '../../actions/_types';

const defaultPage: CR.Page = {
  title: '',
  description: '',
  completed: false
};

export default function pageReducer(page = defaultPage,
  action: CR.Action): CR.Page {
  switch (action.type) {
    case PAGE_SET:
      return action.payload.page;
    case COMPLETE_PAGE:
      return {
        title: page.title,
        description: page.description,
        onPageComplete: page.onPageComplete,
        completed: true
      };
    default:
      return page;
  }
}
