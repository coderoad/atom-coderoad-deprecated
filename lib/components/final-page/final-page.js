"use strict";
var React = require('react');
var paper_1 = require('material-ui/lib/paper');
var card_1 = require('material-ui/lib/card/card');
var card_title_1 = require('material-ui/lib/card/card-title');
var card_text_1 = require('material-ui/lib/card/card-text');
var card_actions_1 = require('material-ui/lib/card/card-actions');
var flat_button_1 = require('material-ui/lib/flat-button');
exports.FinalPage = function () { return (React.createElement(paper_1.default, null, React.createElement(card_1.default, null, React.createElement(card_title_1.default, {title: 'Congratulations!', subtitle: 'Tutorial Complete!'}), React.createElement(card_text_1.default, null, "What's next?", React.createElement(card_actions_1.default, null, React.createElement("a", {href: 'https://coderoad.github.io/#tutorials'}, React.createElement(flat_button_1.default, {label: 'See More Tutorials', disabled: true})), React.createElement("a", {href: 'https://coderoad.github.io/build'}, React.createElement(flat_button_1.default, {label: 'Learn how to Create a Tutorial'}))))))); };
