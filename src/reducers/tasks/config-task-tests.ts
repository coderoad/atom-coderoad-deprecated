import {join} from 'path';
import {isWindows} from '../../services/system';

function configTestString(
  dir: string, tutorial: CR.Tutorial, config: Tutorial.Config,
  name: string, testPath: string
): string {

  if (isWindows) {
    testPath = testPath.split('/').join('\\');
  }

  if (tutorial && tutorial.config.dir) {
    testPath = join(tutorial.config.dir, testPath);
  } else {
    testPath = join(dir, 'node_modules', name, testPath);
  }

  if (tutorial.config.testSuffix) {
    testPath += tutorial.config.testSuffix;
  }
  return testPath;
}

export default function configTaskTests(
  dir: string, tutorial: CR.Tutorial, tasks: CR.Task[]
): CR.Task[] {
  const {config, name} = tutorial;
  return !tasks ? [] : tasks.map((task: CR.Task) => {
    if (task.tests) {
      task.tests = task.tests.map((testPath: string) => {
        // add unique string to tests
        if (typeof testPath === 'string') {
          return configTestString(dir, tutorial, config, name, testPath);
        } else {
          console.error('Invalid task test', testPath);
        }
      });
    }
    return task;
  });
}
