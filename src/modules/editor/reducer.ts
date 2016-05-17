import {
  EDITOR_DEVTOOLS_TOGGLE, EDITOR_SAVE, EDITOR_OPEN,
  EDITOR_SET, EDITOR_INSERT
} from './types';
import {toggleDevTools, save, set, insert, open} from './index';

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

    case EDITOR_OPEN:
      const {file, options} = action.payload;
      open(file, options);
      return editor;

    case EDITOR_INSERT:
      insert(action.payload.content);
      return editor;

    case EDITOR_SET:
      set(action.payload.content);
      return editor;

    default:
      return editor;
  }
}
