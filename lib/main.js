"use strict";
var ReactDOM = require('react-dom');
var actions = require('./actions');
var SidePanel_1 = require('./components/SidePanel');
var StatusBar_1 = require('./components/StatusBar');
var setup_1 = require('./modules/setup');
var polyfills_1 = require('./utils/polyfills');
var injectTapEventPlugin = require('react-tap-event-plugin');
process.env.NODE_ENV = 'production';
var Main = (function () {
    function Main(editor) {
        this.editor = editor;
        injectTapEventPlugin();
        polyfills_1.default();
        this.side = SidePanel_1.sideElement.init();
        this.subscriptions = new editor.Subscriptions();
    }
    Main.prototype.activate = function () {
        this.store = require('./store').default;
        this.store.dispatch(setup_1.setupVerify());
        this.editor.addRightPanel(this.side);
        this.subscriptions.onActivate(this.store, actions);
        ReactDOM.render(SidePanel_1.SideRoot(this.store), this.side);
    };
    Main.prototype.deactivate = function () {
        if (this.statusBarTile) {
            this.statusBarTile.destroy();
            this.statusBarTile = null;
        }
        this.subscriptions.onDeactivate(this.store);
        SidePanel_1.sideElement.unmount();
    };
    Main.prototype.consumeStatusBar = function (statusBar) {
        this.statusBarTile = StatusBar_1.default(this.store, statusBar);
    };
    return Main;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Main;
;
//# sourceMappingURL=main.js.map