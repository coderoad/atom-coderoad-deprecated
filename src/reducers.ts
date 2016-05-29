import {combineReducers} from 'redux';

// module reducers
import {reducer as hintPosition} from './modules/hints';
import {page, pagePosition, tasks, taskActions, taskTests} from './modules/page';
import {reducer as progress} from './modules/progress';
import {testRun, taskPosition} from './modules/tests';

import {reducer as alert} from 'core-coderoad/lib/alert';
import {reducer as editor, dir} from 'core-coderoad/lib/editor';
import {reducer as route} from 'core-coderoad/lib/route';
import {checks, packageJson} from 'core-coderoad/lib/setup';
import {reducer as tutorial} from 'core-coderoad/lib/tutorial';
import {reducer as tutorials} from 'core-coderoad/lib/tutorials';
import {reducer as windowToggle} from 'core-coderoad/lib/window';

export default combineReducers({
  alert, checks, editor, dir, hintPosition,
  packageJson, page, pagePosition, progress, route, tasks,
  tutorial, tutorials,
  taskActions, taskPosition, taskTests, testRun, windowToggle
});
