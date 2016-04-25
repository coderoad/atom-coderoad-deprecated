"use strict";
var env = 'dev';
var redux_1 = require('redux');
var redux_thunk_1 = require('redux-thunk');
var middlewares = [redux_thunk_1.default];
if (env && env === 'dev') {
    var createLogger = require('redux-logger');
    var logger = createLogger();
    middlewares.push(logger);
}
var createStoreWithMiddleware = redux_1.compose(redux_1.applyMiddleware.apply(void 0, middlewares))(redux_1.createStore);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createStoreWithMiddleware;
