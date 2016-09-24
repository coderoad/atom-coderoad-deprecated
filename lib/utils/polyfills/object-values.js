"use strict";
function polyfillObjectValues() {
    if (typeof Object.values !== 'function') {
        Object.values = function (obj) {
            var vals = new Set();
            for (var key in obj) {
                vals.add(obj[key]);
            }
            return Array.from(vals);
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = polyfillObjectValues;
//# sourceMappingURL=object-values.js.map