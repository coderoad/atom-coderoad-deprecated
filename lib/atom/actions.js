"use strict";
function closeAllPanels() {
    var editors = atom.workspace.getTextEditors();
    editors.forEach(function (editor) {
        editor.destroy();
    });
}
exports.closeAllPanels = closeAllPanels;
function quit() {
}
exports.quit = quit;
function openFolder() {
    atom.open();
}
exports.openFolder = openFolder;
var consoleHasOpened = false;
function toggleDevTools() {
    if (!consoleHasOpened) {
        consoleHasOpened = true;
        console.log('Atom-CodeRoad: runs on save');
    }
    atom.toggleDevTools();
}
exports.toggleDevTools = toggleDevTools;
function openDevTools() {
    atom.openDevTools();
    consoleHasOpened = true;
}
exports.openDevTools = openDevTools;
function openTerminal() {
    if (atom.packages.isPackageActive('terminal-plus')) {
        if (!document.getElementsByClassName('xterm')[0]) {
            atom.commands.dispatch(document.getElementsByTagName('atom-workspace')[0], 'terminal-plus:toggle');
        }
        return true;
    }
    return false;
}
exports.openTerminal = openTerminal;
