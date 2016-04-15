"use strict";
var React = require('react');
var Stepper_1 = require('material-ui/Stepper');
var Card_1 = require('material-ui/Card');
var FlatButton_1 = require('material-ui/FlatButton');
var setup_checker_1 = require('./setup-checker');
var FontIcon_1 = require('material-ui/FontIcon');
var warning_1 = require('material-ui/svg-icons/alert/warning');
var colors_1 = require('material-ui/styles/colors');
var action_setup_1 = require('../../../reducers/checks/action-setup');
var action_system_1 = require('../../../reducers/checks/action-system');
var StepCheck = function (_a) {
    var completed = _a.completed, label = _a.label, children = _a.children;
    return (React.createElement(Stepper_1.Step, {completed: completed, active: !completed}, React.createElement(Stepper_1.StepLabel, {icon: completed
        ? React.createElement(FontIcon_1.default, null, "✓")
        : React.createElement(warning_1.default, {color: colors_1.red500})}, label), React.createElement(Stepper_1.StepContent, null, children, React.createElement("br", null))));
};
exports.SystemChecks = function (_a) {
    var checks = _a.checks;
    var system = checks.system;
    if (system.passed) {
        return null;
    }
    var status = [system.node, system.npm];
    return React.createElement(Card_1.Card, {className: 'cr-check'}, React.createElement(Card_1.CardHeader, {title: 'System Checks'}), React.createElement(setup_checker_1.default, {status: status}, React.createElement(StepCheck, {label: 'Node >= 0.10', completed: checks.system.node}, React.createElement("p", null, "Install a newer version of ", React.createElement("a", {style: { color: colors_1.pink500 }, href: 'https://nodejs.org'}, "NodeJS"))), React.createElement(StepCheck, {label: 'NPM >= 3', completed: checks.system.npm}, "Update your version of NPM.", React.createElement("br", null), React.createElement("code", null, "> npm update -g npm"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Update NPM', secondary: true, onTouchTap: action_system_1.updateNpm}))));
};
exports.SetupChecks = function (_a) {
    var checks = _a.checks;
    var setup = checks.setup;
    if (setup.passed) {
        return null;
    }
    var status = [setup.dir, setup.packageJson, setup.tutorial];
    return React.createElement(Card_1.Card, {className: 'cr-check'}, React.createElement(Card_1.CardHeader, {title: 'Setup Checks'}), React.createElement(setup_checker_1.default, {status: status}, React.createElement(StepCheck, {label: 'open a directory', completed: checks.setup.dir}, React.createElement("p", null, "File -> Open (a new folder)"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Open Directory', secondary: true, onTouchTap: action_setup_1.openDirectory})), React.createElement(StepCheck, {label: 'package.json', completed: checks.setup.packageJson}, "Create a package.json by running", React.createElement("br", null), React.createElement("code", null, "> npm init -y`"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Create package.json', secondary: true, onTouchTap: action_setup_1.createPackageJson})), React.createElement(StepCheck, {label: 'install a tutorial', completed: checks.setup.tutorial}, "Install a tutorial using npm. For example:", React.createElement("br", null), React.createElement("code", null, "> npm install --save-dev coderoad-functional-school`"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'install functional-school demo', secondary: true, onTouchTap: action_setup_1.installTutorial}))));
};
exports.InstallGuide = function (_a) {
    var show = _a.show;
    if (!show) {
        return null;
    }
    return React.createElement("div", {className: 'setup-guide'}, React.createElement("span", null, "Check the", React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, " ", React.createElement("strong", null, "Install Guide"))));
};
