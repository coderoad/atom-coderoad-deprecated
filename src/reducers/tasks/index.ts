import {PAGE_SET} from '../../actions/_types';
import configTaskTests from './config-task-tests';

const _tasks: CR.Task[] = [{
  actions: [],
  completed: false,
  description: '',
  hints: [],
  tests: [],
}];

export default function tasksReducer(tasks = _tasks,
  action: Action): CR.Task[] {
  switch (action.type) {

    case PAGE_SET:
      const {dir, tutorial, pagePosition} = action.payload;
      // create absolute paths for 'task-tests'
      return configTaskTests(
        dir, tutorial, tutorial.pages[pagePosition].tasks || []
      );

    default:
      return tasks;
  }
}
