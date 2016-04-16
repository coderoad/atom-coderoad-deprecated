"use strict";
var store_1 = require('../store/store');
var _types_1 = require('./_types');
var _actions_1 = require('./_actions');
var previous = null;
function setRoute(route) {
    if (route && route !== previous) {
        switch (route) {
            case 'tutorials':
                store_1.store.dispatch(_actions_1.tutorialsFind());
        }
        previous = route;
        return { type: _types_1.ROUTE_SET, payload: { route: route } };
    }
}
exports.setRoute = setRoute;
