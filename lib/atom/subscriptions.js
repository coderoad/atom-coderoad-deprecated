"use strict";
var CompositeDisposable = require('atom').CompositeDisposable;
var store_1 = require('../store');
var actions_1 = require('../actions');
var root_1 = require('../components/root');
var subscriptions = null;
function onActivate() {
    subscriptions = new CompositeDisposable;
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cr-viewer:toggle': function () { return store_1.default.dispatch({ type: 'WINDOW_TOGGLE' }); }
    }));
    atom.workspace.observeTextEditors(function (editor) {
        subscriptions.add(editor.onDidSave(function () {
            store_1.default.dispatch(actions_1.testRun());
        }));
    });
    return subscriptions;
}
exports.onActivate = onActivate;
function onDeactivate() {
    root_1.default.unmount();
    store_1.default.subscribe(function () { return null; });
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
