"use strict";
var React = require('react');
var SystemChecks_1 = require('./SystemChecks');
var SetupChecks_1 = require('./SetupChecks');
var InstallGuide_1 = require('./InstallGuide');
exports.Checks = function (_a) {
    var checks = _a.checks;
    return (React.createElement("div", {className: 'cr-checks'}, React.createElement(SystemChecks_1.SystemChecks, {checks: checks}), React.createElement(SetupChecks_1.SetupChecks, {checks: checks}), React.createElement(InstallGuide_1.InstallGuide, {show: checks.passed})));
};
