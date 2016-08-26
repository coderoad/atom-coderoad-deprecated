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
var selectors_1 = require('../../../selectors');
var index_1 = require('../../index');
var Card_1 = require('material-ui/Card');
var colors_1 = require('material-ui/styles/colors');
var styles = {
    card: {
        backgroundColor: colors_1.cyan500,
        margin: '10px 5px',
    },
    text: {
        color: colors_1.grey100,
        fontSize: '1.1em'
    },
};
var TasksComplete = (function (_super) {
    __extends(TasksComplete, _super);
    function TasksComplete() {
        _super.apply(this, arguments);
    }
    TasksComplete.prototype.render = function () {
        var onPageComplete = this.props.onPageComplete;
        return (React.createElement(Card_1.Card, {style: styles.card}, 
            React.createElement(Card_1.CardText, null, 
                React.createElement(index_1.Markdown, {style: styles.text}, onPageComplete)
            )
        ));
    };
    TasksComplete = __decorate([
        react_redux_1.connect(function (state) { return ({
            onPageComplete: selectors_1.pageSelector(state).onPageComplete,
        }); }), 
        __metadata('design:paramtypes', [])
    ], TasksComplete);
    return TasksComplete;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TasksComplete;
