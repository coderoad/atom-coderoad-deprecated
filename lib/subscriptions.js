"use strict";
var atom_1 = require('atom');
var actions_1 = require('./actions');
var Subscriptions = (function () {
    function Subscriptions() {
        this.subscriptions = new atom_1.CompositeDisposable;
    }
    Subscriptions.prototype.onActivate = function (store) {
        var _this = this;
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'cr-viewer:toggle': function () { return store.dispatch(actions_1.windowToggle()); }
        }));
        atom.workspace.observeTextEditors(function (editor) {
            _this.subscriptions.add(editor.onDidSave(function () { return store.dispatch(actions_1.testRun()); }));
        });
        return this.subscriptions;
    };
    Subscriptions.prototype.onDeactivate = function (store) {
        store.subscribe(function () { return null; });
        this.subscriptions.dispose();
    };
    return Subscriptions;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Subscriptions;
