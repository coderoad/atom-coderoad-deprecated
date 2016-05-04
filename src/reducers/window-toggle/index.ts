import {WINDOW_TOGGLE, QUIT} from '../../actions/_types';
import {onDeactivate} from '../../atom/subscriptions';

export default function windowToggleReducer(
  open = false, action: Action
): boolean {
  switch (action.type) {

    case WINDOW_TOGGLE:
      return !open;

    case QUIT:
      onDeactivate();
      return false;

    default:
      return open;
  }
}
