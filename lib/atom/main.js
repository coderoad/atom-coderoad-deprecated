'use strict';
var render_1 = require('../components/render');
var polyfills_1 = require('../services/polyfills');
var subscriptions_1 = require('./subscriptions');
var store_1 = require('../store/store');
var actions_1 = require('../actions/actions');
function setDir() {
    if (atom.project.rootDirectories.length > 0) {
        return atom.project.rootDirectories[0].path;
    }
    else {
        return null;
    }
}
function setWin() {
    return navigator.appVersion.indexOf('Win') > -1;
}
var Main = (function () {
    function Main() {
        polyfills_1.default();
        window.coderoad = {
            dir: setDir(),
            win: setWin()
        };
        store_1.store.dispatch(actions_1.verifySetup());
        this.root = render_1.initRoot();
    }
    Main.prototype.activate = function () {
        atom.workspace.addRightPanel({
            item: this.root,
            priority: 0
        });
        subscriptions_1.onActivate();
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
        subscriptions_1.onDeactivate();
    };
    Main.prototype.toggle = function () {
        render_1.togglePanel();
    };
    return Main;
}());
;
module.exports = new Main();
