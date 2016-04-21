"use strict";
var store_1 = require('../store');
var _types_1 = require('./_types');
var tutorial_1 = require('./tutorial');
var previous = null;
function setRoute(route) {
    if (route && route !== previous) {
        switch (route) {
            case 'tutorials':
                store_1.store.dispatch(tutorial_1.tutorialsFind());
        }
        previous = route;
        return {
            payload: { route: route },
            type: _types_1.ROUTE_SET,
        };
    }
}
exports.setRoute = setRoute;
