/// <reference path="../../typings/globals/jest/index.d.ts" />

import reducer from './index';
import { HINT_POSITION_SET } from './types';

describe('hint reducer', () => {

  it('should do nothing if no triggered action type', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toBe(0);
  });

  it('should handle HINT_POSITION_SET', () => {
    const hintPosition = 2;
    const action = { type: HINT_POSITION_SET, payload: { hintPosition } };
    expect(reducer(0, action)).toBe(hintPosition);
  });

});