import {join} from 'path';
import {isWindows} from './system';

function configTestString(
  dir: string, name: string, config: Tutorial.Config, testPath: string
): string {

  if (isWindows) {
    // adjust paths for windows slashes
    testPath = testPath.split('/').join('\\');
  }

  // adjust absolute file path
  if (config.dir) {
    testPath = join(config.dir, testPath);
  } else {
    testPath = join(dir, 'node_modules', name, testPath);
  }

  if (config.testSuffix) {
    // prevent repeat appending test suffix
    testPath += config.testSuffix;
  }

  return testPath;
}

export default function configPaths(
  dir: string, name: string, config: Tutorial.Config, pages: CR.Page[]
): CR.Page[] {
  return pages.map((page: CR.Page): CR.Page => {
    if (!page.tasks) {
      page.tasks = [];
    }
    page.tasks.map((task: CR.Task): CR.Task => {
      // change testPaths to use absolute URLs
      task.tests = task.tests.map((testPath: string) => {
        // add unique string to tests
        if (typeof testPath === 'string') {
          return configTestString(dir, name, config, testPath);
        } else {
          console.error('Invalid task test', testPath);
        }
      });
      return task;
    });
    return page;
  });
}
