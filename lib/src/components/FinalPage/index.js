"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
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
        return (React.createElement(Card_1.Card, {style: styles.card}, 
            React.createElement(Card_1.CardTitle, {title: 'Congratulations!', subtitle: 'Tutorial Complete!'}), 
            React.createElement(Card_1.CardText, null, 
                "What's next?", 
                React.createElement("br", null), 
                React.createElement("br", null), 
                React.createElement("a", {href: 'https://coderoad.github.io/tutorials.html'}, 
                    React.createElement(FlatButton_1.default, {label: 'See More Tutorials', disabled: true})
                ), 
                React.createElement("span", null, " (coming soon)"), 
                React.createElement("br", null), 
                React.createElement("br", null), 
                React.createElement("a", {href: 'https://coderoad.github.io/builder-coderoad.html'}, 
                    React.createElement(FlatButton_1.default, {label: 'Learn how to Create a Tutorial'})
                ))));
    };
    return FinalPage;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FinalPage;
