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
var actions_1 = require('../../../actions/actions');
var Card_1 = require('material-ui/Card');
var FlatButton_1 = require('material-ui/FlatButton');
var _components_1 = require('../../_components');
var help_1 = require('material-ui/svg-icons/action/help');
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        _super.apply(this, arguments);
    }
    default_1.prototype.render = function () {
        var _a = this.props, task = _a.task, hintPosition = _a.hintPosition, nextHint = _a.nextHint, prevHint = _a.prevHint;
        var hints = task && task.hints ? task.hints : null;
        if (hintPosition < 0 || !hints || !hints.length) {
            return React.createElement("div", null);
        }
        var hint = hints[hintPosition];
        return (React.createElement(Card_1.Card, {className: 'cr-task-hints'}, React.createElement(Card_1.CardHeader, {title: 'Hints', avatar: React.createElement(help_1.default, null), actAsExpander: true, showExpandableButton: true}), React.createElement(Card_1.CardText, {className: 'cr-task-hint', expandable: true}, React.createElement(_components_1.Markdown, null, hint)), React.createElement(Card_1.CardActions, {expandable: true}, React.createElement(FlatButton_1.default, {label: 'Previous', disabled: hintPosition < 1, onTouchTap: prevHint.bind(this, hintPosition - 1)}), React.createElement(FlatButton_1.default, {label: 'Next', disabled: hintPosition > hints.length - 2, onTouchTap: nextHint.bind(this, hintPosition + 1)}))));
    };
    default_1 = __decorate([
        react_redux_1.connect(null, function (dispatch, state) {
            return {
                nextHint: function (position) { return dispatch(actions_1.setHintPosition(position)); },
                prevHint: function (position) { return dispatch(actions_1.setHintPosition(position)); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], default_1);
    return default_1;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;