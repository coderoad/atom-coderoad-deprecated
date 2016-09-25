"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var react_redux_1 = require('react-redux');
var selectors_1 = require('../../../selectors');
var Task_1 = require('../Task');
var Card_1 = require('material-ui/Card');
var List_1 = require('material-ui/List');
var colors_1 = require('material-ui/styles/colors');
var Subheader_1 = require('material-ui/Subheader');
var margin = '10px 5px';
var Tasks = (function (_super) {
    __extends(Tasks, _super);
    function Tasks() {
        _super.apply(this, arguments);
    }
    Tasks.prototype.render = function () {
        var _a = this.props, tasks = _a.tasks, completed = _a.completed;
        var backgroundColor = completed ? colors_1.lightGreen200 : 'white';
        return (React.createElement(Card_1.Card, {style: { backgroundColor: backgroundColor, margin: margin }}, 
            React.createElement(List_1.List, null, 
                React.createElement(Subheader_1.default, null, "Tasks"), 
                tasks.map(function (task, index) { return React.createElement(Task_1.default, {key: index, index: index}); })), 
            React.createElement("div", {ref: 'listEnd'})));
    };
    Tasks.prototype.componentDidUpdate = function () {
        ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
    };
    return Tasks;
}(React.Component));
var mapStateToProps = function (state) { return ({
    tasks: selectors_1.visibleTasksSelector(state),
    completed: selectors_1.pageCompletedSelector(state),
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(Tasks);
//# sourceMappingURL=index.js.map