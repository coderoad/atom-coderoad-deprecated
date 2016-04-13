"use strict";
var React = require('react');
var paper_1 = require('material-ui/lib/paper');
var raised_button_1 = require('material-ui/lib/raised-button');
var dynamic_stepper_1 = require('./dynamic-stepper');
var VerticalStep_1 = require('material-ui/lib/Stepper/VerticalStep');
var flat_button_1 = require('material-ui/lib/flat-button');
exports.Checks = function (_a) {
    var checks = _a.checks;
    return (React.createElement(paper_1.default, {className: 'cr-start'}, React.createElement("div", {className: 'cr-start-header'}, React.createElement("span", {className: 'title'}, "CodeRoad"), React.createElement("p", {className: 'tagline'}, "Tutorials in the Editor"), React.createElement("p", {className: 'version'}, "Beta"), React.createElement(dynamic_stepper_1.default, {title: 'Dependency Checks'}, React.createElement(VerticalStep_1.default, {orderStepLabel: '1', stepLabel: 'Node >= 0.10', actions: [
        React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: function () { return; }}),
        React.createElement(flat_button_1.default, {key: 1, label: 'Cancel'})
    ]}, React.createElement("div", null, "Install a newer version of ", React.createElement("a", {href: 'https://nodejs.org'}, "Node"))), React.createElement(VerticalStep_1.default, {orderStepLabel: '2', stepLabel: 'NPM >= 3', actions: [
        React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: function () { return; }}),
        React.createElement(flat_button_1.default, {key: 1, label: 'Cancel'})
    ]}, React.createElement("div", null, "Update your version of NPM.", React.createElement("br", null), "`> npm update -g npm`"))), React.createElement(dynamic_stepper_1.default, {title: 'Setup Checks'}, React.createElement(VerticalStep_1.default, {orderStepLabel: '1', stepLabel: 'working directory', actions: [
        React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: function () { return; }}),
        React.createElement(flat_button_1.default, {key: 1, label: 'Cancel'})
    ]}, React.createElement("div", null, "File -> Open (a new folder)")), React.createElement(VerticalStep_1.default, {orderStepLabel: '2', stepLabel: 'package.json', actions: [
        React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: function () { return; }}),
        React.createElement(flat_button_1.default, {key: 1, label: 'Cancel'})
    ]}, React.createElement("div", null, "Create a package.json by running", React.createElement("br", null), "`> npm init -y`")), React.createElement(VerticalStep_1.default, {orderStepLabel: '3', stepLabel: 'install tutorial', actions: [
        React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: function () { return; }}),
        React.createElement(flat_button_1.default, {key: 1, label: 'Cancel'})
    ]}, React.createElement("div", null, "Install a tutorial using npm. For example:", React.createElement("br", null), "`> npm install coderoad-functional-school --save-dev`"))), React.createElement("div", {className: 'setup-guide'}, React.createElement("span", null, "Check the", React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, " ", React.createElement("strong", null, "Install Guide")))))));
};
