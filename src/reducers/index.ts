import {combineReducers} from 'redux';

// reducers
import checks from './checks';
import devToolsToggle from './devTools-toggle';
import dir from './dir';
import hintPosition from './hint-position';
import packageJson from './package-json';
import page from './page';
import pagePosition from './page-position';
import progress from './progress';
import tasks from './tasks';
import taskActions from './task-actions';
import taskPosition from './task-position';
import taskTests from './task-tests';
import testRun from './test-run';
import tutorial from './tutorial';
import tutorialList from './tutorial-list';

// module reducers
import {reducer as alert} from '../modules/alert';
import {reducer as windowToggle} from '../modules/window';
import {reducer as route} from '../modules/route';

export default combineReducers({
  alert, checks, devToolsToggle, dir, hintPosition,
  packageJson, page, pagePosition, progress, route, tasks,
  tutorial, tutorialList,
  taskActions, taskPosition, taskTests, testRun, windowToggle
});
