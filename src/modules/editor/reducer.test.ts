/// <reference path="../../typings/globals/jest/index.d.ts" />

import reducer from './reducer';
import * as types from './types';

describe('editor reducer', () => {

  it('does nothing if action types do not match', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toBe('atom');
  });

});