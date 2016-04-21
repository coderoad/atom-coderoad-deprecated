import {combineReducers} from 'redux';

import alert from './alert';
import checks from './checks';
import dir from './dir';
import editorActions from './editor-actions';
import hintPosition from './hint-position';
import packageJson from './package-json';
import page from './page';
import position from './position';
import progress from './progress';
import route from './route';
import taskPosition from './task-position';
import taskTests from './task-tests';
import tasks from './tasks';
import testRun from './test-run';
import tutorial from './tutorial';
import tutorials from './tutorials';

export default combineReducers({
  alert, checks, dir, editorActions, hintPosition, page,
  packageJson, position, progress, route, taskPosition,
  taskTests, tasks, testRun, tutorial, tutorials,
});
