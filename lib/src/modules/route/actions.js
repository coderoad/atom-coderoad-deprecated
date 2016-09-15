"use strict";
var types_1 = require('./types');
function routeSet(route) {
    return function (dispatch, getState) {
        if (getState().route !== route) {
            dispatch({ type: types_1.ROUTE_SET, payload: { route: route } });
        }
        return;
    };
}
exports.routeSet = routeSet;
