"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var selectors_1 = require('../../selectors');
var index_1 = require('../index');
var Hints_1 = require('./Hints');
var PageToolbar_1 = require('./PageToolbar');
var ProgressBar_1 = require('./ProgressBar');
var Tasks_1 = require('./Tasks');
var TasksComplete_1 = require('./TasksComplete');
;
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
    return Page;
}(React.Component));
var mapStateToProps = function (state) { return ({
    page: selectors_1.pageSelector(state),
    isCompleted: selectors_1.taskProgressSelector(state) === 100,
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(Page);
//# sourceMappingURL=index.js.map