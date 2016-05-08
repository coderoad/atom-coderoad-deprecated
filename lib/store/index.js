"use strict";
var redux_1 = require('redux');
var reducers_1 = require('../reducers');
var createLogger = require('redux-logger');
var devMode = true;
var store = null;
if (devMode) {
    var logger = createLogger();
    store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(logger));
}
else {
    var initialState = {};
    store = redux_1.createStore(reducers_1.default, initialState);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
