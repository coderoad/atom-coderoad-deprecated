"use strict";
var redux_1 = require('redux');
var redux_localstorage_1 = require('redux-localstorage');
var reducers_1 = require('../reducers');
var middleware_1 = require('./middleware');
var initialState = {};
var reducer = redux_1.compose(redux_localstorage_1.mergePersistedState())(reducers_1.default);
exports.store = middleware_1.default(reducer, initialState);
