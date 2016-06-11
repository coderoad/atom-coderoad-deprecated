import {combineReducers} from 'redux';

// module reducers
import {reducer as hintPosition} from './modules/hints';
import {pagePosition, taskActions, taskTests} from './modules/page';
import {reducer as progress} from './modules/progress';
import {checks, packageJson} from './modules/setup';
import {testRun, taskPosition} from './modules/tests';
import {reducer as tutorial} from './modules/tutorial';
import {reducer as tutorials} from './modules/tutorials';

import {reducer as alert} from 'core-coderoad/lib/alert';
import {reducer as editor, dir} from 'core-coderoad/lib/editor';
import {reducer as route} from 'core-coderoad/lib/route';
import {reducer as windowToggle} from 'core-coderoad/lib/window';

export default combineReducers({
  alert, checks, editor, dir, hintPosition,
  packageJson, pagePosition, progress, route,
  tutorial, tutorials,
  taskActions, taskPosition, taskTests, testRun, windowToggle
});
