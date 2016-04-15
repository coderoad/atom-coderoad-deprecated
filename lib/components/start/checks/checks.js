"use strict";
var React = require('react');
var steps_1 = require('./steps');
var verify_1 = require('./verify');
exports.Checks = function (_a) {
    var checks = _a.checks;
    return (React.createElement("div", {className: 'cr-checks'}, React.createElement(steps_1.SystemChecks, {checks: checks}), React.createElement(steps_1.SetupChecks, {checks: checks}), React.createElement("br", null), React.createElement(verify_1.VerifyButton, null), React.createElement("br", null), React.createElement(steps_1.InstallGuide, {show: checks.passed})));
};
