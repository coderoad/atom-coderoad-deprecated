import {GLOBALS_SET} from './_types';

export function globalsSet(packageJson: PackageJson): CR.Action {
  return { type: GLOBALS_SET, payload: { packageJson } };
}
