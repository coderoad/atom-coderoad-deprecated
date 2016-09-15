"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Stepper_1 = require('material-ui/Stepper');
var DynamicStepper = (function (_super) {
    __extends(DynamicStepper, _super);
    function DynamicStepper(props) {
        _super.call(this, props);
        this.state = {
            stepIndex: this.props.status.indexOf(false) || 0
        };
    }
    DynamicStepper.prototype.render = function () {
        return (React.createElement(Stepper_1.Stepper, {activeStep: this.state.stepIndex, linear: false, orientation: 'vertical'}, this.props.children));
    };
    return DynamicStepper;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DynamicStepper;
