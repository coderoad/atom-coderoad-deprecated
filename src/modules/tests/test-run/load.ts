import configPath from './config-path';
import { readFileSync } from 'fs';

/**
 * read files from paths and concat a data file together
 * save the test data file to the test runner .tmp directory
 * @param  {} {dir
 * @param  {} tasks
 * @param  {} load
 * @param  {} testFile}
 */
export default function loadTaskTests({dir, tasks, tutorial, testFile}) {
  
  // first read files from paths and concat data together

  // map over task tests from coderoad.json
  const tests = [].concat.apply([], tasks.map(
      task => task.tests || []
    )
  // concat test files together
  ).reduce((output: string, file: string): string => {
    try {
      const absoluteFilePath = configPath({
        dir,
        tutorial,
        testPath: file,
      });
      output += readFileSync(absoluteFilePath, 'utf8') + '\n';
    } catch (e) {
      console.log('Error reading test file', e);
    }
    // return concatenated test files
    return output;
  }, '');
  

  // save the file
  tutorial.config.load({dir, tests, testFile});
}
