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
var index_1 = require('../index');
var Routes = (function (_super) {
    __extends(Routes, _super);
    function Routes() {
        _super.apply(this, arguments);
    }
    Routes.prototype.render = function () {
        switch (this.props.route) {
            case 'page':
                return React.createElement(index_1.Page, null);
            case 'progress':
                return React.createElement(index_1.Progress, null);
            case 'start':
                return React.createElement(index_1.Start, null);
            case 'tutorials':
                return React.createElement(index_1.Tutorials, null);
            case 'final':
                return React.createElement(index_1.FinalPage, null);
            default:
                throw 'Error: Route not found.';
        }
    };
    Routes = __decorate([
        react_redux_1.connect(function (state) { return ({
            route: state.route,
        }); }), 
        __metadata('design:paramtypes', [])
    ], Routes);
    return Routes;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
