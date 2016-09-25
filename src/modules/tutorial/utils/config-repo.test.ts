/// <reference path="../../../typings/globals/jest/index.d.ts" />

import {configIssuesPath, configRepo} from './config-repo';

describe('config functions:', () => {

  it('configRepo should capture a repo name', () => {
    const url = 'path/to/repo'; 
    const repo = {
      url 
    };
    expect(configRepo(repo)).toBe(url);
  });

  it('configIssuesPath should capture an issues path', () => {
    const url = 'path/to/issues';
    const bugs = {
      url
    };
    expect(configIssuesPath(bugs)).toBe(url);
  });

});