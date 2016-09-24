"use strict";
var redux_1 = require('redux');
var createLogger = require('redux-logger');
var redux_thunk_1 = require('redux-thunk');
var configureStore = function (_a) {
    var reducer = _a.reducer, devMode = _a.devMode;
    var middlewares = [redux_thunk_1.default];
    if (devMode) {
        var logger = createLogger();
        middlewares.push(logger);
    }
    else {
        process.env.NODE_ENV = 'production';
    }
    var store = redux_1.createStore(reducer, redux_1.applyMiddleware.apply(void 0, middlewares));
    return store;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
//# sourceMappingURL=configureStore.js.map