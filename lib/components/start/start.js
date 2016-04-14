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
var flat_button_1 = require('material-ui/lib/flat-button');
var checks_1 = require('./checks/checks');
var react_redux_1 = require('react-redux');
var store_1 = require('../../store/store');
var Action = require('../../actions/actions');
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        _super.apply(this, arguments);
    }
    Welcome.prototype.render = function () {
        return React.createElement("div", {class: 'cr-welcome'}, React.createElement(flat_button_1.default, {label: 'Start', onTouchTap: this.props.routeToTutorials}));
    };
    Welcome = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                routeToTutorials: function () { return store_1.store.dispatch(Action.setRoute('tutorials')); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], Welcome);
    return Welcome;
}(React.Component));
exports.Start = function (_a) {
    var checks = _a.checks;
    return (React.createElement("section", {className: 'cr-start'}, React.createElement("div", {className: 'cr-start-header'}, checks.passed
        ? React.createElement(Welcome, null)
        : React.createElement(checks_1.default, {checks: checks})), React.createElement("br", null), React.createElement("p", {className: 'version'}, "Beta")));
};
