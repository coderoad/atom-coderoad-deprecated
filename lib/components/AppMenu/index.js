"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var CloseWindow_1 = require('./CloseWindow');
var menuRight_1 = require('./menuRight');
var AppBar_1 = require('material-ui/AppBar');
var styles = {
    zIndex: 1,
};
var AppMenu = (function (_super) {
    __extends(AppMenu, _super);
    function AppMenu() {
        _super.apply(this, arguments);
    }
    AppMenu.prototype.render = function () {
        var route = this.props.route;
        return (React.createElement(AppBar_1.default, {title: 'CodeRoad', className: 'cr-menu-bar', style: { styles: styles }, iconElementLeft: React.createElement(CloseWindow_1.default, null), iconElementRight: menuRight_1.default(route)}));
    };
    return AppMenu;
}(React.Component));
var mapStateToProps = function (state) { return ({
    route: state.route,
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(AppMenu);
//# sourceMappingURL=index.js.map