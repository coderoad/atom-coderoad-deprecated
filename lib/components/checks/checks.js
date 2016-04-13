"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var paper_1 = require('material-ui/lib/paper');
var raised_button_1 = require('material-ui/lib/raised-button');
var setup_checker_1 = require('./setup-checker');
var VerticalStep_1 = require('material-ui/lib/Stepper/VerticalStep');
var flat_button_1 = require('material-ui/lib/flat-button');
var setup_actions_1 = require('../../reducers/checks/setup-actions');
var react_redux_1 = require('react-redux');
var store_1 = require('../../store/store');
var Action = require('../../actions/actions');
var Checks = (function (_super) {
    __extends(Checks, _super);
    function Checks() {
        _super.apply(this, arguments);
    }
    Checks.prototype.getSystemChecks = function (checks) {
        var system = checks.system;
        return [system.node, system.npm];
    };
    Checks.prototype.getSetupChecks = function (checks) {
        var setup = checks.setup;
        return [setup.dir, setup.packageJson, setup.tutorial];
    };
    Checks.prototype.render = function () {
        var _a = this.props, checks = _a.checks, routeToTutorials = _a.routeToTutorials, verify = _a.verify;
        return React.createElement(paper_1.default, {className: 'cr-start'}, React.createElement("div", {className: 'cr-start-header'}, React.createElement("p", {className: 'tagline'}, "Setup"), checks.system.passed ? null : React.createElement(setup_checker_1.default, {title: 'Dependency Checks', status: this.getSystemChecks(checks)}, React.createElement(VerticalStep_1.default, {orderStepLabel: '1', stepLabel: 'Node >= 0.10', actions: [
            React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: verify})
        ]}, React.createElement("div", null, "Install a newer version of ", React.createElement("a", {href: 'https://nodejs.org'}, "Node"))), React.createElement(VerticalStep_1.default, {orderStepLabel: '2', stepLabel: 'NPM >= 3', actions: [
            React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: verify})
        ]}, React.createElement("div", null, "Update your version of NPM.", React.createElement("br", null), "`> npm update -g npm`"))), checks.setup.passed ? null : React.createElement(setup_checker_1.default, {title: 'Setup Checks', status: this.getSetupChecks(checks)}, React.createElement(VerticalStep_1.default, {orderStepLabel: '1', stepLabel: 'working directory', actions: [
            React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: verify}),
            React.createElement(flat_button_1.default, {key: 1, secondary: true, label: 'Do it for me', onTouchTap: setup_actions_1.openDirectory})
        ]}, React.createElement("div", null, "File -> Open (a new folder)")), React.createElement(VerticalStep_1.default, {orderStepLabel: '2', stepLabel: 'package.json', actions: [
            React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: verify}),
            React.createElement(flat_button_1.default, {key: 1, secondary: true, label: 'Do it for me', onTouchTap: setup_actions_1.createPackageJson})
        ]}, React.createElement("div", null, "Create a package.json by running", React.createElement("br", null), "`> npm init -y`")), React.createElement(VerticalStep_1.default, {orderStepLabel: '3', stepLabel: 'install tutorial', actions: [
            React.createElement(raised_button_1.default, {key: 0, primary: true, label: 'Verify', onTouchTap: verify}),
            React.createElement(flat_button_1.default, {key: 1, secondary: true, label: 'Do it for me', onTouchTap: setup_actions_1.installTutorial})
        ]}, React.createElement("div", null, "Install a tutorial using npm. For example:", React.createElement("br", null), "`> npm install coderoad-functional-school --save-dev`"))), checks.passed
            ? React.createElement(flat_button_1.default, {label: 'Begin', primary: true, onTouchTap: routeToTutorials})
            : React.createElement("div", {className: 'setup-guide'}, React.createElement("span", null, "Check the", React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, " ", React.createElement("strong", null, "Install Guide"))))), React.createElement("p", {className: 'version'}, "Beta"));
    };
    Checks = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                routeToTutorials: function () { return store_1.store.dispatch(Action.setRoute('tutorials')); },
                verify: function () { return store_1.store.dispatch(Action.verifySetup()); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], Checks);
    return Checks;
}(React.Component));
exports.Checks = Checks;
