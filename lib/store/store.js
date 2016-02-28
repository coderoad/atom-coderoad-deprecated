"use strict";
var redux_1 = require('redux');
var initialState_1 = require('./initialState');
var reducer_1 = require('../reducers/reducer');
exports.initialState = initialState_1.getInitialState();
exports.store = redux_1.createStore(reducer_1.default, exports.initialState);
exports.dispatch = exports.store.dispatch;
