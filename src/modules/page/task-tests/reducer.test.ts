/// <reference path="../../../typings/globals/jest/index.d.ts" />

import reducer from './index';

describe('task tests reducer', () => {

  it('does nothing if no known action', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toBe('');
  });

  // it('handles PAGE_SET', () => {
  //   const tutorial = {};
  //   const tasks = [];
  // });

});