import {readFileSync} from 'fs';
import {PAGE_SET} from '../../actions/_types';

export default function taskTestsReducer(taskTests = '',
  action: CR.Action): string {
  switch (action.type) {
    case PAGE_SET:
      let tests = '';
      action.payload.taskTests.forEach(function(file: string) {
        try {
          let data = readFileSync(file, 'utf8');
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
