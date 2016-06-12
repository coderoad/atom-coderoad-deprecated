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
var react_redux_1 = require('react-redux');
var colors_1 = require('material-ui/styles/colors');
var indeterminate_check_box_1 = require('material-ui/svg-icons/toggle/indeterminate-check-box');
var styles = {
    checkbox: {
        position: 'absolute',
        top: '15px',
    },
};
var TaskCheckbox = (function (_super) {
    __extends(TaskCheckbox, _super);
    function TaskCheckbox() {
        _super.apply(this, arguments);
    }
    TaskCheckbox.prototype.render = function () {
        var _a = this.props, testRun = _a.testRun, isCurrentTask = _a.isCurrentTask;
        if (!isCurrentTask || !testRun) {
            return null;
        }
        return React.createElement(indeterminate_check_box_1.default, {color: colors_1.orange500, style: styles.checkbox});
    };
    TaskCheckbox = __decorate([
        react_redux_1.connect(function (state, props) { return ({
            testRun: state.testRun,
            isCurrentTask: state.taskPosition === props.index,
        }); }), 
        __metadata('design:paramtypes', [])
    ], TaskCheckbox);
    return TaskCheckbox;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TaskCheckbox;
