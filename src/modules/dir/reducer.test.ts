/// <reference path="../../typings/globals/jest/index.d.ts" />
/// <reference path="../../typings/common/global.d.ts" />

import dir from './index';
import {atomPath} from '../../__tests__/mocks/atom';

describe('dir reducer', () => {

  afterEach(() => {
    global.atom = null;
  });

  it('should return the project directory in Atom', () => {
    const pathToDir = './path/to/dir'; 
    global.atom = atomPath(pathToDir);
    expect(dir('')).toBe(pathToDir);
  });

  it('should throw an error if no project directory is found', () => {
    expect(() => dir('')).toThrowError(/No project directory/);
  });

});