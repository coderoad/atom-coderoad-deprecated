"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../../../actions');
var RaisedButton_1 = require('material-ui/RaisedButton');
var styles = {
    border: '0px',
    boxShadow: 'none',
    backgroundColor: 'inherit',
    position: 'relative',
    top: '10px',
};
var Continue = (function (_super) {
    __extends(Continue, _super);
    function Continue() {
        _super.apply(this, arguments);
    }
    Continue.prototype.render = function () {
        return (React.createElement(RaisedButton_1.default, {style: styles, label: 'Continue', primary: true, onTouchTap: this.props.pageNext}));
    };
    return Continue;
}(React.Component));
var mapDispatchToProps = { pageNext: actions_1.pageNext };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(Continue);
//# sourceMappingURL=index.js.map