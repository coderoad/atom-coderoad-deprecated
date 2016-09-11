import {combineReducers} from 'redux';

// module reducers
import {default as alert} from './modules/alert';
import {default as dir} from './modules/dir';
import {reducer as editor} from './modules/editor';
import {default as hintPosition} from './modules/hints';
import {pagePosition, taskActions} from './modules/page';
import {reducer as progress} from './modules/progress';
import {reducer as route} from './modules/route';
import {checks, packageJson} from './modules/setup';
import {taskPosition, testRun} from './modules/tests';
import {reducer as tutorial} from './modules/tutorial';
import {reducer as tutorials} from './modules/tutorials';
import {reducer as window} from './modules/window';

export default combineReducers({
  alert, checks, editor, dir, hintPosition,
  packageJson, pagePosition, progress, route,
  tutorial, tutorials,
  taskActions, taskPosition, testRun, window
});
