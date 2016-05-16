import {EDITOR_DEVTOOLS_TOGGLE} from '../types';
import {toggleDevTools} from '../../../atom/editor';

// trigger editor actions here
export default function editor(
  editor = 'atom', action: Action
): string {
  switch (action.type) {

    case EDITOR_DEVTOOLS_TOGGLE:
      toggleDevTools();
      return editor;

    default:
      return editor;
  }
}
