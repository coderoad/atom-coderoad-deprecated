"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var colors_1 = require('material-ui/styles/colors');
var indeterminate_check_box_1 = require('material-ui/svg-icons/toggle/indeterminate-check-box');
;
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
        var _a = this.props, isRunning = _a.isRunning, isCurrentTask = _a.isCurrentTask, isError = _a.isError;
        if (isError) {
            return React.createElement(indeterminate_check_box_1.default, {color: colors_1.red500, style: styles.checkbox});
        }
        if (!isCurrentTask || !isRunning) {
            return null;
        }
        return React.createElement(indeterminate_check_box_1.default, {color: colors_1.orange500, style: styles.checkbox});
    };
    return TaskCheckbox;
}(React.Component));
var mapStateToProps = function (state, props) { return ({
    isRunning: state.testRun.running,
    isCurrentTask: state.taskPosition === props.index,
    isError: state.testRun.error,
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(TaskCheckbox);
//# sourceMappingURL=taskCheckbox.js.map