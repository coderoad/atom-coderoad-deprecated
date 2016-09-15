"use strict";
var types_1 = require('./types');
var _route = 'start';
function routeReducer(route, action) {
    if (route === void 0) { route = _route; }
    switch (action.type) {
        case types_1.ROUTE_SET:
            return action.payload.route;
        default:
            return route;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeReducer;
