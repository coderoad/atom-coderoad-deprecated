/// <reference path="../../../typings/globals/jest/index.d.ts" />
/// <reference path="../../../typings/common/global.d.ts" />

import { getLocalStorageKey, saveToLocalStorage, loadProgressFromLocalStorage } from './local-storage';

describe('local storage function', () => {

  const tutorial = {
    name: 'example'
  };

  afterEach(() => {
    global.window = null;
  })

  it('getLocalStorage creates a key based on the tutorial name', () => {
    const tutorial = {
      name: 'example'
    };
    expect(getLocalStorageKey(tutorial)).toBe('coderoad:example');
  });

  it('saveToLocalStorage saves tutorial progress', () => {
    global.window.localStorage = {
        setItem: jest.fn() 
    };
    const progress = [true, true, false];
    saveToLocalStorage(tutorial, progress);
    expect(global.window.localStorage.setItem).toBeCalledWith('coderoad:example', JSON.stringify(progress));
  });

  it('saveToLocalStorage should throw an error if progress is invalid', () => {
    global.window.localStorage = {
        setItem: jest.fn() 
    };
    const progress = 'invalid';
    expect(saveToLocalStorage(tutorial, progress)).toThrowError();
  });

  it('loadProgressFromLocalStorage should load saved progress', () => {
    const progress = [true, true, false];
    global.window.localStorage = {
        getItem: key => JSON.stringify({ "completed": false, "pages": progress })
    };
    expect(loadProgressFromLocalStorage(tutorial)).toEqual({ "completed": false, "pages": progress });
  });

  it('loadProgressFromLocalStorage should return null if no progress saved', () => {
    const progress = null;
    global.window.localStorage = {
        getItem: key => null
    };
    expect(loadProgressFromLocalStorage(tutorial)).toEqual(null);
  });

});