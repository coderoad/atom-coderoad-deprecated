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
var VerifyButton = (function (_super) {
    __extends(VerifyButton, _super);
    function VerifyButton() {
        _super.apply(this, arguments);
    }
    VerifyButton.prototype.render = function () {
        return (React.createElement(FlatButton_1.default, {label: 'Verify Setup Complete', primary: true, onTouchTap: this.props.setupVerify}));
    };
    return VerifyButton;
}(React.Component));
var mapDispatchToProps = { setupVerify: actions_1.setupVerify };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(null, mapDispatchToProps)(VerifyButton);
//# sourceMappingURL=VerifyButton.js.map