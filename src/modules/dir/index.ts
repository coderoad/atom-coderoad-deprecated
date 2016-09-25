import {directory} from '../../editor/directory';

/**
 * User directory path Redux reducer
 * @param  {string} dir default user directory path
 * @returns string user directory path
 */
export default function dirReducer(
  dir: string
): string {
  return directory();
}
