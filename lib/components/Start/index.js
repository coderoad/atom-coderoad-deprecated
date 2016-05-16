"use strict";
var React = require('react');
var index_1 = require('../index');
var Welcome_1 = require('./Welcome');
var headerStyles = {
    display: 'block',
    height: '100%',
    textAlign: 'center',
    color: '#f8f8f8',
};
exports.Start = function (_a) {
    var checks = _a.checks;
    return (React.createElement("section", {className: 'cr-start'}, React.createElement("div", {style: headerStyles}, checks.passed
        ? React.createElement(Welcome_1.default, null)
        : React.createElement(index_1.Checks, {checks: checks}))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Start;
