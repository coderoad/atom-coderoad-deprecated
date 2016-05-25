import {join} from 'path';
import parseLoaders from './parse-loaders';
import handleResult from './handle-result';

export default function runTaskTests(
  taskTests: string, dir: string, tutorial: CR.Tutorial, taskPosition: number
): boolean {
  const tests: string = taskTests;

  if (tests && tests.length) {
    const tutorialConfig: Tutorial.Config = tutorial.config;
    const output = parseLoaders(
      tests, tutorialConfig.testSuffix, tutorial, dir
    );

    const config: Test.Config = {
      dir,
      tutorialDir: tutorialConfig.dir,
      taskPosition
    };

    // call test runner
    tutorialConfig.run(output, config, handleResult);
  }
  return true;
}
