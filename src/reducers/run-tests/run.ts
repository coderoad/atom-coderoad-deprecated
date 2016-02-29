import {handleResult, handleLog} from './test-result';
import {store} from '../../_base';

export function runTaskTests(setup?: boolean): boolean {
  const tests: CR.TaskTest[] = store.getState().taskTests;
  if (tests && tests.length) {
    let config = global.coderoad;
    config.taskPosition = store.getState().taskPosition;
    // call test runner
    global.coderoad.runner(tests, config, handleResult, handleLog);
  }
  return true;
}
