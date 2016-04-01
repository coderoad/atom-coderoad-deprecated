'use strict';
import * as path from 'path';
import * as Type from '../../actions/actionTypes';
import load from './loader';

export default function taskTestsReducer(taskTests = '', action: CR.Action): string {
  switch (action.type) {
    case Type.SET_PAGE:
      let target = path.join(window.coderoad.tutorialDir || window.coderoad.dir, `_tmpTests${window.coderoad.suffix}`);
      load(target, action.payload.taskTests);
      return target;
    default:
      return taskTests;
  }
}
