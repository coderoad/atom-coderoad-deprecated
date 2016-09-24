"use strict";
var store_1 = require('../../../store');
var actions_1 = require('../actions');
function handleResult(result) {
    store_1.default.dispatch(actions_1.testComplete(result));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleResult;
;
//# sourceMappingURL=handle-result.js.map