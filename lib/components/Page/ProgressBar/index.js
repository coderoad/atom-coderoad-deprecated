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
var LinearProgress_1 = require('material-ui/LinearProgress');
var style = {
    height: '10px',
    position: 'relative',
    margin: '0px',
};
var ProgressBar = (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        _super.apply(this, arguments);
    }
    ProgressBar.prototype.render = function () {
        var _a = this.props, completed = _a.completed, taskProgress = _a.taskProgress;
        if (completed) {
            return null;
        }
        return (React.createElement(LinearProgress_1.default, {mode: 'determinate', value: taskProgress, style: style}));
    };
    ProgressBar = __decorate([
        react_redux_1.connect(function (state) { return ({
            completed: state.progress.pages[state.pagePosition],
            taskProgress: (state.taskPosition / state.tutorial.pages[state.pagePosition].tasks.length) * 100
        }); }), 
        __metadata('design:paramtypes', [])
    ], ProgressBar);
    return ProgressBar;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressBar;
