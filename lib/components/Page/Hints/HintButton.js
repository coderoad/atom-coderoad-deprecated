"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var React = require('react');
var react_redux_1 = require('react-redux');
var FlatButton_1 = require('material-ui/FlatButton');
var actions_1 = require('../../../actions');
var core_coderoad_1 = require('core-coderoad');
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
        }
    };
    HintButton = __decorate([
        react_redux_1.connect(function (state) { return ({
            hintPosition: state.hintPosition,
            hintsLength: core_coderoad_1.hintsSelector(state).length,
        }); }, { hintPositionSet: actions_1.hintPositionSet }), 
        __metadata('design:paramtypes', [])
    ], HintButton);
    return HintButton;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HintButton;
