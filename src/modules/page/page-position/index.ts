import {PAGE_SET} from '../types';

export default function pagePosition(
  pagePosition = 0, action: Action
): CR.PagePosition {
  switch (action.type) {

    case PAGE_SET:
      return action.payload.pagePosition;

    // allow access until before first incomplete tutorial
    case 'PROGRESS_PAGE_POSITION':
      const pages = action.payload.progress.pages;
      const firstFail = pages.indexOf(false);
      return firstFail < 0 ? pages.length - 1 : firstFail;

    default:
      return pagePosition;
  }
}
