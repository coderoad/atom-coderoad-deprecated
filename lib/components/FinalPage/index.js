"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var selectors_1 = require('../../selectors');
var index_1 = require('../index');
var SeeMore_1 = require('./SeeMore');
var Card_1 = require('material-ui/Card');
var Divider_1 = require('material-ui/Divider');
;
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
        var page = this.props.page;
        return (React.createElement(Card_1.Card, {style: styles.card}, 
            React.createElement(Card_1.CardTitle, {title: 'Congratulations!', subtitle: 'Tutorial Complete!'}), 
            React.createElement(Card_1.CardText, null, 
                page && page.description ? React.createElement(index_1.Markdown, {children: page.description}) : null, 
                page && page.description ? React.createElement(Divider_1.default, null) : null, 
                React.createElement(SeeMore_1.default, null))));
    };
    return FinalPage;
}(React.Component));
var mapStateToProps = function (state) { return ({
    page: selectors_1.finalPageSelector(state)
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(FinalPage);
//# sourceMappingURL=index.js.map