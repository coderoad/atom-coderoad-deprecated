import {EDITOR_DEVTOOLS_TOGGLE, EDITOR_SAVE} from './types';
import {toggleDevTools, save} from './index';

export default function editor(
  editor = 'atom', action: Action
): string {
  switch (action.type) {

    case EDITOR_DEVTOOLS_TOGGLE:
      toggleDevTools();
      return editor;

    case EDITOR_SAVE:
      save();
      return editor;

    default:
      return editor;
  }
}
