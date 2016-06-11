import {PJ_SAVE} from './types';
import {readPackageJson, writePackageJson} from './utils/packageJson';
import {sortPackageJson} from 'sort-package-json';

const _pj = null;

export default function packageJson(
  p = _pj, action: Action
): Tutorial.PJ {
  switch (action.type) {

    default:
      return p;
  }
}
