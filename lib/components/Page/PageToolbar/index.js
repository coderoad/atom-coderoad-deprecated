"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var selectors_1 = require('../../../selectors');
var Continue_1 = require('./Continue');
var Save_1 = require('./Save');
var ToggleDevTools_1 = require('./ToggleDevTools');
var Toolbar_1 = require('material-ui/Toolbar');
var styles = {
    zIndex: 5,
    position: 'relative',
    bottom: '0px',
    right: '0px',
    height: '60px',
    width: '400px',
    margin: '0px',
};
var PageToolbar = (function (_super) {
    __extends(PageToolbar, _super);
    function PageToolbar() {
        _super.apply(this, arguments);
    }
    PageToolbar.prototype.render = function () {
        var _a = this.props, tasksComplete = _a.tasksComplete, children = _a.children;
        return (React.createElement("section", {styles: styles}, 
            children, 
            React.createElement(Toolbar_1.Toolbar, null, 
                React.createElement(Toolbar_1.ToolbarGroup, {float: 'left'}, 
                    React.createElement(ToggleDevTools_1.default, null)
                ), 
                React.createElement(Toolbar_1.ToolbarGroup, {float: 'right'}, tasksComplete ? React.createElement(Continue_1.default, null) : React.createElement(Save_1.default, null)))));
    };
    return PageToolbar;
}(React.Component));
var mapStateToProps = function (state) { return ({
    tasksComplete: selectors_1.taskProgressSelector(state) === 100
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(PageToolbar);
//# sourceMappingURL=index.js.map