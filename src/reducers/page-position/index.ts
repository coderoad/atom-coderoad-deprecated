import {
  PAGE_SET, PAGE_POSITION_SET, PAGE_POSITION_LOAD
} from '../../actions/_types';
import store from '../../store';

export default function pagePositionReducer(
  pagePosition = 0, action: Action
): CR.PagePosition {
  switch (action.type) {
    case PAGE_POSITION_LOAD:
      const pages = store.getState().progress.pages;
      pagePosition = pages.indexOf(x => x) + 1;
      console.log('expected pagePosition', pagePosition, pages);
      // all pages complete ? page = -1
      if (pagePosition >= pages.length) {
        pagePosition = pages.length - 1;
      }
      return pagePosition;
    case PAGE_SET:
    case PAGE_POSITION_SET:
      return action.payload.pagePosition;
    default:
      return pagePosition;
  }
}
