"use strict";
var store_1 = require('../store/store');
var actionTypes_1 = require('./actionTypes');
var actions_1 = require('./actions');
var previous = null;
function setRoute(route) {
    if (route && route !== previous) {
        switch (route) {
            case 'tutorials':
                store_1.store.dispatch(actions_1.loadTutorials());
        }
        previous = route;
        return { type: actionTypes_1.ROUTE_SET, payload: { route: route } };
    }
}
exports.setRoute = setRoute;
