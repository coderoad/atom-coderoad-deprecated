import {PAGE_SET} from '../types';
import handleTaskActions from './handle-actions';

// trigger actions only once, moving fowards
let taskPositionTracker = 0;
/**
 * task action reducer
 * @param  {} t=[]
 * @param  {Action} action
 * @returns string[][] array of array of actions
 */
export default function taskActionsReducer(
  t = [], action: Action
): string[][] {
  let actions: string[][] = [[]];
  switch (action.type) {

    case PAGE_SET:
      // load task actions
      const {tasks, pagePosition, progress} = action.payload;

      const isCompleted = progress.pages[pagePosition];
      if (!isCompleted) {
        // if page is completed, mark tasks as completed
        actions = tasks.map(task => task.actions || []);
      } else {
        // filter to only 'open' actions
        actions = tasks.map(task => {
          if (task.actions && task.actions.length) {
            return task.actions.filter(a => !!a.match(/^open/));
          } else {
            return [[]];
          }
        });
      }
      // page loads - reset tracker
      taskPositionTracker = 0;
      // run first action
      handleTaskActions(actions);
      return actions;

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
      return t;
  }
}
