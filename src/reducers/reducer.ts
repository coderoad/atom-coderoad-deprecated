import {combineReducers} from 'redux';

import project from './project/project';
import route from './route/route';
import progress from './progress/progress';
import position from './position/position';
import page from './page/page';
import tasks from './tasks/tasks';
import taskPosition from './task-position/task-position';
import taskTests from './task-tests/task-tests';
import alert from './alert/alert';
import runTests from './run-tests/run-tests';
import editorActions from './editor-actions/editor-actions';
import tutorials from './tutorials/tutorials';
import log from './log/log';

export default combineReducers({
  project: project,
  route: route,
  progress: progress,
  position: position,
  page: page,
  tasks: tasks,
  taskPosition: taskPosition,
  taskTests: taskTests,
  alert: alert,
  runTests: runTests,
  editorActions: editorActions,
  tutorials: tutorials,
  log: log
});
