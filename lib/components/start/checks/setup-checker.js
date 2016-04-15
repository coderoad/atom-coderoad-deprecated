"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Stepper_1 = require('material-ui/Stepper');
var FontIcon_1 = require('material-ui/FontIcon');
var styles = {
    header: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
    actionButton: {
        marginRight: 8
    }
};
var DynamicStepper = (function (_super) {
    __extends(DynamicStepper, _super);
    function DynamicStepper(props) {
        _super.call(this, props);
        var statusSteps = this.props.status;
        this.state = {
            activeStep: statusSteps.indexOf(false) || -1,
            statusSteps: statusSteps
        };
    }
    DynamicStepper.prototype.selectStep = function (CurrentStep) {
        this.setState({
            activeStep: CurrentStep,
            statusSteps: this.state.statusSteps
        });
    };
    DynamicStepper.prototype.updateCompletedSteps = function (CurrentStep) {
        return this.state.statusSteps[CurrentStep];
    };
    DynamicStepper.prototype.createIcon = function (step) {
        if (step.props.isCompleted) {
            return (React.createElement(FontIcon_1.default, {className: 'material-icons', style: { fontSize: 14 }}, "✓"));
        }
        return React.createElement("span", null, step.props.orderStepLabel);
    };
    DynamicStepper.prototype.continue = function () {
        var _a = this.state, activeStep = _a.activeStep, statusSteps = _a.statusSteps;
        statusSteps[activeStep] = true;
        this.state = {
            activeStep: activeStep + 1,
            statusSteps: statusSteps,
        };
    };
    DynamicStepper.prototype.render = function () {
        return React.createElement("div", null, React.createElement("div", {style: styles.header}, this.props.title), React.createElement(Stepper_1.default, {activeStep: this.state.activeStep, onStepHeaderTouch: this.selectStep.bind(this), updateCompletedStatus: this.updateCompletedSteps.bind(this), createIcon: this.createIcon}, this.props.children));
    };
    return DynamicStepper;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DynamicStepper;
