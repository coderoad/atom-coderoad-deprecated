"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var FlatButton_1 = require('material-ui/FlatButton');
var VerifyButton_1 = require('./VerifyButton');
var colors_1 = require('material-ui/styles/colors');
var DynamicStepper_1 = require('./DynamicStepper');
var StepCheck_1 = require('./StepCheck');
var SystemChecks = function (_a) {
    var checks = _a.checks;
    var system = checks.system;
    if (system.passed) {
        return null;
    }
    var status = [system.node, system.npm];
    return (React.createElement(Card_1.Card, {className: 'cr-check'}, React.createElement(Card_1.CardHeader, {title: 'System Checks', subtitle: 'CodeRoad requires several key dependencies'}), React.createElement(Card_1.CardText, null, React.createElement(DynamicStepper_1.default, {status: status}, React.createElement(StepCheck_1.default, {label: 'Node >= 0.10', completed: system.node}, React.createElement("p", null, "Install a newer version of ", React.createElement("a", {style: { color: colors_1.pink500 }, href: 'https://nodejs.org'}, "NodeJS"))), React.createElement(StepCheck_1.default, {label: 'NPM >= 3', completed: system.npm}, "Update your version of NPM.", React.createElement("br", null), React.createElement("code", null, "> npm update -g npm"), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Update NPM', secondary: true})), React.createElement(StepCheck_1.default, {label: 'Xcode', completed: system.xcode}, React.createElement("p", null, "Install ", React.createElement("a", {style: { color: colors_1.pink500 }, href: 'https://developer.apple.com/xcode/download/'}, "XCode"))))), React.createElement(Card_1.CardActions, null, React.createElement(VerifyButton_1.default, null))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SystemChecks;
