"use strict";
var actions_1 = require('../../actions');
function addToStatusBar(store, statusBar) {
    var replay = document.createElement('div');
    replay.className = 'cr-alert-replay';
    replay.textContent = '▲';
    replay.onclick = function () { return store.dispatch(actions_1.alertReplay()); };
    return statusBar.addLeftTile({ item: replay, priority: 100 });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = addToStatusBar;
//# sourceMappingURL=index.js.map