"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../../actions');
var colors_1 = require('material-ui/styles/colors');
var update_1 = require('material-ui/svg-icons/action/update');
;
var styles = {
    icon: {
        width: '18px',
        marginLeft: '10px',
    },
    latest: {
        marginLeft: '10px',
        opacity: 0.5,
    },
};
var UpdateTutorial = (function (_super) {
    __extends(UpdateTutorial, _super);
    function UpdateTutorial() {
        _super.apply(this, arguments);
    }
    UpdateTutorial.prototype.render = function () {
        var _a = this.props, tutorial = _a.tutorial, tutorialUpdate = _a.tutorialUpdate;
        return (React.createElement("span", null, 
            React.createElement(update_1.default, {style: styles.icon, color: colors_1.pink500, onTouchTap: tutorialUpdate.bind(this, tutorial.name)}), 
            React.createElement("span", {style: styles.latest}, "(" + tutorial.latest + ")" ? tutorial.latest : '')));
    };
    return UpdateTutorial;
}(React.Component));
var mapStateToProps = function (state, props) { return ({
    tutorial: props.tutorial
}); };
var mapDispatchToProps = { tutorialUpdate: actions_1.tutorialUpdate };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UpdateTutorial);
//# sourceMappingURL=index.js.map