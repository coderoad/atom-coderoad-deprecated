/// <reference path="../../../typings/globals/jest/index.d.ts" />

import reducer from './index';
import { PAGE_SET } from '../types';

describe('page position reducer', () => {

  it('does nothing if no known action', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toBe(0);
  });

  it('handles PAGE_SET', () => {
    const pagePosition = 2;
    const action = { type: PAGE_SET, payload: { pagePosition } };
    expect(reducer(0, action)).toBe(pagePosition);
  });

  it('handles PROGRESS_PAGE_POSITION', () => {
    const progress = {
      pages: [true, true, true, false, false]
    };
    const action = { type: 'PROGRESS_PAGE_POSITION', payload: { progress } };
    expect(reducer(0, action)).toBe(3);
  });

});
