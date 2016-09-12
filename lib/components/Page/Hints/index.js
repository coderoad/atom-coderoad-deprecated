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
    return Hints;
}(React.Component));
var mapStateToProps = function (state) { return ({
    hint: selectors_1.hintSelector(state),
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(Hints);
