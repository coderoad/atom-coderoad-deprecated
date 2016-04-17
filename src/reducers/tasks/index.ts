import {PAGE_SET} from '../../actions/_types';

const defaultTasks: CR.Task[] = [{
  description: '',
  completed: false,
  tests: [],
  hints: [],
  actions: []
}];

export default function tasksReducer(tasks = defaultTasks,
  action: CR.Action): CR.Task[] {
  switch (action.type) {
    case PAGE_SET:
      return action.payload.tasks;
    default:
      return tasks;
  }
}
