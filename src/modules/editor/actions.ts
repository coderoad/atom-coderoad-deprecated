import {
  EDITOR_DEVTOOLS_TOGGLE, EDITOR_INSERT, EDITOR_OPEN,
  EDITOR_SAVE, EDITOR_SET
} from './types';

export function editorDevToolsToggle(): Action {
  return { type: EDITOR_DEVTOOLS_TOGGLE };
}

export function editorInsert(content: string): Action {
  return { type: EDITOR_INSERT, payload: { content } };
}

export function editorOpen(file: string, options: Object): Action {
  return { type: EDITOR_OPEN, payload: { file, options } };
}

export function editorSave(): Action {
  return { type: EDITOR_SAVE };
}

export function editorSet(content: string): Action {
  return { type: EDITOR_SET, payload: { content } };
}
