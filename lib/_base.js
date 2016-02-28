"use strict";
var store_1 = require('./store/store');
exports.store = store_1.store;
exports.initialState = store_1.initialState;
exports.dispatch = store_1.dispatch;
var reducer_1 = require('./reducers/reducer');
exports.reducer = reducer_1.default;
