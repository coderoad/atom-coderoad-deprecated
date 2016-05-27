"use strict";
var React = require('react');
var SystemChecks_1 = require('./SystemChecks');
var SetupChecks_1 = require('./SetupChecks');
var InstallGuide_1 = require('./InstallGuide');
var index_1 = require('../../index');
var styles = {
    margin: '5px',
    padding: '10px',
};
var Checks = function (_a) {
    var checks = _a.checks;
    if (!checks) {
        return React.createElement(index_1.ContentCard, {title: 'Error Loading Package.json', content: ''});
    }
    return (React.createElement("div", {style: styles}, !checks.system.passed
        ? React.createElement(SystemChecks_1.default, {checks: checks})
        : null, !checks.setup.passed
        ? React.createElement(SetupChecks_1.default, {checks: checks})
        : null, React.createElement(InstallGuide_1.default, {checks: checks})));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Checks;
