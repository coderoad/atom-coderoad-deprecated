import {join} from 'path';

import handleResult from './handle-result';
import parseLoaders from './parse-loaders';

export default function runTaskTests(
  taskTests: string, dir: string, tutorial: CR.Tutorial, taskPosition: number
): boolean {
  const tests: string = taskTests;

  if (tests && tests.length) {
    const tutorialConfig: Tutorial.Config = tutorial.config;
    const testString = parseLoaders(
      tests, tutorialConfig.testSuffix, tutorial, dir
    );

    const config: Test.Config = {
      dir,
      tutorialDir: tutorialConfig.dir,
      taskPosition
    };

    // call test runner
    tutorialConfig.run({testString, config, handleResult});
  }
  return true;
}
