import handleResult from './handle-result';

export default function runTaskTests({
  taskTests, dir, tutorial, taskPosition, testFile
}): number {

  if (taskTests && taskTests.length) {
    // call test runner
    tutorial.config.run({dir, taskPosition, handleResult, testFile});
  }
  // return finishing time of test
  // used to throttle test runs
  return performance.now();
}
