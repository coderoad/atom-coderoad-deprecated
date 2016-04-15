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
var Paper_1 = require('material-ui/Paper');
var react_redux_1 = require('react-redux');
var store_1 = require('../../../store/store');
var Action = require('../../../actions/actions');
var fail = '✗';
var Checks = (function (_super) {
    __extends(Checks, _super);
    function Checks() {
        _super.apply(this, arguments);
    }
    Checks.prototype.getSystemChecks = function (checks) {
        var system = checks.system;
        return [system.node, system.npm];
    };
    Checks.prototype.getSetupChecks = function (checks) {
        var setup = checks.setup;
        return [setup.dir, setup.packageJson, setup.tutorial];
    };
    Checks.prototype.render = function () {
        var _a = this.props, checks = _a.checks, verify = _a.verify;
        return React.createElement(Paper_1.default, {className: 'cr-checks'}, React.createElement("p", {className: 'tagline'}, "Setup"), checks.passed
            ? null
            : React.createElement("div", {className: 'setup-guide'}, React.createElement("span", null, "Check the", React.createElement("a", {href: 'https://coderoad.github.io/docs#install'}, " ", React.createElement("strong", null, "Install Guide")))));
    };
    Checks = __decorate([
        react_redux_1.connect(null, function (dispatch) {
            return {
                verify: function () { return store_1.store.dispatch(Action.verifySetup()); }
            };
        }), 
        __metadata('design:paramtypes', [])
    ], Checks);
    return Checks;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Checks;
