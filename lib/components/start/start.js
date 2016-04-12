'use strict';
var React = require('react');
var paper_1 = require('material-ui/lib/paper');
var setup_1 = require('./setup');
var tutorials_1 = require('./tutorials');
var setup_steps_1 = require('./setup-steps');
exports.Start = function (_a) {
    var tutorials = _a.tutorials, warning = _a.warning;
    return (React.createElement(paper_1.default, {className: 'cr-start'}, React.createElement("div", {className: 'cr-start-header'}, React.createElement("span", {className: 'title'}, "CodeRoad"), React.createElement("p", {className: 'tagline'}, "Tutorials in the Editor"), React.createElement("p", {className: 'version'}, "Beta"), !warning ? React.createElement(tutorials_1.default, {tutorials: tutorials}) : React.createElement(setup_1.SetupGuide, {warning: warning}), React.createElement(setup_steps_1.default, null))));
};
