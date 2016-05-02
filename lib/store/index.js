"use strict";
var redux_1 = require('redux');
var reducers_1 = require('../reducers');
var initialState = {};
var store = redux_1.createStore(reducers_1.default, initialState);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
