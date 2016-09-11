import {TEST_COMPLETE, TEST_LOAD, TEST_RUN} from '../types';
import loadTaskTests from './load';
import runTaskTests from './run';

// timeouts = throttle test runs
const pageSetTimeout = 300;
const testCompleteTimeout = 700;

interface IRunTest {
  running: boolean;
  time: number;
}

const defaultTestRun: IRunTest = {
  running: false,
  time: performance.now(),
};

/**
 * runs unit tests
 * @param  {} testRun=defaultTestRun
 * @param  {Action} action
 * @returns IRunTest
 */
export default function runTest(
  testRun = defaultTestRun, action: Action
): IRunTest {
  switch (action.type) {

    case TEST_LOAD:
      loadTaskTests(action.payload);
      // add extra time, as page loading takes longer
      return {
        running: false,
        time: performance.now() + pageSetTimeout,
      };

    case TEST_RUN:
      // call test runner
      return {
        running: true,
        time: runTaskTests(action.payload),
      };

    case TEST_COMPLETE:
      return {
        running: false,
        time: performance.now() + testCompleteTimeout,
      };

    default:
      return testRun;
  }
}
