"use strict";
var _types_1 = require('../../actions/_types');
var actions_1 = require('./actions');
var store_1 = require('../../store');
function handleEditorActions(actions) {
    var next = actions.shift();
    if (next && next.length) {
        next.reduce(function (total, curr) {
            return total.then(function () { return actions_1.editorActions(curr); });
        }, Promise.resolve());
    }
}
var taskTracker = 0;
function editorActionsReducer(editorActions, action) {
    if (editorActions === void 0) { editorActions = []; }
    var actions = null;
    switch (action.type) {
        case _types_1.TESTS_LOAD:
            if (store_1.default.getState().progress.pages[store_1.default.getState().pagePosition]) {
                return [];
            }
            taskTracker = 0;
            actions = store_1.default.getState().tasks.map(function (task) { return task.actions || []; });
            handleEditorActions(actions);
            return actions;
        case _types_1.TEST_RESULT:
            actions = action.payload.actions || [];
            var nextTaskPosition = action.payload.result.taskPosition;
            var times = nextTaskPosition - taskTracker;
            if (times > 0) {
                for (var i = 0; i < times; i++) {
                    handleEditorActions(actions);
                }
                taskTracker = nextTaskPosition;
            }
            return actions;
        default:
            return editorActions;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editorActionsReducer;
