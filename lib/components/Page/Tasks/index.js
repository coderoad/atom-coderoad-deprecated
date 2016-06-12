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
var ReactDOM = require('react-dom');
var react_redux_1 = require('react-redux');
var List_1 = require('material-ui/List');
var Card_1 = require('material-ui/Card');
var Subheader_1 = require('material-ui/Subheader');
var Task_1 = require('../Task');
var colors_1 = require('material-ui/styles/colors');
var selectors_1 = require('../../../selectors');
var margin = '10px 5px';
var Tasks = (function (_super) {
    __extends(Tasks, _super);
    function Tasks() {
        _super.apply(this, arguments);
    }
    Tasks.prototype.componentDidUpdate = function () {
        ReactDOM.findDOMNode(this.refs.listEnd).scrollIntoView();
    };
    Tasks.prototype.render = function () {
        var _a = this.props, tasks = _a.tasks, completed = _a.completed;
        var backgroundColor = completed ? colors_1.lightGreen200 : 'white';
        return (React.createElement(Card_1.Card, {style: { backgroundColor: backgroundColor, margin: margin }}, React.createElement(List_1.List, null, React.createElement(Subheader_1.default, null, "Tasks"), tasks.map(function (task, index) {
            return React.createElement(Task_1.default, {key: index, index: index});
        }), "}"), React.createElement("div", {ref: 'listEnd'})));
    };
    Tasks = __decorate([
        react_redux_1.connect(function (state) { return ({
            tasks: selectors_1.visibleTasksSelector(state),
            completed: selectors_1.pageCompletedSelector(state),
        }); }), 
        __metadata('design:paramtypes', [])
    ], Tasks);
    return Tasks;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tasks;
