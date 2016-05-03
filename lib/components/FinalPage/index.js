"use strict";
var React = require('react');
var Card_1 = require('material-ui/Card');
var FlatButton_1 = require('material-ui/FlatButton');
var styles = {
    margin: '5px',
    padding: '10px',
};
exports.FinalPage = function () { return (React.createElement(Card_1.Card, {style: styles}, React.createElement(Card_1.CardTitle, {title: 'Congratulations!', subtitle: 'Tutorial Complete!'}), React.createElement(Card_1.CardText, null, "What's next?", React.createElement("br", null), React.createElement("br", null), React.createElement("a", {href: 'https://coderoad.github.io/#tutorials'}, React.createElement(FlatButton_1.default, {label: 'See More Tutorials', disabled: true})), React.createElement("span", null, " (coming soon)"), React.createElement("br", null), React.createElement("br", null), React.createElement("a", {href: 'https://coderoad.github.io/build'}, React.createElement(FlatButton_1.default, {label: 'Learn how to Create a Tutorial'}))))); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.FinalPage;
