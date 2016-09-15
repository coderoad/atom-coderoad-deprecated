"use strict";
function toggleDevTools() {
    atom.toggleDevTools();
}
exports.toggleDevTools = toggleDevTools;
function clearConsole() {
    atom.executeJavaScriptInDevTools(console.clear());
}
exports.clearConsole = clearConsole;
function openDevTools() {
    atom.openDevTools();
}
exports.openDevTools = openDevTools;
