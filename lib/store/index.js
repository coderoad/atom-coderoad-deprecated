"use strict";
var redux_1 = require('redux');
var redux_action_thunk_1 = require('redux-action-thunk');
var reducers_1 = require('../reducers');
var createLogger = require('redux-logger');
var middlewares = [redux_action_thunk_1.ratMiddleware];
var devMode = true;
if (devMode) {
    var logger = createLogger();
    middlewares.push(logger);
}
var store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware.apply(void 0, middlewares));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
