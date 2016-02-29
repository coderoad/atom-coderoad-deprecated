import * as Type from '../../actions/actionTypes';

const defaultPage: CR.Page = {
  title: '',
  description: '',
  explanation: '',
  completed: false
};

export default function pageReducer(page = defaultPage, action: CR.Action): CR.Page {
  switch (action.type) {
    case Type.SET_PAGE:
      return action.payload.page;
    default:
      return page;
  }
}
