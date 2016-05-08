import {handleResult} from './test-result';
import {writeFileSync} from 'fs';
import {join} from 'path';
import parseLoaders from './parse-loaders';

export default function runTaskTests(
  taskTests: string, dir: string, tutorial: CR.Tutorial, taskPosition: number
): boolean {
  const tests: string = taskTests;

  if (tests && tests.length) {
    const tutorialConfig: Tutorial.Config = tutorial.config;
    const output = parseLoaders(
      tests, tutorialConfig.testSuffix, tutorial, dir
    );

    // write temporary test file in tutorial directory
    let target = join(
      tutorialConfig.dir || dir,
      `.tmp${tutorialConfig.testSuffix}`
    );
    writeFileSync(target, output, 'utf8');

    const config: Test.Config = {
      dir,
      tutorialDir: tutorialConfig.dir,
      taskPosition
    };

    // call test runner
    tutorialConfig.run(target, config, handleResult);
  }
  return true;
}
