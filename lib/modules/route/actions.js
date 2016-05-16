"use strict";
var types_1 = require('./types');
var previous = null;
function routeSet(route) {
    if (route && route !== previous) {
        return function (dispatch) {
            previous = route;
            dispatch({ type: types_1.ROUTE_SET, payload: { route: route } });
        };
    }
}
exports.routeSet = routeSet;
