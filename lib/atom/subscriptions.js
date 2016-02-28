"use strict";
var CompositeDisposable = require('atom').CompositeDisposable;
var store_1 = require('../store/store');
var Action = require('../actions/actions');
var render_1 = require('../components/render');
var subscriptions = null;
function onActivateSubscriptions() {
    subscriptions = new CompositeDisposable;
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cr-viewer:toggle': render_1.togglePanel
    }));
    atom.workspace.observeTextEditors(function (editor) {
        subscriptions.add(editor.onDidSave(function () {
            store_1.store.dispatch(Action.runTests());
        }));
    });
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cr-viewer:runTests': (function () {
            if (store_1.store.getState().route === 'page') {
                store_1.store.dispatch(Action.runTests());
            }
        })
    }));
    return subscriptions;
}
exports.onActivateSubscriptions = onActivateSubscriptions;
function onDeactivateSubscriptionsAndUnmount() {
    render_1.unmount(document.getElementById('crv'));
    subscriptions.dispose();
}
exports.onDeactivateSubscriptionsAndUnmount = onDeactivateSubscriptionsAndUnmount;
function addToStatusBar(statusBar) {
    var replay = document.createElement('div');
    replay.className = 'cr-alert-replay';
    replay.textContent = '▲';
    replay.onclick = function () { return store_1.store.dispatch(Action.replayAlert()); };
    return statusBar.addLeftTile({ item: replay, priority: 100 });
}
exports.addToStatusBar = addToStatusBar;
