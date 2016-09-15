/**
 * User directory path Redux reducer
 * @param  {string} dir default user directory path
 * @returns string user directory path
 */
export default function dirReducer(
  dir: string
): string {
  if (atom && atom.project.rootDirectories.length > 0) {
    return atom.project.rootDirectories[0].path;
  }
  return '';
}
