"use strict";
var React = require('react');
var react_redux_1 = require('react-redux');
var theme_1 = require('../styles/theme');
var MuiThemeProvider_1 = require('material-ui/styles/MuiThemeProvider');
var SidePanel_1 = require('./SidePanel');
var Root = function (store) { return (React.createElement(react_redux_1.Provider, {store: store}, 
    React.createElement(MuiThemeProvider_1.default, {muiTheme: theme_1.default}, 
        React.createElement(SidePanel_1.default, null)
    )
)); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Root;
