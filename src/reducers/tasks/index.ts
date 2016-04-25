import {PAGE_SET} from '../../actions/_types';
import store from '../../store';
import {configTaskTests} from './config-task-tests';

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
      const {chapter, page} = action.payload.position;
      return configTaskTests(
        store.getState().tutorial.chapters[chapter].pages[page].tasks || []
      );
    default:
      return tasks;
  }
}
