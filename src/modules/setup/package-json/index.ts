import { readFileSync } from 'fs';
import { resolve } from 'path';

import { SETUP_PACKAGE } from '../types';
import fileExists from 'node-file-exists';

const readParse = p => JSON.parse(readFileSync(p, 'utf8'));

export default function packageJson(
  pj = null, action: Action
): PackageJson {
  switch (action.type) {

    case SETUP_PACKAGE:
      const pathToPackageJson = resolve(action.payload.dir, 'package.json');
      return fileExists(pathToPackageJson)
        ? readParse(pathToPackageJson)
        : null;

    default:
      return pj;
  }
}
