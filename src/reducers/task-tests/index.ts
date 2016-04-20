import {readFileSync} from 'fs';
import {TESTS_LOAD} from '../../actions/_types';
import {store} from '../../store';

export default function taskTestsReducer(taskTests = '',
  action: Action): string {
  switch (action.type) {
    case TESTS_LOAD:
      const tasks = store.getState().tasks;
      let tests: string[] = [].concat.apply([], tasks.map(
          task => task.tests || [])
      );
      let output = '';
      tests.forEach(function(file: string): void {
        try {
          let data = readFileSync(file, 'utf8');
          output += data + '\n';
        } catch (e) {
          console.log('Error reading test file', e);
        }
      });
      return output;
    default:
      return taskTests;
  }
}
