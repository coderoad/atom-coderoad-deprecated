import {fileExists} from '../../services/exists';
import {npmVersionThreeOrLater} from './check-system';
import {hasDirectory, hasPackageJson, hasTutorialDep} from './check-setup';
import {packageJsonExists, loadRootPackageJson, searchForTutorials} from '../tutorials/check-tutorials';
import {createPackageJson, openDirectory, installTutorial} from './setup-actions';
import * as path from 'path';

function allTrue(obj: Object): boolean {
  return Object.values(obj).every((x) => x === true);
}

function verified(checks: CR.Checks): boolean {
  return allTrue(checks.system) && allTrue(checks.setup);
}

function result(x) {
  return x;
}

export default function verifySetup(): CR.Checks {
  let checks: CR.Checks = {
    system: {
      node: true,
      npm: !!npmVersionThreeOrLater()
    },
    setup: {
      dir: !!hasDirectory(),
      packageJson: !!hasPackageJson(),
      tutorial: !!hasTutorialDep()
    }
  };

  checks.passed = verified(checks);
  return checks;
}
