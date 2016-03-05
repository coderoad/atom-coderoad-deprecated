'use strict';
var render_1 = require('../components/render');
var polyfills_1 = require('../services/polyfills');
var subscriptions_1 = require('./subscriptions');
var editor_1 = require('./editor');
var Main = (function () {
    function Main() {
        window.coderoad = {
            dir: null,
            setup: {}
        };
        polyfills_1.default();
        editor_1.setAtomGlobals();
        this.root = render_1.initRoot();
    }
    Main.prototype.activate = function () {
        atom.workspace.addRightPanel({
            item: this.root
        });
        subscriptions_1.onActivateSubscriptions();
        render_1.render(this.root);
    };
    Main.prototype.consumeStatusBar = function (statusBar) {
        this.statusBarTile = subscriptions_1.addToStatusBar(statusBar);
    };
    Main.prototype.deactivate = function () {
        if (this.statusBarTile) {
            this.statusBarTile.destroy();
            this.statusBarTile = null;
        }
        subscriptions_1.onDeactivateSubscriptionsAndUnmount();
    };
    Main.prototype.toggle = function () {
        render_1.togglePanel();
    };
    return Main;
}());
;
module.exports = new Main();
