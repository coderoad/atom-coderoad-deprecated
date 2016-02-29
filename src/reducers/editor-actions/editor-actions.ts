import * as Type from '../../actions/actionTypes';
const _ = require('lodash');
import {editorActions} from './actions';

function handleEditorActions(actionArray: string[]): void {
  if (actionArray && actionArray.length) {
    // TODO: What is this???
    actionArray.map((actionString) => editorActions(actionString));
  }
}

let currentTaskPosition = 0;
var actions;
/**
 * Test is running, return true, else false
 */
export default function editorActionsReducer(editorActions = [], action: CR.Action): string[] {
  switch (action.type) {
    case Type.SET_PAGE:
      actions = action.payload.actions;
      currentTaskPosition = 0;
      handleEditorActions(actions.shift());
      return actions;
    case Type.TEST_RESULT:
      actions = action.payload.actions;
      let nextTaskPosition = action.payload.result.taskPosition;
      if (nextTaskPosition > currentTaskPosition) {
        // run actions for each task position passed
        _.times(handleEditorActions(actions.shift()), nextTaskPosition - currentTaskPosition);
        currentTaskPosition = nextTaskPosition;
      }
      return actions;
    default:
      return editorActions;
  }
}
