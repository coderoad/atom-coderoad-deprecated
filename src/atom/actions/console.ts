let consoleHasOpened = false;
export function toggleDevTools(): void {
  if (!consoleHasOpened) {
    // clear console on first run
    // atom.executeJavaScriptInDevTools(console.clear());
    consoleHasOpened = true;
    console.log('Atom-CodeRoad: runs on save');
  }
  atom.toggleDevTools();
}

export function openDevTools(): void {
  atom.openDevTools();
  consoleHasOpened = true;
}
