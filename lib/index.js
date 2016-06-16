"use strict";
var ReactDOM = require('react-dom');
var SidePanel_1 = require('./components/SidePanel');
var core_coderoad_1 = require('core-coderoad');
var subscriptions_1 = require('./subscriptions');
var StatusBar_1 = require('./components/StatusBar');
var store_1 = require('./store');
var setup_1 = require('./modules/setup');
var injectTapEventPlugin = require('react-tap-event-plugin');
var Main = (function () {
    function Main() {
        injectTapEventPlugin();
        core_coderoad_1.loadPolyfills();
        store_1.default.dispatch(setup_1.setupVerify());
        this.side = SidePanel_1.sideElement.init();
        this.subscriptions = new subscriptions_1.default;
    }
    Main.prototype.activate = function () {
        atom.workspace.addRightPanel({
            item: this.side,
            priority: 0,
        });
        this.subscriptions.onActivate(store_1.default);
        ReactDOM.render(SidePanel_1.SideRoot(store_1.default), this.side);
    };
    Main.prototype.consumeStatusBar = function (statusBar) {
        this.statusBarTile = StatusBar_1.default(store_1.default, statusBar);
    };
    Main.prototype.deactivate = function () {
        if (this.statusBarTile) {
            this.statusBarTile.destroy();
            this.statusBarTile = null;
        }
        this.subscriptions.onDeactivate(store_1.default);
        SidePanel_1.sideElement.unmount();
    };
    return Main;
}());
;
module.exports = new Main();
