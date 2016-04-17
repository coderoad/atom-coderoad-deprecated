import {PAGE_SET, TEST_RESULT} from '../../actions/_types';
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
    case PAGE_SET:
      actions = action.payload.actions;
      currentTaskPosition = 0;
      handleEditorActions(actions.shift());
      return actions;
    case TEST_RESULT:
      actions = action.payload.actions;
      let nextTaskPosition = action.payload.result.taskPosition;
      if (nextTaskPosition > currentTaskPosition) {
        // run actions for each task position passed
        for (let i = 0; i < nextTaskPosition - currentTaskPosition; i++) {
          handleEditorActions(actions.shift());
        }
        currentTaskPosition = nextTaskPosition;
      }
      return actions;
    default:
      return editorActions;
  }
}
