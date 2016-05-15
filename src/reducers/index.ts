import {combineReducers} from 'redux';

import {reducer as alert} from '../modules/alert';
import {reducer as windowToggle} from '../modules/window';
import checks from './checks';
import devToolsToggle from './devTools-toggle';
import dir from './dir';
import hintPosition from './hint-position';
import packageJson from './package-json';
import page from './page';
import pagePosition from './page-position';
import progress from './progress';
import route from './route';
import tasks from './tasks';
import taskActions from './task-actions';
import taskPosition from './task-position';
import taskTests from './task-tests';
import testRun from './test-run';
import tutorial from './tutorial';
import tutorialList from './tutorial-list';

export default combineReducers({
  alert, checks, devToolsToggle, dir, hintPosition,
  packageJson, page, pagePosition, progress, route, tasks,
  tutorial, tutorialList,
  taskActions, taskPosition, taskTests, testRun, windowToggle
});
