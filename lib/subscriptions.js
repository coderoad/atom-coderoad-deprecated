"use strict";
var atom_1 = require('atom');
var store_1 = require('./store');
var actions_1 = require('./actions');
var subscriptions = null;
function onActivate(store) {
    subscriptions = new atom_1.CompositeDisposable;
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cr-viewer:toggle': function () { return store.dispatch(actions_1.windowToggle()); }
    }));
    atom.workspace.observeTextEditors(function (editor) {
        subscriptions.add(editor.onDidSave(function () { return store.dispatch(actions_1.testRun()); }));
    });
    return subscriptions;
}
exports.onActivate = onActivate;
function onDeactivate(store) {
    store.subscribe(function () { return null; });
    subscriptions.dispose();
}
exports.onDeactivate = onDeactivate;
function addToStatusBar(statusBar) {
    var replay = document.createElement('div');
    replay.className = 'cr-alert-replay';
    replay.textContent = '▲';
    replay.onclick = function () { return store_1.default.dispatch(actions_1.alertReplay()); };
    return statusBar.addLeftTile({ item: replay, priority: 100 });
}
exports.addToStatusBar = addToStatusBar;
