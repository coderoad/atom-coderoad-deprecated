"use strict";
var React = require('react');
var Stepper_1 = require('material-ui/Stepper');
var Card_1 = require('material-ui/Card');
var _components_1 = require('../../_components');
var setup_checker_1 = require('./setup-checker');
var FontIcon_1 = require('material-ui/FontIcon');
var warning_1 = require('material-ui/svg-icons/alert/warning');
var colors_1 = require('material-ui/styles/colors');
var StepCheck = function (_a) {
    var completed = _a.completed, label = _a.label, children = _a.children;
    return (React.createElement(Stepper_1.Step, {completed: completed}, React.createElement(Stepper_1.StepLabel, {icon: completed
        ? React.createElement(FontIcon_1.default, null, "✓")
        : React.createElement(warning_1.default, {color: colors_1.red500})}, label), React.createElement(Stepper_1.StepContent, null, children)));
};
exports.SystemChecks = function (_a) {
    var checks = _a.checks;
    var system = checks.system;
    if (system.passed) {
        return null;
    }
    var status = [system.node, system.npm];
    return React.createElement(Card_1.Card, {className: 'cr-check'}, React.createElement(Card_1.CardHeader, {title: 'System Checks'}), React.createElement(setup_checker_1.default, {status: status}, React.createElement(StepCheck, {label: 'Node >= 0.10', completed: checks.system.node}, React.createElement("p", null, "Install a newer version of ", React.createElement("a", {href: 'https://nodejs.org'}, "Node"))), React.createElement(StepCheck, {label: 'NPM >= 3', completed: checks.system.npm}, React.createElement(_components_1.Markdown, null, "Update your version of NPM." + ' ' + "`> npm update -g npm`"))));
};
exports.SetupChecks = function (_a) {
    var checks = _a.checks;
    var setup = checks.setup;
    if (setup.passed) {
        return null;
    }
    var status = [setup.dir, setup.packageJson, setup.tutorial];
    return React.createElement(Card_1.Card, {className: 'cr-check'}, React.createElement(Card_1.CardHeader, {title: 'Setup Checks'}), React.createElement(setup_checker_1.default, {status: status}, React.createElement(StepCheck, {label: 'Open a Directory', completed: checks.setup.dir}, React.createElement("p", null, "File -> Open (a new folder)")), React.createElement(StepCheck, {label: 'package.json', completed: checks.setup.packageJson}, React.createElement(Stepper_1.StepLabel, null, "Package.json"), React.createElement(_components_1.Markdown, null, "Create a package.json by running" + ' ' + "`> npm init -y`")), React.createElement(StepCheck, {label: 'Install Tutorial', completed: checks.setup.tutorial}, React.createElement(_components_1.Markdown, null, "Install a tutorial using npm. For example:" + ' ' + "`> npm install coderoad-functional-school --save-dev`"))));
};
exports.InstallGuide = function (_a) {
    var show = _a.show;
    if (!show) {
        return null;
    }
    return React.createElement("div", {className: 'setup-guide'}, React.createElement("span", null, "Check the", React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, " ", React.createElement("strong", null, "Install Guide"))));
};
