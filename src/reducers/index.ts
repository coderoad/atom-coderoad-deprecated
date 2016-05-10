import {combineReducers} from 'redux';
import {reducers} from 'coderoad-core';

import checks from './checks';
import devToolsToggle from './devTools-toggle';
import dir from './dir';
import hintPosition from './hint-position';
import progress from './progress';
import taskActions from './task-actions';
import taskPosition from './task-position';
import taskTests from './task-tests';
import testRun from './test-run';
import windowToggle from './window-toggle';

export default combineReducers(
  Object.assign({}, {
    checks, devToolsToggle, dir, hintPosition, progress,
    taskActions, taskPosition, taskTests, testRun, windowToggle
  }, reducers)
);
