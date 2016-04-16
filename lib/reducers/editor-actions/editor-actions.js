"use strict";
var actionTypes_1 = require('../../actions/actionTypes');
var actions_1 = require('./actions');
function handleEditorActions(actionArray) {
    if (actionArray && actionArray.length) {
        actionArray.map(function (actionString) { return actions_1.editorActions(actionString); });
    }
}
var currentTaskPosition = 0;
var actions;
function editorActionsReducer(editorActions, action) {
    if (editorActions === void 0) { editorActions = []; }
    switch (action.type) {
        case actionTypes_1.SET_PAGE:
            actions = action.payload.actions;
            currentTaskPosition = 0;
            handleEditorActions(actions.shift());
            return actions;
        case actionTypes_1.TEST_RESULT:
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
