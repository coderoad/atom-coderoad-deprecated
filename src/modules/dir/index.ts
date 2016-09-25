import {editor} from '../../index';

/**
 * User directory path Redux reducer
 * @param  {string} dir default user directory path
 * @returns string user directory path
 */
export default function dirReducer(
  dir: string
): string {
  // editor may not be created on startup
  return editor ? editor.directory() : '';
}
