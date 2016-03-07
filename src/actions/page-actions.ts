import * as Type from './actionTypes';
import {store} from '../_base';
import Package from '../services/package';
const _ = require('lodash');

export function setPage(selectedPosition: CR.Position = { chapter: 0, page: 0 }): CR.Action {
  if (selectedPosition.completed) {
    return { type: Type.SET_ROUTE, payload: { route: 'final'} };
  }
  const page: CR.Page = Package.getPage(selectedPosition);
  const tasks: CR.Task[] = Package.getTasks(selectedPosition);
  const taskTests: CR.TaskTest[] = _.flatten(tasks.map((task) => task.tests || []));
  const actions: string[][] = tasks.map((task: CR.Task) => task.actions || []);
  return { type: Type.SET_PAGE, payload: { page, tasks, position: selectedPosition, taskTests, actions } };
}

export function nextPage(): CR.Action {
  const position: CR.Position = store.getState().position;
  const nextPosition: CR.Position = Package.getNextPosition(position);
  return setPage(nextPosition);
}
