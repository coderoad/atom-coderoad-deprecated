import {readFileSync} from 'fs';
import {TESTS_LOAD} from '../../actions/_types';
import store from '../../store';

export default function taskTestsReducer(
  taskTests = '', action: Action
): string {
  switch (action.type) {
    case TESTS_LOAD:
      return [].concat.apply([], store.getState().tasks.map(
        task => task.tests || [])
      ).reduce((output: string, file: string): string => {
        try {
          output += readFileSync(file, 'utf8') + '\n';
        } catch (e) {
          console.log('Error reading test file', e);
        }
        return output;
      }, '');
    default:
      return taskTests;
  }
}
