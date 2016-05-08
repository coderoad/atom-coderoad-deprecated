import {
  PAGE_SET, PAGE_POSITION_SET, PAGE_POSITION_LOAD
} from '../../actions/_types';

export default function pagePositionReducer(
  pagePosition = 0, action: Action
): CR.PagePosition {
  switch (action.type) {

    case PAGE_POSITION_LOAD:
      const pages = action.payload.progress.pages;
      const firstFail = pages.indexOf(false);
      return firstFail < 0 ? pages.length - 1 : firstFail;

    case PAGE_SET:
    case PAGE_POSITION_SET:
      return action.payload.pagePosition;

    default:
      return pagePosition;
  }
}
