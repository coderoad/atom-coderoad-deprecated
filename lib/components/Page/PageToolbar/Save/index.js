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
var Save = (function (_super) {
    __extends(Save, _super);
    function Save() {
        _super.apply(this, arguments);
    }
    Save.prototype.render = function () {
        return (React.createElement(RaisedButton_1.default, {label: 'Save', style: styles, secondary: true, onTouchTap: this.props.editorSave}));
    };
    return Save;
}(React.Component));
var mapDispatchToProps = { editorSave: actions_1.editorSave };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(Save);
//# sourceMappingURL=index.js.map