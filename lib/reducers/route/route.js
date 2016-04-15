"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var defaultRoute = 'start';
function routeReducer(route, action) {
    if (route === void 0) { route = defaultRoute; }
    switch (action.type) {
        case actionTypes_1.SET_ROUTE:
            var next = action.payload.route;
            return action.payload.route;
        default:
            return route;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeReducer;
