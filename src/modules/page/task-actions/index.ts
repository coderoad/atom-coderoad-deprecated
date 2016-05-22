import {PAGE_SET} from '../types';
import handleTaskActions from './handle-actions';

// trigger actions only once, moving fowards
let taskPositionTracker = 0;

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
      taskPositionTracker = 0;
      handleTaskActions(actions); // run first action
      return actions;

    // run task actions
    case 'TEST_RESULT':
      actions = action.payload.taskActions || [];
      const nextTaskPosition = action.payload.result.taskPosition;
      const times: number = nextTaskPosition - taskPositionTracker;
      if (times > 0) {
        // run actions for each task position passed
        for (let i = 0; i < times; i++) {
          handleTaskActions(actions); // run first action
        }
        taskPositionTracker = nextTaskPosition;
      }
      return actions;

    default:
      return taskActions;
  }
}
