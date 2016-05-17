import {readFileSync} from 'fs';
import {PAGE_SET} from '../types';

export default function taskTestsReducer(
  taskTests = '', action: Action
): string {
  switch (action.type) {

    case PAGE_SET:
      const {tutorial, tasks} = action.payload;
      return [].concat.apply([], tasks.map(
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
