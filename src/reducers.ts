import {combineReducers} from 'redux';

// module reducers
import {reducer as alert} from './modules/alert';
import {checks, packageJson} from './modules/setup';
import {reducer as hintPosition} from './modules/hints';
import {page, pagePosition, tasks, taskActions, taskTests} from './modules/page';
import {reducer as progress} from './modules/progress';
import {reducer as route} from 'core-coderoad/lib/route';
import {testRun, taskPosition} from './modules/tests';
import {reducer as tutorial} from './modules/tutorial';
import {reducer as tutorials} from './modules/tutorials';
import {reducer as windowToggle} from 'core-coderoad/lib/window';
import {editor, dir} from './modules/editor';

export default combineReducers({
  alert, checks, editor, dir, hintPosition,
  packageJson, page, pagePosition, progress, route, tasks,
  tutorial, tutorials,
  taskActions, taskPosition, taskTests, testRun, windowToggle
});
