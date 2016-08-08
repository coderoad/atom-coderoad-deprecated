import {join} from 'path';

import handleResult from './handle-result';
import parseLoaders from './parse-loaders';

export default function runTaskTests({
  taskTests, dir, tutorial, taskPosition, testFile
}): number {

  if (taskTests && taskTests.length) {
    // const tutorialConfig: Tutorial.Config = tutorial.config;
    // const testString = parseLoaders(
    //   tests, tutorialConfig.testSuffix, tutorial, dir
    // );
    //
    // const config: Test.Config = {
    //   dir,
    //   tutorialDir: tutorialConfig.dir,
    //   taskPosition
    // };

    // call test runner
    tutorial.config.run({dir, taskPosition, handleResult, testFile});
  }
  // return finishing time of test
  // used to throttle test runs
  return performance.now();
}
