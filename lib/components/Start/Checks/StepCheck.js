"use strict";
var React = require('react');
var FontIcon_1 = require('material-ui/FontIcon');
var Stepper_1 = require('material-ui/Stepper');
var colors_1 = require('material-ui/styles/colors');
var warning_1 = require('material-ui/svg-icons/alert/warning');
var StepCheck = function (_a) {
    var completed = _a.completed, label = _a.label, children = _a.children;
    return (React.createElement(Stepper_1.Step, {completed: completed, active: !completed}, React.createElement(Stepper_1.StepLabel, {icon: completed
        ? React.createElement(FontIcon_1.default, null, "✓")
        : React.createElement(warning_1.default, {color: colors_1.red500})}, label), React.createElement(Stepper_1.StepContent, null, children, React.createElement("br", null))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StepCheck;
