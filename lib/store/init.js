"use strict";
var store_1 = require('./store');
var Action = require('../actions/actions');
store_1.store.dispatch(Action.setGlobals);
store_1.store.dispatch(Action.verifySetup);
