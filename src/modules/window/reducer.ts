import {QUIT, WINDOW_TOGGLE} from './types';

/**
 * Window open status reducer
 * @param  {} open=false
 * @param  {Action} action
 * @returns boolean window open status
 */
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
