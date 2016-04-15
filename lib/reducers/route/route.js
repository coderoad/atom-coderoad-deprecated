"use strict";
var Type = require('../../actions/actionTypes');
var defaultRoute = 'tutorials';
function routeReducer(route, action) {
    if (route === void 0) { route = defaultRoute; }
    switch (action.type) {
        case Type.SET_ROUTE:
            var next = action.payload.route;
            return action.payload.route;
        default:
            return route;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeReducer;
