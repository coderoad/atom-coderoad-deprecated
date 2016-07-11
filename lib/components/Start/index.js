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
var Checks_1 = require('./Checks');
var Welcome_1 = require('./Welcome');
var headerStyles = {
    display: 'block',
    height: '100%',
    textAlign: 'center',
    color: '#f8f8f8',
};
var Start = (function (_super) {
    __extends(Start, _super);
    function Start() {
        _super.apply(this, arguments);
    }
    Start.prototype.render = function () {
        var ready = this.props.ready;
        return (React.createElement("section", {className: 'cr-start'}, 
            React.createElement("div", {style: headerStyles}, ready
                ? React.createElement(Welcome_1.default, {title: 'CodeRoad', tagline: 'Tutorials in your Editor', firstRoute: 'tutorials'})
                : React.createElement(Checks_1.default, null))
        ));
    };
    Start = __decorate([
        react_redux_1.connect(function (state) { return ({
            ready: state.checks.passed,
        }); }), 
        __metadata('design:paramtypes', [])
    ], Start);
    return Start;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Start;
