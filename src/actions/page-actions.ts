import {SET_ROUTE, SET_PAGE} from './actionTypes';
import {store} from '../store/store';
import TutorialPackage from '../services/tutorial-package';

export function setPage(selectedPosition: CR.Position = { chapter: 0, page: 0 }): CR.Action {
  if (selectedPosition.completed) {
    return { type: SET_ROUTE, payload: { route: 'final'} };
  }
  const page: CR.Page = TutorialPackage.getPage(selectedPosition);
  const tasks: CR.Task[] = TutorialPackage.getTasks(selectedPosition);
  const taskTests: CR.TaskTest[] = [].concat.apply([], tasks.map((task) => task.tests || []));
  const actions: string[][] = tasks.map((task: CR.Task) => task.actions || []);
  return { type: SET_PAGE, payload: { page, tasks, position: selectedPosition, taskTests, actions } };
}

export function nextPage(): CR.Action {
  const position: CR.Position = store.getState().position;
  const nextPosition: CR.Position = TutorialPackage.getNextPosition(position);
  return setPage(nextPosition);
}
