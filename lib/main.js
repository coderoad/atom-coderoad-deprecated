"use strict";
var ReactDOM = require('react-dom');
var actions = require('./actions');
var SidePanel_1 = require('./components/SidePanel');
var StatusBar_1 = require('./components/StatusBar');
var setup_1 = require('./modules/setup');
var store_1 = require('./store');
var polyfills_1 = require('./utils/polyfills');
var injectTapEventPlugin = require('react-tap-event-plugin');
var Main = (function () {
    function Main(editor) {
        injectTapEventPlugin();
        polyfills_1.default();
        this.editor = editor;
        store_1.default.dispatch(setup_1.setupVerify());
        this.side = SidePanel_1.sideElement.init();
        this.subscriptions = new editor.Subscriptions();
    }
    Main.prototype.activate = function () {
        this.editor.addRightPanel(this.side);
        this.subscriptions.onActivate(store_1.default, actions);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
//# sourceMappingURL=main.js.map