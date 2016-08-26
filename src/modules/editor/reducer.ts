import {
  EDITOR_DEVTOOLS_TOGGLE, EDITOR_INSERT, EDITOR_OPEN, EDITOR_SAVE, EDITOR_SCROLL, EDITOR_SET, EDITOR_WRITE_FILE_FROM_CONTENT, EDITOR_WRITE_FILE_FROM_FILE
} from './types';
import {insert, open, save, scroll, set, toggleDevTools, writeFileFromContent, writeFileFromFile} from './index';

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

    case EDITOR_SCROLL:
      scroll(action.payload.content);
      return editor;

    case EDITOR_WRITE_FILE_FROM_FILE:
      writeFileFromFile(action.payload);
      return editor;

    case EDITOR_WRITE_FILE_FROM_CONTENT:
      writeFileFromContent(action.payload);
      return editor;

    default:
      return editor;
  }
}
