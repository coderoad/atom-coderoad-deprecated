import {QUIT, WINDOW_TOGGLE} from './types';

export default function windowReducer(
  open = false, action: Action
): boolean {
  switch (action.type) {

    case QUIT:
      // TODO: trigger quit
      return false;

    case WINDOW_TOGGLE:
      return !open;

    default:
      return open;
  }
}
