import {combineReducers} from 'redux';

// module reducers
import {reducer as hintPosition} from './modules/hints';
import {pagePosition, taskActions, taskTests} from './modules/page';
import {reducer as progress} from './modules/progress';
import {checks, packageJson} from './modules/setup';
import {testRun, taskPosition} from './modules/tests';
import {reducer as tutorial} from './modules/tutorial';
import {reducer as tutorials} from './modules/tutorials';

import {
  alertReducer as alert,
  editorReducer as editor,
  dirReducer as dir,
  routeReducer as route,
  windowToggle
} from 'core-coderoad';

export default combineReducers({
  alert, checks, editor, dir, hintPosition,
  packageJson, pagePosition, progress, route,
  tutorial, tutorials,
  taskActions, taskPosition, taskTests, testRun, windowToggle
});
