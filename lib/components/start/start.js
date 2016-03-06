'use strict';
var React = require('react');
var material_ui_1 = require('material-ui');
var setup_1 = require('./setup');
var tutorials_1 = require('./tutorials');
exports.Start = function (_a) {
    var tutorials = _a.tutorials, warning = _a.warning;
    return (React.createElement(material_ui_1.Paper, {className: 'cr-start'}, React.createElement("div", {className: 'cr-start-header'}, React.createElement("span", {className: 'title'}, "CodeRoad"), React.createElement("p", {className: 'tagline'}, "Tutorials in the Editor"), React.createElement("p", {className: 'notes'}, "Beta"), !warning ? React.createElement(tutorials_1.default, {tutorials: tutorials}) : React.createElement(setup_1.default, {warning: warning}))));
};
