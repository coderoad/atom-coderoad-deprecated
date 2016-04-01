import * as path from 'path';
import * as fs from 'fs';
import * as Type from '../../actions/actionTypes';
import concatTests from './concat-tests';

export default function taskTestsReducer(taskTests = '', action: CR.Action): string {
  switch (action.type) {
    case Type.SET_PAGE:
      let tests = '';
      action.payload.taskTests.forEach(function(file: string) {
        try {
          let data = fs.readFileSync(file, 'utf8');
          tests += data + '\n';
        } catch (e) {
          console.log('Error reading test file', e);
        }
      });
      return tests;
    default:
      return taskTests;
  }
}
