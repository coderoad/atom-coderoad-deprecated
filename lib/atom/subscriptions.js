"use strict";
var CompositeDisposable = require('atom').CompositeDisposable;
var store_1 = require('../store/store');
var actions_1 = require('../actions/actions');
var render_1 = require('../components/render');
var subscriptions = null;
function onActivate() {
    subscriptions = new CompositeDisposable;
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cr-viewer:toggle': render_1.togglePanel
    }));
    atom.workspace.observeTextEditors(function (editor) {
        subscriptions.add(editor.onDidSave(function () {
            store_1.store.dispatch(actions_1.runTests());
        }));
    });
    subscriptions.add(atom.commands.add('atom-workspace', {
        'cr-viewer:runTests': (function () {
            if (store_1.store.getState().route === 'page') {
                store_1.store.dispatch(actions_1.runTests());
            }
        })
    }));
    return subscriptions;
}
exports.onActivate = onActivate;
function onDeactivate() {
    window.onresize = null;
    render_1.unmount();
    subscriptions.dispose();
}
exports.onDeactivate = onDeactivate;
function addToStatusBar(statusBar) {
    var replay = document.createElement('div');
    replay.className = 'cr-alert-replay';
    replay.textContent = '▲';
    replay.onclick = function () { return store_1.store.dispatch(actions_1.replayAlert()); };
    return statusBar.addLeftTile({ item: replay, priority: 100 });
}
exports.addToStatusBar = addToStatusBar;
