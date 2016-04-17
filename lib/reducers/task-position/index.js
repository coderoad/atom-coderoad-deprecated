"use strict";
var _types_1 = require('../../actions/_types');
var defaultTaskPosition = 0;
function taskPositionReducer(taskPosition, action) {
    if (taskPosition === void 0) { taskPosition = defaultTaskPosition; }
    switch (action.type) {
        case _types_1.PAGE_SET:
            return 0;
        case _types_1.TEST_RESULT:
            return action.payload.result.taskPosition;
        default:
            return taskPosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskPositionReducer;
