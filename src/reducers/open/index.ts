import {WINDOW_TOGGLE} from '../../actions/_types';
import store from '../../store';

export default function openReducer(
  open = false, action: Action
): boolean {
  switch (action.type) {

    case WINDOW_TOGGLE:
      return !open;

    default:
      return open;
  }
}
