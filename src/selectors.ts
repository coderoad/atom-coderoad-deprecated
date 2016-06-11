import {createSelector} from 'reselect';

export const pageSelector = state => state.tutorial.pages[state.pagePosition];

export const tasksSelector = createSelector(
  pageSelector,
  page => page.tasks
);

export const configSelector = state => state.packageJson.config;
