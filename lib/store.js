"use strict";
var redux_1 = require('redux');
var reducers_1 = require('./reducers');
var createLogger = require('redux-logger');
var redux_throttle_actions_1 = require('redux-throttle-actions');
var redux_thunk_1 = require('redux-thunk');
var middlewares = [redux_thunk_1.default];
var throttleRunTest = redux_throttle_actions_1.default(['TEST_RUN'], 800);
middlewares.push(throttleRunTest);
var devMode = true;
if (devMode) {
    var logger = createLogger();
    middlewares.push(logger);
}
var store = redux_1.createStore(reducers_1.default, redux_1.applyMiddleware.apply(void 0, middlewares));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
