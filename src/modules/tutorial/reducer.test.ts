/// <reference path="../../typings/globals/jest/index.d.ts" />

import reducer, { _tutorial } from './index';

describe('tutorial reducer', () => {

  it('does nothing if no change', () => {
    const action = { type: 'unknown' };
    expect(reducer(undefined, action)).toEqual(_tutorial);
  });

  xit('sets a tutorial with TUTORIAL_SET', () => {
    const payload = {
      name: 'coderoad-tutorial-name',
      version: '0.1.0',
      dir: 'path/to/file',
    };
    const action = { type: 'TUTORIAL_SET', payload };
    const expected = {}
    expect(reducer(undefined, action)).toEqual(expected);
  });

});