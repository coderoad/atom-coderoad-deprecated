import {readFileSync} from 'fs';

import {PAGE_SET} from '../types';

export default function taskTestsReducer(
  taskTests = '', action: Action
): string {
  switch (action.type) {

    case PAGE_SET:
      const {tutorial, tasks} = action.payload;
      // map over task tests from coderoad.json
      return [].concat.apply([], tasks.map(
          task => task.tests || []
        )
      // concat test files together
      ).reduce((output: string, file: string): string => {
        try {
          output += readFileSync(file, 'utf8') + '\n';
        } catch (e) {
          console.log('Error reading test file', e);
        }
        // return concatted test files
        return output;
      }, '');

    default:
      return taskTests;
  }
}
