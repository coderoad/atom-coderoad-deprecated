"use strict";
var _types_1 = require('../../actions/_types');
var _route = 'start';
function routeReducer(route, action) {
    if (route === void 0) { route = _route; }
    switch (action.type) {
        case _types_1.ROUTE_SET:
            var next = action.payload.route;
            return action.payload.route;
        default:
            return route;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeReducer;
