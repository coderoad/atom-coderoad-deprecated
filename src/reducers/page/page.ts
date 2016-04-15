import {
  SET_PAGE, PAGE_COMPLETE
} from '../../actions/actionTypes';

const defaultPage: CR.Page = {
  title: '',
  description: '',
  completed: false
};

export default function pageReducer(page = defaultPage,
  action: CR.Action): CR.Page {
  switch (action.type) {
    case SET_PAGE:
      return action.payload.page;
    case PAGE_COMPLETE:
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
