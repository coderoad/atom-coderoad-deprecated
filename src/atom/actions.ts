export function closeAllPanels(): void {
  let editors: AtomCore.IEditor[] = atom.workspace.getTextEditors();
  editors.forEach((editor: AtomCore.IEditor) => {
    // if (editor !== activeEditor) {
    editor.destroy();
    //  }
  });
}

export function quit(): void {
  // TODO: quit without destroying ALL subscriptions
}

export function openFolder(): void {
  atom.open();
}

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

export function openTerminal(): boolean {
  if (atom.packages.isPackageActive('terminal-plus')) {
    if (!document.getElementsByClassName('xterm')[0]) {
      atom.commands.dispatch(document.getElementsByTagName('atom-workspace')[0], 'terminal-plus:toggle');
    }
    return true;
  }
  return false;
}
