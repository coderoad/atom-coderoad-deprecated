export function toggleDevTools(): void {
  atom.toggleDevTools();
}

export function clearConsole(): void {
  atom.executeJavaScriptInDevTools(console.clear());
}

export function openDevTools(): void {
  atom.openDevTools();
}
