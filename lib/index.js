"use strict";
var ReactDOM = require('react-dom');
var ui_1 = require('./editor/ui');
var SidePanel_1 = require('./components/SidePanel');
var StatusBar_1 = require('./components/StatusBar');
var subscriptions_1 = require('./editor/subscriptions');
var setup_1 = require('./modules/setup');
var store_1 = require('./store');
var polyfills_1 = require('./utils/polyfills');
var injectTapEventPlugin = require('react-tap-event-plugin');
process.env.NODE_ENV = 'production';
var Main = (function () {
    function Main() {
        injectTapEventPlugin();
        polyfills_1.default();
        store_1.default.dispatch(setup_1.setupVerify());
        this.side = SidePanel_1.sideElement.init();
        this.subscriptions = new subscriptions_1.default();
    }
    Main.prototype.activate = function () {
        ui_1.addRightPanel(this.side);
        this.subscriptions.onActivate(store_1.default);
        ReactDOM.render(SidePanel_1.SideRoot(store_1.default), this.side);
    };
    Main.prototype.deactivate = function () {
        if (this.statusBarTile) {
            this.statusBarTile.destroy();
            this.statusBarTile = null;
        }
        this.subscriptions.onDeactivate(store_1.default);
        SidePanel_1.sideElement.unmount();
    };
    Main.prototype.consumeStatusBar = function (statusBar) {
        this.statusBarTile = StatusBar_1.default(store_1.default, statusBar);
    };
    return Main;
}());
;
module.exports = new Main();
//# sourceMappingURL=index.js.map