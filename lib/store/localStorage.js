"use strict";
var redux_1 = require('redux');
var redux_localstorage_1 = require('redux-localstorage');
var adapter = require('redux-localstorage/lib/adapters/localStorage');
var redux_localstorage_filter_1 = require('redux-localstorage-filter');
var index_1 = require('./index');
function getTutorial() {
    return index_1.store.getState().tutorial.name;
}
var storage = redux_1.compose(redux_localstorage_filter_1.default(['progress']))(adapter(window.localStorage));
var localStorage = redux_localstorage_1.default(storage, "coderoad." + getTutorial());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = localStorage;
