"use strict";
function addToStatusBar(store, statusBar) {
    var replay = document.createElement('div');
    replay.className = 'cr-alert-replay';
    replay.textContent = '▲';
    replay.onclick = function () { return store.dispatch(alertReplay()); };
    return statusBar.addLeftTile({ item: replay, priority: 100 });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = addToStatusBar;
