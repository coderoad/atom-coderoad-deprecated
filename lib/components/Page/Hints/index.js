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
var HintButton_1 = require('./HintButton');
var Card_1 = require('material-ui/Card');
var help_1 = require('material-ui/svg-icons/action/help');
var styles = {
    position: 'relative',
    margin: '5px auto 10px',
    width: '360px',
    textAlign: 'center',
};
var Hints = (function (_super) {
    __extends(Hints, _super);
    function Hints() {
        _super.apply(this, arguments);
    }
    Hints.prototype.render = function () {
        var hint = this.props.hint;
        if (!hint) {
            return null;
        }
        return (React.createElement(Card_1.Card, {style: styles}, 
            React.createElement(Card_1.CardHeader, {title: 'Hints', avatar: React.createElement(help_1.default, null), actAsExpander: true, showExpandableButton: true}), 
            React.createElement(Card_1.CardText, {className: 'cr-task-hint', expandable: true}, 
                React.createElement(index_1.Markdown, null, hint)
            ), 
            React.createElement(Card_1.CardActions, {style: { paddingBottom: '30px !important' }, expandable: true, className: 'cr-task-hints-actions'}, 
                React.createElement(HintButton_1.default, {type: 'prev', label: 'Previous'}), 
                React.createElement(HintButton_1.default, {type: 'next', label: 'Next'}))));
    };
    Hints = __decorate([
        react_redux_1.connect(function (state) { return ({
            hint: selectors_1.hintSelector(state),
        }); }), 
        __metadata('design:paramtypes', [])
    ], Hints);
    return Hints;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hints;
