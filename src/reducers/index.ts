import {combineReducers} from 'redux';

import alert from './alert';
import checks from './checks';
import editorActions from './editor-actions';
import globals from './globals';
import hintPosition from './hint-position';
import page from './page';
import position from './position';
import progress from './progress';
import route from './route';
import taskPosition from './task-position';
import taskTests from './task-tests';
import tasks from './tasks';
import testRun from './test-run';
import tutorialInfo from './tutorial-info';
import tutorials from './tutorials';

export default combineReducers({
  alert, checks, editorActions, globals, hintPosition,
  page, position, progress, route, taskPosition, taskTests,
  tasks, testRun, tutorialInfo, tutorials,
});
