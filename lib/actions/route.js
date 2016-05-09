"use strict";
var _types_1 = require('./_types');
var tutorial_1 = require('./tutorial');
var previous = null;
function routeSet(route) {
    if (route && route !== previous) {
        return function (dispatch) {
            switch (route) {
                case 'tutorials':
                    dispatch(tutorial_1.tutorialsFind());
            }
            previous = route;
            dispatch({ type: _types_1.ROUTE_SET, payload: { route: route } });
        };
    }
}
exports.routeSet = routeSet;
