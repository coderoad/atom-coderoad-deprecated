import {handleResult} from './test-result';
import {store} from '../../store';
import {writeFileSync} from 'fs';
import {join} from 'path';
import parseLoaders from './parse-loaders';

export function runTaskTests(setup?: boolean): boolean {
  const tests: string = store.getState().taskTests;

  if (tests && tests.length) {
    let config = window.coderoad;
    config.taskPosition = store.getState().taskPosition;
    let output = parseLoaders(tests, window.coderoad.suffix);

    // write temporary test file in tutorial directory
    let target = join(window.coderoad.tutorialDir || window.coderoad.dir, `_tmp.${window.coderoad.suffix}`);
    writeFileSync(target, output, 'utf8');

    // call test runner
    window.coderoad.runner(target, config, handleResult);
  }
  return true;
}
