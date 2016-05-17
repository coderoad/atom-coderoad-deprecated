import {PAGE_SET} from '../types';
import handleActionString from './handle-action-string';

function handleTaskActions(actions: string[][]): void {
  const next = actions.shift();
  if (next && next.length) {
    // resolve promises in order
    next.reduce((total: Promise<any>, curr: string) => {
      return total.then(() => handleActionString(curr));
    }, Promise.resolve());
  }
}

// trigger actions only once, moving fowards
let taskTracker = 0;

export default function taskActionsReducer(
  taskActions = [], action: Action
): string[][] {
  let actions: string[][] = null;
  switch (action.type) {

    // load task actions
    case PAGE_SET:
      const {tasks, pagePosition, progress} = action.payload;
      const isCompleted = progress.pages[pagePosition];
      if (!isCompleted) {
        actions = tasks.map(task => task.actions || []);
      } else {
        // filter to only 'open' actions
        actions = tasks.map(task => {
          return task.actions.filter(a => !!a.match(/^open/));
        });
      }
      taskTracker = 0;
      handleTaskActions(actions); // run first action
      return actions;

    // run task actions
    case 'TEST_RESULT':
      actions = action.payload.taskActions || [];
      const nextTaskPosition = action.payload.result.taskPosition;
      const times: number = nextTaskPosition - taskTracker;

      if (times > 0) {
        // run actions for each task position passed
        for (let i = 0; i < times; i++) {
          handleTaskActions(actions); // run first action
        }
        taskTracker = nextTaskPosition;
      }
      return actions;

    default:
      return taskActions;
  }
}
