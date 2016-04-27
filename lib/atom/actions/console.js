"use strict";
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
