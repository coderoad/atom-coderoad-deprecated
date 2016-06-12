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
var Toolbar_1 = require('material-ui/Toolbar');
var Save_1 = require('./Save');
var Continue_1 = require('./Continue');
var ToggleDevTools_1 = require('./ToggleDevTools');
var selectors_1 = require('../../../selectors');
var styles = {
    zIndex: '5',
    position: 'relative',
    bottom: '0px',
    right: '0px',
    height: '60px',
    width: '400px',
    margin: '0px',
};
var PageToolbar = (function (_super) {
    __extends(PageToolbar, _super);
    function PageToolbar() {
        _super.apply(this, arguments);
    }
    PageToolbar.prototype.render = function () {
        var _a = this.props, tasksComplete = _a.tasksComplete, children = _a.children;
        return (React.createElement("section", {styles: styles}, children, React.createElement(Toolbar_1.Toolbar, null, React.createElement(Toolbar_1.ToolbarGroup, {float: 'left'}, React.createElement(ToggleDevTools_1.default, null)), React.createElement(Toolbar_1.ToolbarGroup, {float: 'right'}, tasksComplete ? React.createElement(Continue_1.default, null) : React.createElement(Save_1.default, null)))));
    };
    PageToolbar = __decorate([
        react_redux_1.connect(function (state) { return ({
            tasksComplete: selectors_1.taskProgressSelector(state) === 100
        }); }), 
        __metadata('design:paramtypes', [])
    ], PageToolbar);
    return PageToolbar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageToolbar;
