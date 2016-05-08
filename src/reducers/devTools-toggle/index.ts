import {DEVTOOLS_TOGGLE} from '../../actions/_types';
import {toggleDevTools} from '../../atom/editor';

export default function devToolsToggleReducer(
  open = false, action: Action
): boolean {
  switch (action.type) {

    case DEVTOOLS_TOGGLE:
      toggleDevTools();
      return !open;

    default:
      return open;
  }
}
