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
var Card_1 = require('material-ui/Card');
var colors_1 = require('material-ui/styles/colors');
;
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
        if (!onPageComplete || !onPageComplete.length) {
            return React.createElement("div", null);
        }
        return (React.createElement(Card_1.Card, {style: styles.card}, 
            React.createElement(Card_1.CardText, null, 
                React.createElement(index_1.Markdown, {style: styles.text, children: onPageComplete})
            )
        ));
    };
    return TasksComplete;
}(React.Component));
var mapStateToProps = function (state) { return ({
    onPageComplete: selectors_1.pageSelector(state).onPageComplete,
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(TasksComplete);
//# sourceMappingURL=index.js.map