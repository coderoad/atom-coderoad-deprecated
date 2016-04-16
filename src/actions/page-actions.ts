import {SET_ROUTE, SET_PAGE} from './actionTypes';
import {store} from '../store/store';
import Package from '../services/package';
import {flatten} from 'lodash';

export function setPage(selectedPosition: CR.Position = { chapter: 0, page: 0 }): CR.Action {
  if (selectedPosition.completed) {
    return { type: SET_ROUTE, payload: { route: 'final'} };
  }
  const page: CR.Page = Package.getPage(selectedPosition);
  const tasks: CR.Task[] = Package.getTasks(selectedPosition);
  const taskTests: CR.TaskTest[] = flatten(tasks.map((task) => task.tests || []));
  const actions: string[][] = tasks.map((task: CR.Task) => task.actions || []);
  return { type: SET_PAGE, payload: { page, tasks, position: selectedPosition, taskTests, actions } };
}

export function nextPage(): CR.Action {
  const position: CR.Position = store.getState().position;
  const nextPosition: CR.Position = Package.getNextPosition(position);
  return setPage(nextPosition);
}
