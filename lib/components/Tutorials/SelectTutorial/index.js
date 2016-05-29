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
var FlatButton_1 = require('material-ui/FlatButton');
function displayName(name) {
    if (name.match(/^coderoad-tutorial-/)) {
        return name.slice(18);
    }
    else if (name.match(/^coderoad-/)) {
        return name.slice(9);
    }
    return name;
}
var SelectTutorial = (function (_super) {
    __extends(SelectTutorial, _super);
    function SelectTutorial() {
        _super.apply(this, arguments);
    }
    SelectTutorial.prototype.render = function () {
        var _a = this.props, tutorial = _a.tutorial, selectTutorial = _a.selectTutorial;
        var name = tutorial.name;
        return (React.createElement(FlatButton_1.default, {label: displayName(name), primary: true, onTouchTap: selectTutorial.bind(this, name)}));
    };
    SelectTutorial = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                selectTutorial: function (name) { return dispatch(actions_1.tutorialSet(name)); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], SelectTutorial);
    return SelectTutorial;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SelectTutorial;
