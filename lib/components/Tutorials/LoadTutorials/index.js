"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../../actions');
var FlatButton_1 = require('material-ui/FlatButton');
var LoadTutorials = (function (_super) {
    __extends(LoadTutorials, _super);
    function LoadTutorials() {
        _super.apply(this, arguments);
    }
    LoadTutorials.prototype.render = function () {
        var tutorialsFind = this.props.tutorialsFind;
        return (React.createElement(FlatButton_1.default, {label: 'Check for Tutorials', secondary: true, onTouchTap: tutorialsFind}));
    };
    return LoadTutorials;
}(React.Component));
var mapDispatchToProps = { tutorialsFind: actions_1.tutorialsFind };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(LoadTutorials);
//# sourceMappingURL=index.js.map