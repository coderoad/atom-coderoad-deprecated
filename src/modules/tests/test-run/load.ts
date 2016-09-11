import { readFileSync } from 'fs';

export default function loadTaskTests({dir, tasks, load, testFile}) {
  
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
  
  load({dir, tests, testFile});
}
