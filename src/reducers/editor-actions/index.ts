import {TESTS_LOAD, TEST_RESULT} from '../../actions/_types';
import {editorActions} from './actions';
import {store} from '../../store';

function handleEditorActions(actionArray: string[]): void {
  if (actionArray && actionArray.length) {
    // TODO: What is this???
    actionArray.map((actionString) => editorActions(actionString));
  }
}

let currentTaskPosition = 0;
/**
 * Test is running, return true, else false
 */
export default function editorActionsReducer(editorActions = [], action: Action): string[] {
  let actions: string[] = null;
  switch (action.type) {
    case TESTS_LOAD:
      actions = store.getState().tasks.map(task => task.actions || []);
      currentTaskPosition = 0;
      handleEditorActions(actions.shift());
      return actions;

    case TEST_RESULT:
      actions = action.payload.actions;
      const nextTaskPosition = action.payload.result.taskPosition;
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
