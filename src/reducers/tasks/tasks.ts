import * as Type from '../../actions/actionTypes';

const defaultTasks: cr.Task[] = [{
  title: '',
  description: '',
  completed: false,
  tests: [],
  hints: [],
  actions: []
}];

export default function tasksReducer(tasks = defaultTasks, action): cr.Task[] {
  switch (action.type) {
    case Type.SET_PAGE:
      return action.payload.tasks;
    default:
      return tasks;
  }
}
