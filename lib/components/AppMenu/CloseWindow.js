"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../actions');
var IconButton_1 = require('material-ui/IconButton');
var close_1 = require('material-ui/svg-icons/navigation/close');
var CloseWindow = (function (_super) {
    __extends(CloseWindow, _super);
    function CloseWindow() {
        _super.apply(this, arguments);
    }
    CloseWindow.prototype.render = function () {
        return (React.createElement(IconButton_1.default, {onClick: this.props.windowToggle}, 
            React.createElement(close_1.default, {color: 'white'})
        ));
    };
    return CloseWindow;
}(React.Component));
var mapDispatchToProps = { windowToggle: actions_1.windowToggle };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(CloseWindow);
//# sourceMappingURL=CloseWindow.js.map