import {
  EDITOR_DEVTOOLS_TOGGLE, EDITOR_INSERT, EDITOR_OPEN,
  EDITOR_SAVE, EDITOR_SCROLL, EDITOR_SET,
  EDITOR_WRITE_FILE_FROM_CONTENT, EDITOR_WRITE_FILE_FROM_FILE
} from './types';
import {join} from 'path';

export function editorDevToolsToggle(): Action {
  return { type: EDITOR_DEVTOOLS_TOGGLE };
}

export function editorInsert(content: string): Action {
  return { type: EDITOR_INSERT, payload: { content } };
}

// opens file within a directory
export function editorOpen(file: string, options: Object) {
  return (dispatch, getState) => {
    file = join(getState().dir, file);
    dispatch({ type: EDITOR_OPEN, payload: { file, options } });
  };
}

export function editorSave(): Action {
  return { type: EDITOR_SAVE };
}

export function editorSet(content: string): Action {
  return { type: EDITOR_SET, payload: { content } };
}

export function editorScroll(content: string): Action {
  return { type: EDITOR_SCROLL, payload: { content } };
}

export function editorWriteFileFromContent(to: string, content: string) {
  return (dispatch, getState) => {
    const { dir } = getState();
    dispatch({
      type: EDITOR_WRITE_FILE_FROM_CONTENT,
      payload: { to, content, dir }
    });
  };
}

export function editorWriteFileFromFile(to: string, from: string) {
  return (dispatch, getState) => {
    const { dir, tutorial } = getState();
    const tutorialDir = tutorial.config.dir;
    dispatch({
      type: EDITOR_WRITE_FILE_FROM_FILE,
      payload: { to, from, dir, tutorialDir }
    });
  };
}
