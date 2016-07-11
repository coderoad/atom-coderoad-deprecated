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
var index_1 = require('../index');
var Hints_1 = require('./Hints');
var PageToolbar_1 = require('./PageToolbar');
var ProgressBar_1 = require('./ProgressBar');
var Tasks_1 = require('./Tasks');
var TasksComplete_1 = require('./TasksComplete');
var core_coderoad_1 = require('core-coderoad');
var styles = {
    page: {
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
    },
};
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
    }
    Page.prototype.render = function () {
        var _a = this.props, page = _a.page, isCompleted = _a.isCompleted;
        return (React.createElement("section", {style: styles.page, className: 'cr-page'}, 
            React.createElement(index_1.ContentCard, {title: page.title, content: page.description}), 
            React.createElement(Tasks_1.default, null), 
            React.createElement(PageToolbar_1.default, null, 
                React.createElement(Hints_1.default, null), 
                isCompleted ? React.createElement(TasksComplete_1.default, null) : React.createElement(ProgressBar_1.default, null))));
    };
    Page = __decorate([
        react_redux_1.connect(function (state) { return ({
            page: core_coderoad_1.pageSelector(state),
            tasksCompleted: core_coderoad_1.taskProgressSelector(state) === 100,
        }); }), 
        __metadata('design:paramtypes', [])
    ], Page);
    return Page;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Page;
