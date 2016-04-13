"use strict";
var store_1 = require('../store/store');
var Type = require('./actionTypes');
var Action = require('./actions');
var previous = null;
function setRoute(route) {
    if (route && route !== previous) {
        switch (route) {
            case 'tutorials':
                console.log('load');
                store_1.store.dispatch(Action.loadTutorials());
        }
        previous = route;
        return { type: Type.SET_ROUTE, payload: { route: route } };
    }
}
exports.setRoute = setRoute;
