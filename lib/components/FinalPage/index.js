"use strict";
var React = require('react');
var Paper_1 = require('material-ui/Paper');
var Card_1 = require('material-ui/Card');
var FlatButton_1 = require('material-ui/FlatButton');
exports.FinalPage = function () { return (React.createElement(Paper_1.default, null, React.createElement(Card_1.Card, null, React.createElement(Card_1.CardTitle, {title: 'Congratulations!', subtitle: 'Tutorial Complete!'}), React.createElement(Card_1.CardText, null, "What's next?", React.createElement(CardActions, null, React.createElement("a", {href: 'https://coderoad.github.io/#tutorials'}, React.createElement(FlatButton_1.default, {label: 'See More Tutorials', disabled: true})), React.createElement("a", {href: 'https://coderoad.github.io/build'}, React.createElement(FlatButton_1.default, {label: 'Learn how to Create a Tutorial'}))))))); };
