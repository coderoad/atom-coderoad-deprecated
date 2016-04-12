"use strict";
var _this = this;
var React = require('react');
var VerticalStep_1 = require('material-ui/lib/Stepper/VerticalStep');
var raised_button_1 = require('material-ui/lib/raised-button');
var flat_button_1 = require('material-ui/lib/flat-button');
var DepStep = function (_a) {
    var index = _a.index, label = _a.label, description = _a.description, verify = _a.verify;
    return (React.createElement(VerticalStep_1.default, {orderStepLabel: index, stepLabel: label, actions: [
        React.createElement(raised_button_1.default, {key: 0, label: 'Verify', primary: true, onTouchTap: verify}),
        React.createElement(flat_button_1.default, {key: 1, label: 'Cancel'})
    ]}, React.createElement("div", null, description)));
};
exports.SystemSteps = function () { return (React.createElement("div", null, React.createElement(DepStep, {index: '1', label: 'Node >= 0.10', description: React.createElement("span", null, "Install a newer version of ", React.createElement("a", {href: 'https://nodejs.org'}, "Node")), verify: _this.continue.bind(_this)}), React.createElement(DepStep, {index: '2', label: 'NPM >= 3', description: 'Update your version of NPM. `> npm update -g npm', verify: _this.continue.bind(_this)}))); };
exports.TutorialSteps = function () { return (React.createElement("div", null, React.createElement(DepStep, {index: '1', label: 'working directory', description: 'File -> Open (a new folder)', verify: _this.continue.bind(_this)}), React.createElement(DepStep, {index: '2', label: 'package.json', description: 'Create a package.json by running `> npm init -y`', verify: _this.continue.bind(_this)}), React.createElement(DepStep, {index: '3', label: 'install tutorial', description: 'Install a tutorial using npm. For example `> npm install coderoad-functional-school --save-dev`', verify: _this.continue.bind(_this)}))); };
