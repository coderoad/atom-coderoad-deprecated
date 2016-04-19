"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var react_redux_1 = require('react-redux');
var store_1 = require('../store');
var App_1 = require('./App');
var theme_1 = require('./theme');
var MuiThemeProvider_1 = require('material-ui/styles/MuiThemeProvider');
require('./remove-later');
function render(target) {
    ReactDOM.render(React.createElement(react_redux_1.Provider, {store: store_1.store}, React.createElement(MuiThemeProvider_1.default, {muiTheme: theme_1.muiTheme}, React.createElement(App_1.App, null))), target);
}
exports.render = render;
