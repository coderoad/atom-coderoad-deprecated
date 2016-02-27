import * as Type from './actionTypes';
import * as Action from './actions';
import {store} from '../_base';
import Package from '../services/package';
const _ = require('lodash');

export function setPage(selectedPosition: cr.Position = { chapter: 0, page: 0 }): Action {
  const page = Package.getPage(selectedPosition);
  const tasks = Package.getTasks(selectedPosition);
  const taskTests: cr.TaskTest[] = _.flatten(tasks.map((task) => task.tests || []));
  let actions: string[] = tasks.map((task) => task.actions || []);
  return { type: Type.SET_PAGE, payload: { page, tasks, position: selectedPosition, taskTests, actions } };
}

export function nextPage(): Action {
  const position = store.getState().position;
  const nextPosition = Package.getNextPosition(position);
  return setPage(nextPosition);
}
