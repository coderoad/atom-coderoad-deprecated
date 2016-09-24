"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var index_1 = require('../../index');
var InstallGuide_1 = require('./InstallGuide');
var SetupChecks_1 = require('./SetupChecks');
var SystemChecks_1 = require('./SystemChecks');
var styles = {
    margin: '5px',
    padding: '10px',
};
var Checks = (function (_super) {
    __extends(Checks, _super);
    function Checks() {
        _super.apply(this, arguments);
    }
    Checks.prototype.render = function () {
        var checks = this.props.checks;
        if (!checks) {
            return React.createElement(index_1.ContentCard, {title: 'Error Loading Package.json'});
        }
        return (React.createElement("div", {style: styles}, 
            !checks.system.passed ? React.createElement(SystemChecks_1.default, {checks: checks}) : null, 
            !checks.setup.passed ? React.createElement(SetupChecks_1.default, {checks: checks}) : null, 
            React.createElement(InstallGuide_1.default, {checks: checks})));
    };
    return Checks;
}(React.Component));
var mapStateToProps = function (state) { return ({
    checks: state.checks,
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(Checks);
//# sourceMappingURL=index.js.map