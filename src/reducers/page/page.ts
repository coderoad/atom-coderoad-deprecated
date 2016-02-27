import * as Type from '../../actions/actionTypes';

const defaultPage: cr.Page = {
  title: '',
  description: '',
  explanation: '',
  completed: false
};

export default function pageReducer(page = defaultPage, action): cr.Page {
  switch (action.type) {
    case Type.SET_PAGE:
      return action.payload.page;
    default:
      return page;
  }
}
