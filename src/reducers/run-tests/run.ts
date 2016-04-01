import {handleResult} from './test-result';
import {store} from '../../_base';
import * as fs from 'fs';
import * as path from 'path';
import parseLoaders from './parse-loaders';

// TODO: use memcache for test files instead of read/writes

export function runTaskTests(setup?: boolean): boolean {
  const testFile: string = store.getState().taskTests;

  if (testFile) {
    let config = window.coderoad;
    config.taskPosition = store.getState().taskPosition;

    let fileType: string = testFile.substr(testFile.lastIndexOf('.') + 1, testFile.length) || null;
    let tests = fs.readFileSync(testFile, 'utf8');
    let output = parseLoaders(tests, fileType);

    let target = path.join(window.coderoad.tutorialDir || window.coderoad.dir, `_tmp${window.coderoad.suffix}`);
    fs.writeFileSync(target, output, 'utf8');

    // call test runner
    window.coderoad.runner(target, config, handleResult);
  }
  return true;
}
