import {join} from 'path';
import store from '../../store';
import {isWindows} from '../../services/system';

function configTestString(config: Tutorial.Config, name: string, testPath: string): string {

  if (isWindows) {
    testPath = testPath.split('/').join('\\');
  }

  const tutorial: CR.Tutorial = store.getState().tutorial;
  if (tutorial && tutorial.config.dir) {
    testPath = join(tutorial.config.dir, testPath);
  } else {
    const dir = store.getState().dir;
    testPath = join(dir, 'node_modules', name, testPath);
  }

  if (tutorial.config.testSuffix) {
    testPath += tutorial.config.testSuffix;
  }
  return testPath;
}

export function configTaskTests(tasks: CR.Task[]): CR.Task[] {
  const {config, name} = store.getState().tutorial;
  return !tasks ? [] : tasks.map((task: CR.Task) => {
    if (task.tests) {
      task.tests = task.tests.map((testPath: string) => {
        // add unique string to tests
        if (typeof testPath === 'string') {
          return configTestString(config, name, testPath);
        } else {
          console.error('Invalid task test', testPath);
        }
      });
    }
    return task;
  });
}
