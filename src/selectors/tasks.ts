import {createSelector} from 'reselect';
import {pageSelector} from './page';

export const tasksSelector = createSelector(
  pageSelector,
  page => page.tasks
);

export const taskPositionSelector = state => state.taskPosition;

export const taskSelector = createSelector(
  tasksSelector,
  state => state.taskPosition,
  (tasks, taskPosition) => tasks.length && taskPosition <= tasks.length - 1 ?
      tasks[taskPosition] : null
);

export const visibleTasksSelector = createSelector(
  tasksSelector,
  state => state.taskPosition,
  (tasks, taskPosition) => tasks.slice(0, taskPosition + 1)
);

export const taskProgressSelector = createSelector(
  tasksSelector,
  state => state.taskPosition,
  (tasks, taskPosition) => (taskPosition / tasks.length) * 100
);
