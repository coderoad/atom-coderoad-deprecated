"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var actions_1 = require('../../actions');
var Snackbar_1 = require('material-ui/Snackbar');
var defaultAlert = {
    message: '',
    open: false,
    action: 'NOTE',
};
var styles = {
    snackbar: {
        display: 'inline-block',
        margin: '0px 10px',
    },
};
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        _super.apply(this, arguments);
    }
    Alert.prototype.render = function () {
        var _a = this.props, alert = _a.alert, alertClose = _a.alertClose;
        var action = alert.action, message = alert.message, open = alert.open, duration = alert.duration;
        return (React.createElement(Snackbar_1.default, {className: 'cr-alert ' + action, style: styles.snackbar, open: open, action: action || 'NOTE', message: message || '', autoHideDuration: duration || 2000, onActionTouchTap: alertClose, onRequestClose: alertClose}));
    };
    return Alert;
}(React.Component));
var mapStateToProps = function (state) { return ({
    alert: state.alert || defaultAlert,
}); };
var mapDispatchToProps = { alertClose: actions_1.alertClose };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Alert);
//# sourceMappingURL=index.js.map