"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var FlatButton_1 = require('material-ui/FlatButton');
var setup_checker_1 = require('./setup-checker');
var verify_1 = require('./verify');
var action_setup_1 = require('../../../reducers/checks/action-setup');
var StepCheck_1 = require('./StepCheck');
exports.SetupChecks = function (_a) {
    var checks = _a.checks;
    var setup = checks.setup;
    if (setup.passed) {
        return null;
    }
    var status = [setup.dir, setup.packageJson, setup.tutorial];
    return (React.createElement(Card_1.Card, {className: 'cr-check'}, React.createElement(Card_1.CardHeader, {title: 'Setup Checks', subtitle: 'CodeRoad requires a brief setup'}), React.createElement(Card_1.CardText, null, React.createElement(setup_checker_1.default, {status: status}, React.createElement(StepCheck_1.StepCheck, {label: 'open a directory', completed: checks.setup.dir}, React.createElement("p", null, "File -> Open (a new folder)"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Open Directory', secondary: true, onTouchTap: action_setup_1.openDirectory})), React.createElement(StepCheck_1.StepCheck, {label: 'package.json', completed: checks.setup.packageJson}, "Create a package.json by running", React.createElement("br", null), React.createElement("code", null, "> npm init -y`"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Create package.json', secondary: true, onTouchTap: action_setup_1.createPackageJson})), React.createElement(StepCheck_1.StepCheck, {label: 'install a tutorial', completed: checks.setup.tutorial}, "Install a tutorial using npm. For example:", React.createElement("br", null), React.createElement("code", null, "> npm install --save-dev coderoad-functional-school"), React.createElement("br", null)))), React.createElement(Card_1.CardActions, null, React.createElement(verify_1.VerifyButton, null))));
};
