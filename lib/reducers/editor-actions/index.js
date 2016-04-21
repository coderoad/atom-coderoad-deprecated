"use strict";
var _types_1 = require('../../actions/_types');
var actions_1 = require('./actions');
var store_1 = require('../../store');
function handleEditorActions(actionArray) {
    if (actionArray && actionArray.length) {
        actionArray.map(function (actionString) { return actions_1.editorActions(actionString); });
    }
}
var currentTaskPosition = 0;
function editorActionsReducer(editorActions, action) {
    if (editorActions === void 0) { editorActions = []; }
    var actions = null;
    switch (action.type) {
        case _types_1.TESTS_LOAD:
            actions = store_1.store.getState().tasks.map(function (task) { return task.actions || []; });
            console.log('LOAD', actions);
            currentTaskPosition = 0;
            handleEditorActions(actions.shift());
            return actions;
        case _types_1.TEST_RESULT:
            actions = action.payload.actions;
            var nextTaskPosition = action.payload.result.taskPosition;
            if (nextTaskPosition > currentTaskPosition) {
                for (var i = 0; i < nextTaskPosition - currentTaskPosition; i++) {
                    handleEditorActions(actions.shift());
                }
                currentTaskPosition = nextTaskPosition;
            }
            return actions;
        default:
            return editorActions;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = editorActionsReducer;
