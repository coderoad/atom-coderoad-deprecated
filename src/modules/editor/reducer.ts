import {editor} from '../../index';
import {
  EDITOR_DEVTOOLS_TOGGLE, EDITOR_INSERT, EDITOR_OPEN, EDITOR_SAVE,
  EDITOR_SCROLL, EDITOR_SET, EDITOR_WRITE_FILE_FROM_CONTENT, EDITOR_WRITE_FILE_FROM_FILE
} from './types';

/**
 * Editor Reducer triggers editor actions
 * @param  {} editor='atom'|'vscode'
 * @param  {Action} action 
 * @returns string editor name
 */
export default function editorReducer(
  ed = editor.name, action: Action
): string {
  switch (action.type) {

    case EDITOR_DEVTOOLS_TOGGLE:
      editor.action.toggleDevTools();
      return ed;

    case EDITOR_SAVE:
      editor.action.save();
      return ed;

    case EDITOR_OPEN:
      const {file, options} = action.payload;
      editor.action.open(file, options);
      return ed;

    case EDITOR_INSERT:
      editor.action.insert(action.payload.content);
      return ed;

    case EDITOR_SET:
      editor.action.set(action.payload.content);
      return ed;

    case EDITOR_SCROLL:
      editor.action.scroll(action.payload.content);
      return ed;

    case EDITOR_WRITE_FILE_FROM_FILE:
      editor.action.writeFileFromFile(action.payload);
      return ed;

    case EDITOR_WRITE_FILE_FROM_CONTENT:
      editor.action.writeFileFromContent(action.payload);
      return ed;

    default:
      return ed;
  }
}
