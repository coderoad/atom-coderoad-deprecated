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
var RaisedButton_1 = require('material-ui/RaisedButton');
var actions_1 = require('../../actions');
var RouteButton = (function (_super) {
    __extends(RouteButton, _super);
    function RouteButton() {
        _super.apply(this, arguments);
    }
    RouteButton.prototype.render = function () {
        var _a = this.props, label = _a.label, route = _a.route, style = _a.style, routeSet = _a.routeSet;
        return (React.createElement(RaisedButton_1.default, {label: label, style: style || {}, onTouchTap: routeSet.bind(this, route), secondary: true}));
    };
    RouteButton = __decorate([
        react_redux_1.connect(null, { routeSet: actions_1.routeSet }), 
        __metadata('design:paramtypes', [])
    ], RouteButton);
    return RouteButton;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RouteButton;
