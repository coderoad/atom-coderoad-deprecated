/**
 * Toggle atom devtools console
 * @returns void
 */
export function toggleDevTools(): void {
  atom.toggleDevTools();
}

/**
 * Clear atom devtools console
 * @returns void
 */
export function clearConsole(): void {
  atom.executeJavaScriptInDevTools(console.clear());
}

/**
 * Open atom devtools
 * @returns void
 */
export function openDevTools(): void {
  atom.openDevTools();
}
