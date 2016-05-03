"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var _this = this;
var React = require('react');
var Checks_1 = require('./Checks');
var Welcome_1 = require('./Welcome');
var headerStyles = {
    display: 'block',
    height: '300px',
    textAlign: 'center',
    color: '#f8f8f8',
};
exports.Start = function (_a) {
    var checks = _a.checks;
    return (React.createElement("section", {className: 'cr-start'}, React.createElement("div", {style: headerStyles}, checks.passed
        ? React.createElement(Welcome_1.default, null)
        : React.createElement(Checks_1.default, __assign({}, _this.props)))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Start;
