"use strict";
var env = 'dev';
var redux_1 = require('redux');
var redux_thunk_1 = require('redux-thunk');
var PouchDB = require('pouchdb');
var redux_pouchdb_1 = require('redux-pouchdb');
var reducers_1 = require('../reducers');
var db = new PouchDB('coderoad');
var middlewares = [redux_thunk_1.default];
if (env && env === 'dev') {
    var createLogger = require('redux-logger');
    var logger = createLogger();
    middlewares.push(logger);
}
var createStoreWithMiddleware = redux_1.compose(redux_1.applyMiddleware.apply(void 0, middlewares), redux_pouchdb_1.persistentStore(db))(redux_1.createStore);
exports.store = createStoreWithMiddleware(reducers_1.default, {});
