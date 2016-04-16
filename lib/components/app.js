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
var _components_1 = require('./_components');
var theme_1 = require('./theme/theme');
var MuiThemeProvider_1 = require('material-ui/styles/MuiThemeProvider');
var height = atom.getSize().height;
window.onresize = function () {
    height = atom.getSize().height;
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var state = this.props.state;
        return (React.createElement(MuiThemeProvider_1.default, {muiTheme: theme_1.muiTheme}, React.createElement("section", {className: 'cr', key: 'main', style: { height: height }}, React.createElement(_components_1.AppMenu, {route: state.route, position: state.position}), React.createElement(_components_1.Routes, {state: state, ref: 'route'}), React.createElement(_components_1.Alert, {alert: state.alert}))));
    };
    App = __decorate([
        react_redux_1.connect(function (state) {
            return { state: state };
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}(React.Component));
exports.App = App;
;
