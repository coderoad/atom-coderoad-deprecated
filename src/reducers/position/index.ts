import {
  PAGE_SET, POSITION_SET, POSITION_LOAD
} from '../../actions/_types';
import store from '../../store';

const _position: CR.Position = {
  page: 0,
};

export default function positionReducer(
  position = _position, action: Action
): CR.Position {
  switch (action.type) {
    case POSITION_LOAD:
      const pages = store.getState().progress.pages;
      let page = pages.indexOf(x => !x);
      // all pages complete ? page = -1
      if (page < 0) {
        page = pages.length - 1;
      }
      return { page };
    case PAGE_SET:
    case POSITION_SET:
      return action.payload.position;
    default:
      return position;
  }
}
