import {combineReducers} from 'redux';

import alert from './alert';
import checks from './checks';
import devToolsToggle from './devTools-toggle';
import dir from './dir';
import taskActions from './task-actions';
import hintPosition from './hint-position';
import packageJson from './package-json';
import page from './page';
import pagePosition from './page-position';
import progress from './progress';
import route from './route';
import taskPosition from './task-position';
import taskTests from './task-tests';
import tasks from './tasks';
import testRun from './test-run';
import tutorial from './tutorial';
import tutorialList from './tutorial-list';
import windowToggle from './window-toggle';

export default combineReducers({
  alert, checks, dir, devToolsToggle, taskActions, hintPosition, page,
  packageJson, pagePosition, progress, route, taskPosition,
  taskTests, tasks, testRun, tutorial, tutorialList, windowToggle
});
