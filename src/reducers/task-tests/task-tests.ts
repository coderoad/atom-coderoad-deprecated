import * as path from 'path';
import * as fs from 'fs';
import * as Type from '../../actions/actionTypes';
import concatTests from './concat-tests';

export default function taskTestsReducer(taskTests = '', action: CR.Action): string {
  switch (action.type) {
    case Type.SET_PAGE:
      let target = path.join(window.coderoad.tutorialDir || window.coderoad.dir, `_tmpTests${window.coderoad.suffix}`);
      concatTests(target, action.payload.taskTests);
      return target;
    default:
      return taskTests;
  }
}
