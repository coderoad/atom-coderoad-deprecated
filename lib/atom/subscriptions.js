"use strict";
var CompositeDisposable = require('atom').CompositeDisposable;
var store_1 = require('../store');
var actions_1 = require('../actions');
var mount_1 = require('../components/mount');
var subscriptions = null;
function onActivate() {
    subscriptions = new CompositeDisposable;
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cr-viewer:toggle': mount_1.togglePanel
    }));
    atom.workspace.observeTextEditors(function (editor) {
        subscriptions.add(editor.onDidSave(function () {
            store_1.store.dispatch(actions_1.testRun());
        }));
    });
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cr-viewer:testRun': (function () {
            if (store_1.store.getState().route === 'page') {
                store_1.store.dispatch(actions_1.testRun());
            }
        })
    }));
    return subscriptions;
}
exports.onActivate = onActivate;
function onDeactivate() {
    window.onresize = null;
    mount_1.unmount();
    subscriptions.dispose();
}
exports.onDeactivate = onDeactivate;
function addToStatusBar(statusBar) {
    var replay = document.createElement('div');
    replay.className = 'cr-alert-replay';
    replay.textContent = '▲';
    replay.onclick = function () { return store_1.store.dispatch(actions_1.alertReplay()); };
    return statusBar.addLeftTile({ item: replay, priority: 100 });
}
exports.addToStatusBar = addToStatusBar;
