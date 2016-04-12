"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Stepper_1 = require('material-ui/lib/Stepper/Stepper');
var VerticalStep_1 = require('material-ui/lib/Stepper/VerticalStep');
var raised_button_1 = require('material-ui/lib/raised-button');
var flat_button_1 = require('material-ui/lib/flat-button');
var font_icon_1 = require('material-ui/lib/font-icon');
var initState = {
    activeStep: -1,
    statusSteps: []
};
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1(props) {
        _super.call(this, props);
        this.state = initState;
    }
    default_1.prototype.selectStep = function (CurrentStep) {
        this.setState({
            activeStep: CurrentStep,
            statusSteps: this.state.statusSteps
        });
    };
    default_1.prototype.updateCompletedSteps = function (CurrentStep) {
        return this.state.statusSteps[CurrentStep];
    };
    default_1.prototype.createIcon = function (step) {
        if (step.props.isCompleted) {
            return (React.createElement(font_icon_1.default, {className: 'material-icons', style: { fontSize: 14 }}, "done"));
        }
        return React.createElement("span", null, step.props.orderStepLabel);
    };
    default_1.prototype.continue = function () {
        var _a = this.state, activeStep = _a.activeStep, statusSteps = _a.statusSteps;
        statusSteps[activeStep] = true;
        this.state = {
            activeStep: activeStep + 1,
            statusSteps: statusSteps,
        };
    };
    default_1.prototype.render = function () {
        return React.createElement(Stepper_1.default, {activeStep: this.state.activeStep, onStepHeaderTouch: this.selectStep.bind(this), updateCompletedStatus: this.updateCompletedSteps.bind(this), createIcon: this.createIcon}, React.createElement(VerticalStep_1.default, {orderStepLabel: '1', stepLabel: 'Node >= v0.10', actions: [
            React.createElement(raised_button_1.default, {key: 0, label: 'Verify', primary: true, onTouchTap: this.continue.bind(this)}),
            React.createElement(flat_button_1.default, {key: 1, label: 'Cancel'})
        ]}, React.createElement("div", null, "Update your version of ", React.createElement("a", {href: 'https://www.nodejs.org'}, "NodeJS"), ".")), React.createElement(VerticalStep_1.default, {orderStepLabel: '2', stepLabel: 'NPM >= v3', actions: [
            React.createElement(raised_button_1.default, {key: 0, label: 'Verify', primary: true, onTouchTap: this.continue.bind(this)}),
            React.createElement(flat_button_1.default, {key: 1, label: 'Cancel'})
        ]}, React.createElement("div", {style: { height: 50 }}, "Update your version of NPM." + ' ' + "`> npm update -g npm`")));
    };
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
