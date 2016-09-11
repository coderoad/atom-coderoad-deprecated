import { readFileSync } from 'fs';

/**
 * read files from paths and concat a data file together
 * save the test data file to the test runner .tmp directory
 * @param  {} {dir
 * @param  {} tasks
 * @param  {} load
 * @param  {} testFile}
 */
export default function loadTaskTests({dir, tasks, load, testFile}) {
  
  // first read files from paths and concat data together

  // map over task tests from coderoad.json
  const tests = [].concat.apply([], tasks.map(
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
  

  // save the file
  load({dir, tests, testFile});
}
