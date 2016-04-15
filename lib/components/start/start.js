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
var store_1 = require('../../store/store');
var actions_1 = require('../../actions/actions');
var path = require('path');
var checks_1 = require('./checks/checks');
var FlatButton_1 = require('material-ui/FlatButton');
var welcomeStyle = {
    backgroundImage: "url(\"" + path.resolve(__dirname, '../../../', 'styles', 'coderoad.jpg') + "\")",
    backgroundRepeat: 'no-repeat',
    height: '350px',
};
var welcomeButtonStyle = {
    fontSize: '1.4em',
    padding: '5px 2px'
};
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        _super.apply(this, arguments);
    }
    Welcome.prototype.render = function () {
        return React.createElement("div", {style: welcomeStyle}, React.createElement("div", {className: 'cr-welcome'}, React.createElement("div", {className: 'title'}, "CodeRoad"), React.createElement("div", {className: 'tagline'}, "Tutorials in your Editor"), React.createElement("br", null), React.createElement("br", null), React.createElement(FlatButton_1.default, {label: 'Start', onTouchTap: this.props.routeToTutorials, secondary: true, style: welcomeButtonStyle})));
    };
    Welcome = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                routeToTutorials: function () { return store_1.store.dispatch(actions_1.setRoute('tutorials')); }
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
        : React.createElement(checks_1.Checks, {checks: checks}))));
};
