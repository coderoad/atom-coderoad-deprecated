/// <reference path="../../../typings/globals/jest/index.d.ts" />

import reducer from './index';

describe('task position reducer', () => {

  it('should do nothing if no triggered action type', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toBe(0);
  });

  it('should reset to 0 on PAGE_SET', () => {
    const action = { type: 'PAGE_SET' };
    expect(reducer(2, action)).toBe(0);
  });

  it('should set the task position on TEST_RESULT', () => {
    const action = { type: 'TEST_RESULT', payload: { result: { taskPosition: 3 } } };
    expect(reducer(1, action)).toBe(3);
  });

});
