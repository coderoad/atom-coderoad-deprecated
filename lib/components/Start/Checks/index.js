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
var index_1 = require('../../index');
var InstallGuide_1 = require('./InstallGuide');
var SetupChecks_1 = require('./SetupChecks');
var SystemChecks_1 = require('./SystemChecks');
var styles = {
    margin: '5px',
    padding: '10px',
};
var Checks = (function (_super) {
    __extends(Checks, _super);
    function Checks() {
        _super.apply(this, arguments);
    }
    Checks.prototype.render = function () {
        var checks = this.props.checks;
        if (!checks) {
            return React.createElement(index_1.ContentCard, {title: 'Error Loading Package.json'});
        }
        return (React.createElement("div", {style: styles}, 
            !checks.system.passed ? React.createElement(SystemChecks_1.default, {checks: checks}) : null, 
            !checks.setup.passed ? React.createElement(SetupChecks_1.default, {checks: checks}) : null, 
            React.createElement(InstallGuide_1.default, {checks: checks})));
    };
    Checks = __decorate([
        react_redux_1.connect(function (state) { return ({
            checks: state.checks,
        }); }), 
        __metadata('design:paramtypes', [])
    ], Checks);
    return Checks;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Checks;
