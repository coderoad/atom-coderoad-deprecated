import {
  PROGRESS_PAGE_POSITION_LOAD, PAGE_SET
} from '../../actions/_types';

export default function pagePositionReducer(
  pagePosition = 0, action: Action
): CR.PagePosition {
  switch (action.type) {

    // case PROGRESS_PAGE_POSITION_LOAD:
    //   const pages = action.payload.progress.pages;
    //   const firstFail = pages.indexOf(false);
    //   return firstFail < 0 ? pages.length - 1 : firstFail;

    case PAGE_SET:
      return action.payload.pagePosition;

    default:
      return pagePosition;
  }
}
