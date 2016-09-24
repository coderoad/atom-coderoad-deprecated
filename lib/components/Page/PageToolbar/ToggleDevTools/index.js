"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../../../actions');
var FlatButton_1 = require('material-ui/FlatButton');
var code_1 = require('material-ui/svg-icons/action/code');
var styles = {
    position: 'relative',
    top: '10px',
};
var ToggleDevTools = (function (_super) {
    __extends(ToggleDevTools, _super);
    function ToggleDevTools() {
        _super.apply(this, arguments);
    }
    ToggleDevTools.prototype.render = function () {
        return (React.createElement(FlatButton_1.default, {style: styles, icon: React.createElement(code_1.default, null), onTouchTap: this.props.editorDevToolsToggle}));
    };
    ;
    return ToggleDevTools;
}(React.Component));
var mapDispatchToProps = { editorDevToolsToggle: actions_1.editorDevToolsToggle };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(ToggleDevTools);
//# sourceMappingURL=index.js.map