import {TEST_COMPLETE, TEST_RUN} from '../types';
import runTaskTests from './run';

interface IRunTest {
  running: boolean;
  time: number;
}

const defaultTestRun: IRunTest = {
  running: false,
  time: performance.now(),
};

export default function runTest(
  testRun = defaultTestRun, action: Action
): IRunTest {
  switch (action.type) {

    case TEST_RUN:
      const {taskTests, dir, tutorial, taskPosition} = action.payload;
      // call test runner
      return {
        running: true,
        time: runTaskTests(taskTests, dir, tutorial, taskPosition),
      };

    case TEST_COMPLETE:
      return {
        running: false,
        time: performance.now() + 800,
      };

    case 'PAGE_SET':
      // add extra time, as page loading takes longer
      return {
        running: false,
        time: performance.now() + 2000,
      };

    default:
      return testRun;
  }
}
