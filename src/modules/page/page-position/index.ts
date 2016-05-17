import {PAGE_SET} from '../types';

export default function pagePosition(
  pagePosition = 0, action: Action
): CR.PagePosition {
  switch (action.type) {

    case PAGE_SET:
      return action.payload.pagePosition;

    default:
      return pagePosition;
  }
}
