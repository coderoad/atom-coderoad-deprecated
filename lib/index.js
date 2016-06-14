"use strict";
var render_1 = require('./components/render');
var element_1 = require('./components/SidePanel/element');
var core_coderoad_1 = require('core-coderoad');
var subscriptions_1 = require('./subscriptions');
var store_1 = require('./store');
var setup_1 = require('./modules/setup');
var injectTapEventPlugin = require('react-tap-event-plugin');
var Main = (function () {
    function Main() {
        injectTapEventPlugin();
        core_coderoad_1.loadPolyfills();
        store_1.default.dispatch(setup_1.setupVerify());
        this.root = element_1.default.init();
    }
    Main.prototype.activate = function () {
        atom.workspace.addRightPanel({
            item: this.root,
            priority: 0,
        });
        subscriptions_1.onActivate();
        render_1.default(this.root);
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
    return Main;
}());
;
module.exports = new Main();
