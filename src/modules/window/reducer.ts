import {WINDOW_TOGGLE} from './types';

export default function windowToggle(
  open = false, action: Action
): boolean {
  switch (action.type) {

    case WINDOW_TOGGLE:
      return !open;

    default:
      return open;
  }
}
