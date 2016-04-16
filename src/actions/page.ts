import {ROUTE_SET, PAGE_SET} from './_types';
import {store} from '../store/store';
import TutorialPackage from '../services/tutorial-package';

export function pageNext(): CR.Action {
  const position: CR.Position = store.getState().position;
  const nextPosition: CR.Position = TutorialPackage.getNextPosition(position);
  return pageSet(nextPosition);
}

export function pageSet(selectedPosition: CR.Position = { chapter: 0, page: 0 }): CR.Action {
  if (selectedPosition.completed) {
    return { type: ROUTE_SET, payload: { route: 'final'} };
  }
  const page: CR.Page = TutorialPackage.getPage(selectedPosition);
  const tasks: CR.Task[] = TutorialPackage.getTasks(selectedPosition);
  const taskTests: CR.TaskTest[] = [].concat.apply([], tasks.map((task) => task.tests || []));
  const actions: string[][] = tasks.map((task: CR.Task) => task.actions || []);
  return { type: PAGE_SET, payload: { page, tasks, position: selectedPosition, taskTests, actions } };
}
