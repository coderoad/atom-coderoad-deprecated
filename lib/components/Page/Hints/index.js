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
var actions_1 = require('../../../actions');
var selectors_2 = require('../../../selectors');
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
        var _a = this.props, hint = _a.hint, hintPosition = _a.hintPosition, hintsLength = _a.hintsLength, hintPositionSet = _a.hintPositionSet;
        if (!hint) {
            return null;
        }
        return (React.createElement(Card_1.Card, {style: styles}, 
            React.createElement(Card_1.CardHeader, {title: 'Hints', avatar: React.createElement(help_1.default, null), actAsExpander: true, showExpandableButton: true}), 
            React.createElement(Card_1.CardText, {className: 'cr-task-hint', expandable: true}, 
                React.createElement(index_1.Markdown, {children: hint})
            ), 
            React.createElement(Card_1.CardActions, {style: { paddingBottom: '30px !important' }, expandable: true, className: 'cr-task-hints-actions'}, 
                React.createElement(HintButton_1.default, {type: 'prev', label: 'Previous', hintPosition: hintPosition, hintsLength: hintsLength, hintPositionSet: hintPositionSet}), 
                React.createElement(HintButton_1.default, {type: 'next', label: 'Next', hintPosition: hintPosition, hintsLength: hintsLength, hintPositionSet: hintPositionSet}))));
    };
    return Hints;
}(React.Component));
var mapStateToProps = function (state) { return ({
    hint: selectors_1.hintSelector(state),
    hintPosition: state.hintPosition,
    hintsLength: selectors_2.hintsSelector(state).length,
}); };
var mapDispatchToProps = { hintPositionSet: actions_1.hintPositionSet };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Hints);
//# sourceMappingURL=index.js.map