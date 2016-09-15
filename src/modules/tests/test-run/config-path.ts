import {join} from 'path';

import {isWindows} from '../../../utils/system';

/**
 * set paths to tests as absolute paths 
 * @param  {string} dir
 * @param  {string} name
 * @param  {Tutorial.Config} config
 * @param  {string} testPath
 * @returns string
 */
export default function configPath({
  dir, tutorial, testPath
}): string {

  if (isWindows) {
    // adjust paths for windows slashes
    testPath = testPath.split('/').join('\\');
  }

  // adjust absolute file path
  if (tutorial.config.dir) {
    testPath = join(tutorial.config.dir, testPath);
  } else {
    testPath = join(dir, 'node_modules', tutorial.name, testPath);
  }

  if (tutorial.config.testSuffix) {
    // prevent repeat appending test suffix
    testPath += tutorial.config.testSuffix;
  }

  return testPath;
}
/**
 * loops over task tests and set paths to absolute paths
 * @param  {string} dir
 * @param  {string} name
 * @param  {Tutorial.Config} config
 * @param  {CR.Page[]} pages
 * @returns CR
 */
// export default function configPaths(
//   dir: string, name: string, config: Tutorial.Config, pages: CR.Page[]
// ): CR.Page[] {
//   return pages.map((page: CR.Page): CR.Page => {
//     if (!page.tasks) {
//       page.tasks = [];
//     }
//     page.tasks.map((task: CR.Task): CR.Task => {

//       if (!task.tests) { return task; }
      
//       // change testPaths to use absolute URLs
//       task.tests = task.tests.map((testPath: string) => {
//         // add unique string to tests
//         if (typeof testPath === 'string') {
//           return configTestString(dir, name, config, testPath);
//         } else {
//           console.error('Invalid task test', testPath);
//           return 'ERROR';
//         }
//       });
//       return task;
//     });
//     return page;
//   });
// }
