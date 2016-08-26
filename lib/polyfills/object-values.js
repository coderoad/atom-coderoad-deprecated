"use strict";
function polyfillObjectValues() {
    if (typeof Object.values !== 'function') {
        Object.values = function (obj) {
            var vals = [];
            for (var key in obj) {
                vals.push(obj[key]);
            }
            return vals;
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = polyfillObjectValues;
