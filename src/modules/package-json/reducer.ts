import {readPackageJson} from './utils/packageJson';

const _pj = null;

export default function packageJson(
  p = _pj, action: Action
): Tutorial.PJ {
  switch (action.type) {

    default:
      return p;
  }
}
