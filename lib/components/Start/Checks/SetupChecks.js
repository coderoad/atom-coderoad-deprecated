"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var FlatButton_1 = require('material-ui/FlatButton');
var VerifyButton_1 = require('./VerifyButton');
var DynamicStepper_1 = require('./DynamicStepper');
var StepCheck_1 = require('./StepCheck');
var SetupChecks = function (_a) {
    var checks = _a.checks;
    var setup = checks.setup;
    if (setup.passed) {
        return null;
    }
    var hasDir = setup.hasDir, hasPackageJson = setup.hasPackageJson, hasTutorial = setup.hasTutorial;
    var status = [hasDir, hasPackageJson, hasTutorial];
    return (React.createElement(Card_1.Card, {className: 'cr-check'}, React.createElement(Card_1.CardHeader, {title: 'Setup Checks', subtitle: 'CodeRoad requires a brief setup'}), React.createElement(Card_1.CardText, null, React.createElement(DynamicStepper_1.default, {status: status}, React.createElement(StepCheck_1.default, {label: 'open a directory', completed: hasDir}, React.createElement("p", null, "File -> Open (a new folder)"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Open Directory', secondary: true})), React.createElement(StepCheck_1.default, {label: 'package.json', completed: hasPackageJson}, "Create a package.json by running", React.createElement("br", null), React.createElement("code", null, "> npm init -y`"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Create package.json', secondary: true})), React.createElement(StepCheck_1.default, {label: 'install a tutorial', completed: hasTutorial}, "Install a tutorial using npm. For example:", React.createElement("br", null), React.createElement("code", null, "> npm install --save-dev coderoad-functional-school"), React.createElement("br", null)))), React.createElement(Card_1.CardActions, null, React.createElement(VerifyButton_1.default, null))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SetupChecks;
