import {handleResult} from './test-result';
import store from '../../store';
import {writeFileSync} from 'fs';
import {join} from 'path';
import parseLoaders from './parse-loaders';

export function runTaskTests(setup?: boolean): boolean {
  const tests: string = store.getState().taskTests;

  if (tests && tests.length) {
    const dir = store.getState().dir;
    const tutorialConfig: Tutorial.Config = store.getState().tutorial.config;
    const output = parseLoaders(tests, tutorialConfig.testSuffix);

    // write temporary test file in tutorial directory
    let target = join(
      tutorialConfig.dir || dir,
      `_tmp${tutorialConfig.testSuffix}`
    );
    writeFileSync(target, output, 'utf8');

    const config: Test.Config = {
      dir,
      tutorialDir: tutorialConfig.dir,
      taskPosition: store.getState().taskPosition
    };

    // call test runner
    tutorialConfig.run(target, config, handleResult);
  }
  return true;
}
