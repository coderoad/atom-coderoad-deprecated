import {PAGE_SET} from '../../actions/_types';
import configTaskTests from '../task-tests/config-task-tests';

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
      const {tutorial, pagePosition} = action.payload;
      return configTaskTests(
        tutorial.pages[pagePosition].tasks || []
      );

    default:
      return tasks;
  }
}
