"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var DynamicStepper_1 = require('./DynamicStepper');
var StepCheck_1 = require('./StepCheck');
var VerifyButton_1 = require('./VerifyButton');
var Card_1 = require('material-ui/Card');
var colors_1 = require('material-ui/styles/colors');
var SystemChecks = (function (_super) {
    __extends(SystemChecks, _super);
    function SystemChecks() {
        _super.apply(this, arguments);
    }
    SystemChecks.prototype.render = function () {
        var system = this.props.checks.system;
        if (system.passed) {
            return null;
        }
        var status = [system.node, system.npm];
        return (React.createElement(Card_1.Card, {className: 'cr-check'}, 
            React.createElement(Card_1.CardHeader, {title: 'System Checks', subtitle: 'CodeRoad requires several key dependencies'}), 
            React.createElement(Card_1.CardText, null, 
                React.createElement(DynamicStepper_1.default, {status: status}, 
                    React.createElement(StepCheck_1.default, {label: 'Node >= 0.10', completed: system.node}, 
                        React.createElement("p", null, 
                            "Install a newer version of ", 
                            React.createElement("a", {style: { color: colors_1.pink500 }, href: 'https://nodejs.org'}, "NodeJS")), 
                        React.createElement("p", null, "Either version 4 (stable) or above.")), 
                    React.createElement(StepCheck_1.default, {label: 'NPM >= 3', completed: system.npm}, 
                        "Update your version of NPM.", 
                        React.createElement("br", null), 
                        React.createElement("code", null, "> npm update -g npm"), 
                        React.createElement("br", null)), 
                    React.createElement(StepCheck_1.default, {label: 'Atom >= 1.8', completed: system.atom}, 
                        React.createElement("p", null, "First make sure you have atom shell commands installed." + ' ' + "Click the atom menu and select \"Install Shell Commands\"."), 
                        React.createElement("p", null, 
                            "Otherwise, update your version of Atom.", 
                            React.createElement("br", null), 
                            "Click on the blue \"update\" squirrel in the bottom right corner of your editor.")), 
                    React.createElement(StepCheck_1.default, {label: 'Xcode', completed: system.xcode}, 
                        React.createElement("p", null, 
                            "Install ", 
                            React.createElement("a", {style: { color: colors_1.pink500 }, href: 'https://developer.apple.com/xcode/download/'}, "XCode"))
                    ))
            ), 
            React.createElement(Card_1.CardActions, null, 
                React.createElement(VerifyButton_1.default, null)
            )));
    };
    return SystemChecks;
}(React.Component));
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SystemChecks;
