import {store} from '../_base';
import * as Action from './actions';
import * as path from 'path';
import * as fs from 'fs';
import * as Type from './actionTypes';
import {fileExists} from '../services/exists';
import {loadRootPackageJson, searchForTutorials} from '../services/tutorials';

export function loadTutorials(): CR.Action {
  let tutorials = [];
  let packageJson: PackageJson = loadRootPackageJson();
  if (window.coderoad.dir && !!packageJson) {
    tutorials = []
      .concat(searchForTutorials(packageJson.dependencies))
      .concat(searchForTutorials(packageJson.devDependencies));
  }
  return { type: Type.LOAD_TUTORIALS, payload: { tutorials } };
}
