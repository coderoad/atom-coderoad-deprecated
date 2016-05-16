import {combineReducers} from 'redux';

// reducers
import packageJson from './package-json';
import page from './page';
import pagePosition from './page-position';
import progress from './progress';
import tasks from './tasks';
import taskActions from './task-actions';
import taskTests from './task-tests';

// module reducers
import {reducer as alert} from '../modules/alert';
import {reducer as checks} from '../modules/setup';
import {reducer as hintPosition} from '../modules/hints';
import {reducer as route} from '../modules/route';
import {testRun, taskPosition} from '../modules/tests';
import {reducer as tutorial} from '../modules/tutorial';
import {reducer as tutorials} from '../modules/tutorials';
import {reducer as windowToggle} from '../modules/window';
import {dir, editor} from '../modules/editor';

export default combineReducers({
  alert, checks, editor, dir, hintPosition,
  packageJson, page, pagePosition, progress, route, tasks,
  tutorial, tutorials,
  taskActions, taskPosition, taskTests, testRun, windowToggle
});
