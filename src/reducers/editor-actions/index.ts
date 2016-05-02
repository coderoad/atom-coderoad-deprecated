import {TESTS_LOAD, TEST_RESULT} from '../../actions/_types';
import {editorActions} from './actions';
import store from '../../store';

function handleEditorActions(actions: string[][]): void {
  const next = actions.shift();
  if (next && next.length) {
    // resolve promises in order
    next.reduce((total: Promise<any>, curr: string) => {
      return total.then(() => editorActions(curr));
    }, Promise.resolve());
  }
}

// trigger actions only once, moving fowards
let currentTaskPosition = 0;

export default function editorActionsReducer(
  editorActions = [], action: Action
): string[][] {
  let actions: string[][] = null;
  switch (action.type) {
    case TESTS_LOAD:
      actions = store.getState().tasks.map(task => task.actions || []);
      handleEditorActions(actions); // run first action
      return actions;

    case TEST_RESULT:
      actions = action.payload.actions || [];
      const nextTaskPosition: number = action.payload.result.taskPosition;
      const times: number = nextTaskPosition - currentTaskPosition;
      if (times > 0) {
        // run actions for each task position passed
        for (let i = 0; i < times; i++) {
          handleEditorActions(actions); // run first action
        }
        currentTaskPosition = nextTaskPosition;
      }
      return actions;

    default:
      return editorActions;
  }
}
