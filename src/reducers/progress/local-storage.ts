import store from '../../store';

function getLocalStorageKey(tutorial: CR.Tutorial) {
  return 'coderoad:' + tutorial.name;
}

export function saveToLocalStorage(
  tutorial: CR.Tutorial, progress: CR.Progress
): void {
  try {
  window.localStorage
    .setItem(getLocalStorageKey(tutorial), JSON.stringify(progress));
  } catch (e) {
    console.log('Error saving progress:', e);
  }
}

export function loadProgressFromLocalStorage(tutorial: CR.Tutorial) {
  const savedProgress: CR.Progress = JSON.parse(
    window.localStorage.getItem(getLocalStorageKey(tutorial)) || null
  );
  if (savedProgress) {
    return savedProgress;
  }
  return null;
}
