import store from '../../store';

function getLocalStorageKey() {
  return 'coderoad:' + store.getState().tutorial.name;
}

export function saveToLocalStorage(progress: CR.Progress): void {
  try {
  window.localStorage
    .setItem(getLocalStorageKey(), JSON.stringify(progress));
  } catch (e) {
    console.log('Error saving progress:', e);
  }
}

export function loadProgressFromLocalStorage() {
  const savedProgress: CR.Progress = JSON.parse(
    window.localStorage.getItem(getLocalStorageKey()) || null
  );
  if (savedProgress) {
    return savedProgress;
  }
  return null;
}
