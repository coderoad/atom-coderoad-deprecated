import {EDITOR_DEVTOOLS_TOGGLE, EDITOR_SAVE} from './types';

export function editorDevToolsToggle(): Action {
  return { type: EDITOR_DEVTOOLS_TOGGLE };
}

export function editorSave(): Action {
  return { type: EDITOR_SAVE };
}
