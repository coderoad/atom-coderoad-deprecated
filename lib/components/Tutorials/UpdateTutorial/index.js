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
var actions_1 = require('../../../actions');
var update_1 = require('material-ui/svg-icons/action/update');
var colors_1 = require('material-ui/styles/colors');
var styles = {
    width: '18px',
    marginLeft: '10px',
};
var UpdateTutorial = (function (_super) {
    __extends(UpdateTutorial, _super);
    function UpdateTutorial() {
        _super.apply(this, arguments);
    }
    UpdateTutorial.prototype.render = function () {
        var _a = this.props, tutorial = _a.tutorial, tutorialUpdate = _a.tutorialUpdate;
        return (React.createElement("span", null, React.createElement(update_1.default, {style: styles, color: colors_1.pink500, onTouchTap: tutorialUpdate.bind(this, tutorial.name)}), React.createElement("span", {style: { marginLeft: '10px' }}, tutorial.latest)));
    };
    UpdateTutorial = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                tutorialUpdate: function (name) { return dispatch(actions_1.tutorialUpdate(name)); },
            };
        }), 
        __metadata('design:paramtypes', [])
    ], UpdateTutorial);
    return UpdateTutorial;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UpdateTutorial;
