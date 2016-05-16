import {combineReducers} from 'redux';

// reducers
import devToolsToggle from './devTools-toggle';
import dir from './dir';
import packageJson from './package-json';
import page from './page';
import pagePosition from './page-position';
import progress from './progress';
import tasks from './tasks';
import taskActions from './task-actions';
import taskTests from './task-tests';
import tutorial from './tutorial';
import tutorialList from './tutorial-list';

// module reducers
import {reducer as alert} from '../modules/alert';
import {reducer as checks} from '../modules/setup';
import {reducer as hintPosition} from '../modules/hints';
import {reducer as route} from '../modules/route';
import {testRun, taskPosition} from '../modules/tests';
import {reducer as windowToggle} from '../modules/window';

export default combineReducers({
  alert, checks, devToolsToggle, dir, hintPosition,
  packageJson, page, pagePosition, progress, route, tasks,
  tutorial, tutorialList,
  taskActions, taskPosition, taskTests, testRun, windowToggle
});
