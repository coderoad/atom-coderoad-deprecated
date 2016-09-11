/// <reference path="../../typings/globals/jest/index.d.ts" />

import reducer, { _progress } from './reducer';

describe('progress reducer', () => {

  it('should do nothing if no action is triggered', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toEqual(_progress);
  });

});