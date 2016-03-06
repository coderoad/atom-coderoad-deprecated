import {combineReducers} from 'redux';

import project from './project/project';
import route from './route/route';
import progress from './progress/progress';
import position from './position/position';
import page from './page/page';
import tasks from './tasks/tasks';
import taskPosition from './task-position/task-position';
import hintPosition from './hint-position/hint-position';
import taskTests from './task-tests/task-tests';
import alert from './alert/alert';
import runTests from './run-tests/run-tests';
import editorActions from './editor-actions/editor-actions';
import tutorials from './tutorials/tutorials';
import log from './log/log';
import warning from './warning/warning';

export default combineReducers({
  project: project,
  route: route,
  progress: progress,
  position: position,
  page: page,
  tasks: tasks,
  taskPosition: taskPosition,
  hintPosition: hintPosition,
  taskTests: taskTests,
  alert: alert,
  runTests: runTests,
  editorActions: editorActions,
  tutorials: tutorials,
  log: log,
  warning: warning
});
