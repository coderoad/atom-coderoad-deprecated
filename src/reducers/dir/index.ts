export default function dirReducer(
  dir: string = null
): string {
  if (atom.project.rootDirectories.length > 0) {
    return atom.project.rootDirectories[0].path;
  } else {
    return null;
  }
}
