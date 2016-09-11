/// <reference path="../../../typings/globals/jest/index.d.ts" />

import reducer, { _checks } from './index';

describe('checks reducer', () => {

  it('does nothing if no action received', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toEqual(_checks);
  });

});