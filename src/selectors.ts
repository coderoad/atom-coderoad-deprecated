import {createSelector} from 'reselect';

export const pageSelector = state => state.tutorial.pages[state.pagePosition];

export const tasksSelector = createSelector(
  pageSelector,
  page => page.tasks
);

export const taskPositionSelector = state => state.taskPosition;

export const pageCompletedSelector = state => state.progress.pages[state.pagePosition];

export const taskSelector = state => createSelector(
  tasksSelector,
  tasks => {
    return (
      tasks.length <= tasks.length ? tasksSelector(state)[state.taskPosition] : null
    );
  }
);

export const visibleTasksSelector = state => createSelector(
  tasksSelector,
  tasks => {
    console.log(tasks);
    return tasks.slice(0, state.taskPosition + 1);
  }
);

export const taskProgressSelector = state => createSelector(
  tasksSelector,
  tasks => (state.taskPosition / tasks.length) * 100
);

export const configSelector = state => state.packageJson.config;
