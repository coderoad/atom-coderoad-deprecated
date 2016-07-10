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
var Card_1 = require('material-ui/Card');
var FlatButton_1 = require('material-ui/FlatButton');
var styles = {
    card: {
        margin: '5px',
        padding: '10px',
    },
};
var FinalPage = (function (_super) {
    __extends(FinalPage, _super);
    function FinalPage() {
        _super.apply(this, arguments);
    }
    FinalPage.prototype.render = function () {
        return (React.createElement(Card_1.Card, {style: styles.card}, React.createElement(Card_1.CardTitle, {title: 'Congratulations!', subtitle: 'Tutorial Complete!'}), React.createElement(Card_1.CardText, null, "What's next?", React.createElement("br", null), React.createElement("br", null), React.createElement("a", {href: 'https://coderoad.github.io/#tutorials'}, React.createElement(FlatButton_1.default, {label: 'See More Tutorials', disabled: true})), React.createElement("span", null, " (coming soon)"), React.createElement("br", null), React.createElement("br", null), React.createElement("a", {href: 'https://coderoad.github.io/build'}, React.createElement(FlatButton_1.default, {label: 'Learn how to Create a Tutorial'})))));
    };
    FinalPage = __decorate([
        react_redux_1.connect(null, null), 
        __metadata('design:paramtypes', [])
    ], FinalPage);
    return FinalPage;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FinalPage;
