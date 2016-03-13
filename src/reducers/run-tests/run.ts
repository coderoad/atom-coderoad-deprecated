import {handleResult} from './test-result';
import {store} from '../../_base';

export function runTaskTests(setup?: boolean): boolean {
  const tests: CR.TaskTest[] = store.getState().taskTests;
  if (tests && tests.length) {
    let config = window.coderoad;
    config.taskPosition = store.getState().taskPosition;
    // call test runner
    window.coderoad.runner(tests, config, handleResult);
  }
  return true;
}
