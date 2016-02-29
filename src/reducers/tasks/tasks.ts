import * as Type from '../../actions/actionTypes';

const defaultTasks: CR.Task[] = [{
  title: '',
  description: '',
  completed: false,
  tests: [],
  hints: [],
  actions: []
}];

export default function tasksReducer(tasks = defaultTasks, action: CR.Action): CR.Task[] {
  switch (action.type) {
    case Type.SET_PAGE:
      return action.payload.tasks;
    default:
      return tasks;
  }
}
