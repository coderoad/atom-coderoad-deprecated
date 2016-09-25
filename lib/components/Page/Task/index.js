"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var selectors_1 = require('../../../selectors');
var index_1 = require('../../index');
var taskCheckbox_1 = require('./taskCheckbox');
var List_1 = require('material-ui/List');
var colors_1 = require('material-ui/styles/colors');
;
var styles = {
    task: {
        margin: '5px',
        padding: '5px',
        position: 'relative',
    },
    index: {
        position: 'absolute',
        top: '20px',
        left: '45px',
    },
    description: {
        backgroundColor: 'inherit',
        paddingTop: '-10px',
        paddingLeft: '55px',
        fontSize: '14px',
        lineHeight: '1.6',
    },
};
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        _super.apply(this, arguments);
    }
    Task.prototype.render = function () {
        var _a = this.props, testRun = _a.testRun, task = _a.task, index = _a.index, isCurrentTask = _a.isCurrentTask, isCompletedTask = _a.isCompletedTask;
        var backgroundColor = isCompletedTask ? colors_1.lightGreen200 : 'inherit';
        return (React.createElement(List_1.ListItem, {key: index, style: Object.assign({}, styles.task, { backgroundColor: backgroundColor })}, 
            React.createElement(taskCheckbox_1.default, {index: index}), 
            React.createElement("span", {style: styles.index}, 
                index + 1, 
                "."), 
            React.createElement("div", {style: styles.description}, 
                React.createElement(index_1.Markdown, {children: task.description})
            )));
    };
    return Task;
}(React.Component));
var mapStateToProps = function (state, props) { return ({
    testRun: state.testRun,
    isCompletedTask: state.taskPosition > props.index,
    task: selectors_1.taskByIndexSelector(state, props)
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(Task);
//# sourceMappingURL=index.js.map