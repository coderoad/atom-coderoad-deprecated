"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var FlatButton_1 = require('material-ui/FlatButton');
var HintButton = (function (_super) {
    __extends(HintButton, _super);
    function HintButton() {
        _super.apply(this, arguments);
    }
    HintButton.prototype.render = function () {
        var _a = this.props, hintPosition = _a.hintPosition, hintsLength = _a.hintsLength, label = _a.label, type = _a.type, hintPositionSet = _a.hintPositionSet;
        switch (type) {
            case 'next':
                return (React.createElement(FlatButton_1.default, {label: label, disabled: hintPosition > hintsLength - 2, onTouchTap: hintPositionSet.bind(this, hintPosition + 1)}));
            case 'prev':
                return (React.createElement(FlatButton_1.default, {label: label, disabled: hintPosition === 0, onTouchTap: hintPositionSet.bind(this, hintPosition - 1)}));
            default:
                return null;
        }
    };
    return HintButton;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HintButton;
//# sourceMappingURL=HintButton.js.map