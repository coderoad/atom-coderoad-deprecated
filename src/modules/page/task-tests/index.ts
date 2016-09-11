import {readFileSync} from 'fs';

import {PAGE_SET} from '../types';

/**
 * task test reducer
 * @param  {} taskTests=''
 * @param  {Action} action
 * @returns string
 */
export default function taskTestsReducer(
  taskTests = '', action: Action
): string {
  switch (action.type) {

    case PAGE_SET:
      const {tasks} = action.payload;
      
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
        // return concatenated test files
        return output;
      }, '');

    default:
      return taskTests;
  }
}
