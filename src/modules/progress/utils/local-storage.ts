/**
 * create a key for saving progress in local storage
 * @param  {CR.Tutorial} tutorial
 * @returns tutorial
 */
export function getLocalStorageKey(tutorial: CR.Tutorial): string {
  return 'coderoad:' + tutorial.name;
}

/**
 * save progress to local storage
 * @param  {CR.Tutorial} tutorial
 * @param  {CR.Progress} progress
 * @returns void
 */
export function saveToLocalStorage(
  tutorial: CR.Tutorial, progress: CR.Progress
): void|Error {
  try {
  window.localStorage
    .setItem(getLocalStorageKey(tutorial), JSON.stringify(progress));
  } catch (e) {
    throw new Error(`Error saving progress. Invalid progress: ${progress}. ${e}`);
  }
}
/**
 * load progress from local storage
 * @param  {CR.Tutorial} tutorial
 */
export function loadProgressFromLocalStorage(tutorial: CR.Tutorial): CR.Progress|null {
  const item = window.localStorage.getItem(getLocalStorageKey(tutorial));
  let savedProgress;
  if (item) {
    savedProgress = JSON.parse(item);
  }
  if (savedProgress) {
    return savedProgress;
  }
  return null;
}
