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
var react_router_sans_urls_1 = require('react-router-sans-urls');
var index_1 = require('../index');
var Drawer_1 = require('material-ui/Drawer');
var SidePanel = (function (_super) {
    __extends(SidePanel, _super);
    function SidePanel() {
        _super.apply(this, arguments);
    }
    SidePanel.prototype.render = function () {
        var _a = this.props, isWindowOpen = _a.isWindowOpen, route = _a.route;
        return (React.createElement("section", null, 
            React.createElement(Drawer_1.default, {width: 400, openSecondary: true, open: isWindowOpen}, 
                React.createElement("div", {className: 'cr-bg'}, 
                    React.createElement(index_1.AppMenu, null), 
                    React.createElement(react_router_sans_urls_1.Router, {route: route}, 
                        React.createElement(react_router_sans_urls_1.Route, {path: 'page', component: React.createElement(index_1.Page, null)}), 
                        React.createElement(react_router_sans_urls_1.Route, {path: 'progress', component: React.createElement(index_1.Progress, null)}), 
                        React.createElement(react_router_sans_urls_1.Route, {path: 'start', component: React.createElement(index_1.Start, null)}), 
                        React.createElement(react_router_sans_urls_1.Route, {path: 'tutorials', component: React.createElement(index_1.Tutorials, null)}), 
                        React.createElement(react_router_sans_urls_1.Route, {path: 'final', component: React.createElement(index_1.FinalPage, null)})))
            ), 
            React.createElement(index_1.Alert, null)));
    };
    SidePanel = __decorate([
        react_redux_1.connect(function (state) { return ({
            isWindowOpen: state.window,
            route: state.route,
        }); }), 
        __metadata('design:paramtypes', [])
    ], SidePanel);
    return SidePanel;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SidePanel;
;
