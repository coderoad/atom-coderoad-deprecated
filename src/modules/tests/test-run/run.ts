import handleResult from './handle-result';

/**
 * call test runner
 * @param  {} {hasTasks
 * @param  {} dir
 * @param  {} tutorial
 * @param  {} taskPosition
 * @param  {} testFile}
 * @returns number
 */
export default function runTaskTests({
  hasTasks, dir, tutorial, taskPosition, testFile
}): number {

  if (hasTasks) {
    // call test runner
    tutorial.config.run({dir, taskPosition, handleResult, testFile});
  }
  // return finishing time of test
  // used to throttle test runs
  return performance.now();
}
