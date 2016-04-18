"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../actions');
var mount_1 = require('../mount');
var subscriptions_1 = require('../../atom/subscriptions');
var AppBar_1 = require('material-ui/AppBar');
var IconButton_1 = require('material-ui/IconButton');
var IconMenu_1 = require('material-ui/IconMenu');
var MenuItem_1 = require('material-ui/MenuItem');
var Divider_1 = require('material-ui/Divider');
var MenuLink_1 = require('./MenuLink');
var more_vert_1 = require('material-ui/svg-icons/navigation/more-vert');
var close_1 = require('material-ui/svg-icons/navigation/close');
var origin = { horizontal: 'right', vertical: 'top' };
var AppMenu = (function (_super) {
    __extends(AppMenu, _super);
    function AppMenu() {
        _super.apply(this, arguments);
    }
    AppMenu.prototype.navOptions = function () {
        var routeToPage = this.props.routeToPage;
        switch (this.props.route) {
            case 'final':
            case 'page':
                return React.createElement(MenuLink_1.MenuLink, {route: 'progress'});
            case 'progress':
                return (React.createElement(MenuItem_1.default, {onTouchTap: routeToPage, primaryText: 'page', key: 'page'}));
            default: return null;
        }
    };
    AppMenu.prototype.menuOptions = function () {
        switch (this.props.route) {
            case 'final':
            case 'page':
                return (React.createElement("div", null, React.createElement(MenuLink_1.MenuLink, {route: 'progress'}), React.createElement(MenuLink_1.MenuLink, {route: 'tutorials'})));
            case 'progress':
                return React.createElement(MenuLink_1.MenuLink, {route: 'tutorials'});
            default: return null;
        }
    };
    AppMenu.prototype.closePanel = function () {
        mount_1.togglePanel();
    };
    AppMenu.prototype.render = function () {
        var quit = this.props.quit;
        return (React.createElement(AppBar_1.default, {title: 'CodeRoad', className: 'cr-menu-bar', iconElementLeft: React.createElement(IconButton_1.default, {onClick: this.closePanel}, React.createElement(close_1.default, null)), iconElementRight: React.createElement(IconMenu_1.default, {iconButtonElement: React.createElement(IconButton_1.default, null, React.createElement(more_vert_1.default, null)), targetOrigin: origin, anchorOrigin: origin}, this.menuOptions(), window.coderoad.issuesPath
            ? React.createElement(MenuItem_1.default, {key: 'issue', className: 'link'}, React.createElement("a", {href: window.coderoad.issuesPath}, "post issue"))
            : null, React.createElement(Divider_1.default, null), React.createElement(MenuItem_1.default, {key: 'quit', onClick: quit}, "quit"))}));
    };
    AppMenu = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                routeToPage: function () {
                    var position = _this.props.position;
                    dispatch(actions_1.pageSet(position));
                    dispatch(actions_1.setRoute('page'));
                },
                quit: function () {
                    mount_1.togglePanel();
                    subscriptions_1.onDeactivate();
                }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], AppMenu);
    return AppMenu;
}(React.Component));
exports.AppMenu = AppMenu;
