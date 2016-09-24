"use strict";
var types_1 = require('../types');
function taskPosition(taskPosition, action) {
    if (taskPosition === void 0) { taskPosition = 0; }
    switch (action.type) {
        case 'PAGE_SET':
            return 0;
        case types_1.TEST_RESULT:
            return action.payload.result.taskPosition;
        default:
            return taskPosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskPosition;
//# sourceMappingURL=index.js.map