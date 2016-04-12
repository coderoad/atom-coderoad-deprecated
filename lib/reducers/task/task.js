"use strict";
var Type = require('../../actions/actionTypes');
var defaultTaskPosition = {
    position: 0,
    change: false
};
function taskPositionReducer(taskPos, action) {
    if (taskPos === void 0) { taskPos = defaultTaskPosition; }
    switch (action.type) {
        case Type.SET_PAGE:
            return {
                position: 0,
                change: false
            };
        case Type.TEST_RESULT:
            var _a = action.payload.result, taskPosition = _a.taskPosition, change = _a.change;
            return {
                position: taskPosition,
                change: change
            };
        default:
            return taskPos;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = taskPositionReducer;
