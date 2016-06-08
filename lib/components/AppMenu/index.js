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
var React = require('react');
var react_redux_1 = require('react-redux');
var AppBar_1 = require('material-ui/AppBar');
var CloseWindow_1 = require('./CloseWindow');
var menuRight_1 = require('./menuRight');
var styles = {
    zIndex: '1',
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
    AppMenu = __decorate([
        react_redux_1.connect(function (state) { return ({
            route: state.route,
        }); }), 
        __metadata('design:paramtypes', [])
    ], AppMenu);
    return AppMenu;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppMenu;
