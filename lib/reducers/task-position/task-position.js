"use strict";
var Type = require('../../actions/actionTypes');
var defaultTaskPosition = 0;
function taskPositionReducer(taskPosition, action) {
    if (taskPosition === void 0) { taskPosition = defaultTaskPosition; }
    switch (action.type) {
        case Type.SET_PAGE:
            return 0;
        case Type.TEST_RESULT:
            return action.payload.result.taskPosition;
        default:
            return taskPosition;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskPositionReducer;
