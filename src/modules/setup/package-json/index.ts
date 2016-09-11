import { readFileSync } from 'fs';
import { join } from 'path';

import { SETUP_PACKAGE } from '../types';
import fileExists from 'node-file-exists';

/** 
 * read a file and return contents as JSON
 */
const readParse = p => JSON.parse(readFileSync(p, 'utf8'));

/**
 * package.json reducer
 * @param  {} pj=null
 * @param  {Action} action
 * @returns PackageJson
 */
export default function packageJson(
  pj = null, action: Action
): PackageJson|null {
  switch (action.type) {

    case SETUP_PACKAGE:
      const pathToPackageJson = join(action.payload.dir, 'package.json');
      return fileExists(pathToPackageJson)
        ? readParse(pathToPackageJson)
        : null;

    default:
      return pj;
  }
}
